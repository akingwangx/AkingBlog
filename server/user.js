const express =require('express')
const utils=require('utility')//密码加密
const cookie=require('cookie-parser')
const Router =express.Router()
const UserModel=require('./../models/user')

Router.get('/list',(req,res)=>{
  UserModel.findOne({},(err,doc)=>{
    return res.json(doc)
  })
})
Router.post('/register',(req,res)=>{
  const {user,nickname,password}=req.body
  UserModel.findOne({user:user},(err,doc)=>{
    if(doc){
      return res.json({code:1,msg:'用户名已被占用'})
    }
    const userModel=new UserModel({user,nickname,password:utils.md5(password)})
    userModel.save((err,doc)=>{
      if(err){
        return res.json({code:1,msg:'后端出错了'})
      }
      const {user,_id}=doc
      res.cookie('userid',_id)
      return res.json({code:0,data:{user,_id}})
    })
  })
})
Router.post('/login',(req,res)=>{
  const {user,password}=req.body
  //第二个参数password:0是让返回中不显示
  UserModel.findOne({user:user,password:utils.md5(password)},{password:0},(err,doc)=>{ 
    if(doc){
      res.cookie('userid',doc._id)
      return res.json({code:0,data:doc})
     
    }else{
      return res.json({code:1,msg:'用户名密码错误'})
    }
    if(err){
      return res.json({code:1,msg:'后端出错了'})
    }
    
  })
})
Router.get('/info',(req,res)=>{
  const {userid} =req.cookies
  if(!userid){
    return res.json({code:1})
  }
  UserModel.findOne({_id:userid},{password:0},(err,doc)=>{
  if(err){
    return res.json({code:1,msg:'后端出错'}) 
  }
  if(doc){
    return res.json({code:0,data:doc})
  }
  })
 
})

module.exports =Router