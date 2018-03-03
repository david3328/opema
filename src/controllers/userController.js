const bcrypt = require('bcrypt')
const User = require('../models/userModel')

module.exports = {
  index: async(req,res,next)=>{
    try{
      const users = await User.find({})
      res.status(200).json(users)
    }catch(e){
      res.status(400).json(e)
    }    
  },
  newUser: async(req,res,next)=>{
    try{
      const newUser = new User(req.body)
      newUser.password = await bcrypt.hash(newUser.password,10)
      const user = await newUser.save()
      res.status(200).json(user)
    }catch(e){
      res.status(400).json(e)
    }
  }
}