const Order = require('../models/orderModel')

module.exports = {
  index: async(req,res,next)=>{
    try{
      const orders = await Order.find({})
      res.status(200).json(orders)
    }catch(e){
      res.status(400).json(e)
    }
  },
  updateOrder: async(req,res,next)=>{
    try{
      const {id} = req.params
      const newOrder = req.body
      const oldOrder = await Order.findByIdAndUpdate(id,newOrder)
      res.status(200).json({success:true})
    }catch(e){
      res.status(400).json(e)
    }
  }
}