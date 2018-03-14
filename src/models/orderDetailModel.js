const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderDetailSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'order'
  },
  description:{
    type:String,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  },
  unit:{
    type:String,
    required:true
  },
  tracing:String,
  estimatedCost:{
    type:Number,
    required:true
  },
  realCost:{
    type:Number,
    required:true
  }
})

module.exports = mongoose.model('orderDetail',orderDetailSchema)