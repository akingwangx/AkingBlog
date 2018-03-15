//文章表
var mongoose = require('mongoose')
var Schema = mongoose.Schema
const DB_URL='mongodb://localhost:27017/AkingBlog'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
  console.log('mongo连上了')
})
var PostSchema=new Schema({
  title:{type:String,require:true},
  content:{type:String,require:true},
  category:{type:Schema.Types.ObjectId,required:true},//种类
  author:{type:Schema.Types.ObjectId,required:true},
  authorIcon:{type:String,required:true},
  comments: [{ body: String, date: Date, }],
  likedCount:{type:Number,required:true},
  created:{type:Date},//创建时间
})
module.exports=mongoose.model('Post',PostSchema)
