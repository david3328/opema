const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  number:{
    type:Number,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  codpoi:{
    type:String,
    required:true
  },
  codpomdihma:{
    type:String,
    required:true
  },
  orderDate:{
    type:Date,
    default:Date.now()
  },
  servedDate:Date,
  serviceDate:Date,
  area:{
    type:Schema.Types.ObjectId,
    ref:'area'
  },
  details:[{
    type:Schema.Types.ObjectId,
    ref:'orderDetail'
  }]
})

module.exports = mongoose.model('order',orderSchema)