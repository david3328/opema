const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const moment = require('moment')
const {SECRET} = require('../config')

const createToken = (user)=>{
  const payload = {
    sub: user.username,
    iat: moment().unix(),
    exp: moment().add(14,'days').unix()
  }
  return jwt.sign({payload},SECRET)
}

module.exports = {
  signIn: async(req,res,next)=>{
    try{
      const username = req.body.username
      const user = await User.findOne({username})
      if(!user) return res.status(404).json({success:false,message:'Error al autenticar, usuario no existe.'}) // or return res.status(401) no existe
      const isUser = await bcrypt.compare(req.body.password,user.password)
      if(!isUser) return res.status(404).json({success:false,message:'Error al autenticar, password invalido.'}) // or return res.status(401) password
      res.status(200).json({success:true,token:createToken(user)})
    }catch(e){
      res.status(400).json(e)
    }
  },
  isAuth: (req,res,next)=>{
    if(!req.headers['authorization']) res.status(403).json({success:false,message:'No tienes autorización.'})
    const token = req.headers['authorization']
    jwt.verify(token,SECRET,(err,data)=>{
      if(err) return res.status(403).json({success:false,message:'Token invalido'})
      if(data.payload.exp <= moment().unix()) return res.status(401).json({success:false,message:'El token ha expirado'})
      next()
    })
  }
}