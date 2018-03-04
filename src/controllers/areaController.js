const Area = require('../models/areaModel')

module.exports={
  index: async(req,res,next)=>{
    try{
      const areas = await Area.find({}).sort({number:1})
      res.status(200).json(areas)
    }catch(e){
      res.status(400).json(e)
    }    
  },
  newArea: async(req,res,next)=>{
    try{
      const newArea = new Area(req.body)
      const area = await newArea.save()
      res.status(200).json({success:true,message:'Añadido correctamente'})
    }catch(e){
      res.status(400).json({success:false,message:'Ocurrio un error',error:e})
    }    
  },
  updateArea: async(req,res,next)=>{
    try{
      const {id} = req.params
      const newArea = req.body
      const area = await Area.findByIdAndUpdate(id,newArea)
      res.status(200).json({success:true,message:'Actualizado correctamente'})
    }catch(e){
      res.status(400).json({success:false,message:'Ocurrio un error',error:e})
    }
  },
  deleteArea: async(req,res,next)=>{
    try{
      const {id} = req.params
      await Area.findByIdAndRemove(id)
      res.status(200).json({success:true})
    }catch(e){
      res.status(400).json({success:false,message:'Ocurrio un error',error:e})
    }
  }
}