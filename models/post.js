//文章表
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var PostSchema=new Schema({
  title:{type:String,require:true},
  content:{type:String,require:true},
  category:{type:Schema.Types.ObjectId,ref:"",required:true},//种类
  author:{type:Schema.Types.ObjectId,ref:"User",required:true},
  comments: [{ body: String, date: Date, }],
  likedCount:{type:Number,required:true},
  created:{type:Date},//创建时间
  
})
module.exports=mongoose.model('Post',PostSchema)
