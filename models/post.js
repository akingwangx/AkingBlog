const mongoos=require('mongoose')
const Schema=mongoose.Schema

var PostSchema=new Schema({
  title:{type:String,require:true},
  content:{type:String,require:true},
  category:{type:Schema.Types.ObjectId,required:true},
  author:{type:Schema.Types.ObjectId,required:true},

})
mongoose.model('Post',PostSchema)