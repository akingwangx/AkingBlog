//文章表
const mongoose = require('mongoose')

const Schema = mongoose.Schema
var PostSchema=new Schema({
  postTitle:{type:String,required:true},
  postContent:{type:String,required:true},
  // category:{type:Schema.Types.ObjectId,ref:"",required:true},//种类
  author:{type:Schema.Types.ObjectId,ref:"User"},
  comments: [{ body: String, date: Date, }],
  likedCount:{type:Number,default:0},
  viewCount:{type:Number,default:0},
  createday:{type:Date,default: Date.now},//创建时间
  html:{type:String,required:true}
})
module.exports=mongoose.model('Post',PostSchema)
