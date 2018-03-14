const Order = require('../models/orderModel')
const orderDetail  = require('../models/orderDetailModel')

module.exports = {
  index: async(req,res,next)=>{
    try{
      const orders = await Order.find({}).populate('area').populate('details')
      res.status(200).json(orders)
    }catch(e){
      res.status(400).json(e)
    }
  },
  newOrder: async(req,res,next)=>{
    try{
      const newOrder = new Order(req.body);
      details = req.body.details
      newOrder.details = []
      const order = await newOrder.save()
      details.forEach(async(detail)=>{
        const newDetail = new orderDetail(detail)
        newDetail.order = order 
        const test = await newDetail.save()
        order.details.push(newDetail)
        await order.save()
      })
      res.status(200).json({success:true,message:'Añadido correctamente'})
    }catch(e){
      console.log(e)
      res.status(400).json({success:false,message:'Ocurrio un error',error:e})
    }
  }
}