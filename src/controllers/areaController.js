const Area = require('../models/areaModel')

module.exports={
  index: async(req,res,next)=>{
    try{
      const areas = await Area.find({})
      res.status(200).json(areas)
    }catch(e){
      res.status(400).json(e)
    }    
  },
  newArea: async(req,res,next)=>{
    try{
      const newArea = new Area(req.body)
      const area = await newArea.save()
      res.status(200).json(area)
    }catch(e){
      res.status(400).json(e)
    }    
  },
  updateArea: async(req,res,next)=>{
    try{
      const {id} = req.params
      const newArea = req.body
      const area = await Area.findByIdAndUpdate(id,newArea)
      res.status(200).json({success:true})
    }catch(e){
      res.status(400).json(e)
    }
  },
  deleteArea: async(req,res,next)=>{
    try{
      const {id} = req.params
      await Area.findByIdAndRemove(id)
      res.status(200).json({success:true})
    }catch(e){
      res.status(400).json(e)
    }
  }
}