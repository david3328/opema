const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  number:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true 
  },
  quantity:{
    type:Number,
    required:true
  },
  units:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  codppto:{
    type:String,
    required:true
  },
  codpomdihma:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now()
  },
  tracing:{
    type:String
  },
  estimatedCost:{
    type:Number,
    required:true
  },
  realCost:{
    type:Number,
    required:true
  },
  area:{
    type:Schema.Types.ObjectId,
    ref:'area'
  }
})

module.exports = mongoose.model('order',orderSchema)