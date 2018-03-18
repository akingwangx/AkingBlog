//用户表
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var UserSchema=new Schema({
  user:{type:String,require:true},
  nickname:{type:String,require:true},
  password:{type:String,require:true},
  type:{type:String,require:true},
  avatar:{type:String}

})
module.exports=mongoose.model('User',UserSchema)
