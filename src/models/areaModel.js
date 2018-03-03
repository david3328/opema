const mongoose = require('mongoose')
const Schema = mongoose.Schema

const areaSchema = new Schema({
  number:{
    type:Number,
    required:true,
    unique:true
  },
  name: {
    type:String,
    required:true
  }
})

module.exports = mongoose.model('area',areaSchema)