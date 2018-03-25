const express = require('express')
const cookie = require('cookie-parser')
const Router = express.Router()
const PostModel = require('../models/post')

Router.post('/upload', (req, res) => {
  console.log(req.body)
  const { html, userid, title, content } = req.body
  PostModel.create({ html: html, author: userid, postTitle: title, postContent: content }, (err, doc) => {
    if (err) {
      return res.json({ code: 1, msg: '后端出错' })
    }
    PostModel.findOne({ _id: doc._id }).populate('author').exec(function (err, docs) {
      if (err) {
        return res.json({ code: 1, msg: '后端出错' })
      }
      res.cookie('postid', docs._id)
      return res.json({ code: 0, data: docs })
    })
  })
})
//页面刷新后还有文章
Router.get('/postinfo', (req, res) => {
  const { postid } = req.cookies
  if (!postid) {
    return res.json({ code: 1, msg: '!postid' })
  }
  PostModel.findOne({ _id: postid }).populate('author').exec(function (err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错' })
    }
    if (doc) {

      return res.json({ code: 0, data: doc })
    }
  })
})
Router.get('/allpost', (req, res) => {
  PostModel.find({}).populate('author').exec(function (err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错' })
    }
    if (doc) {
      return res.json({ code: 0, data: doc })
    }
  })
})


Router.get('/getpost', (req, res) => {

  PostModel.findOne({ _id: req.query.id }).populate('author').exec(function (err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错' })
    }
    PostModel.update({ _id: req.query.id }, { '$set': { viewCount: doc.viewCount + 1 } }, (function (err, docs) {
      if (err) {
        return res.json({ code: 1, msg: '出错' })
      }
      console.log(docs)
      res.cookie('postid', doc._id)
      return res.json({ code: 0, data: doc })
    }))

  })
})

Router.post('/addcomments',(req,res)=>{
  console.log(req.body)
  
  PostModel.findOne({ _id: req.cookies.postid }).populate('author').exec(function (err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端出错' })
    }
    let comment={
      nickname:req.body.nickname,
      avatar:req.body.avatar,
      creatd:new Date(),
      content:req.body.content
    }
    doc.comments.unshift(comment)
    doc.save(function(err,docs){
      if(!err){
        return res.json({code:0,data:doc.comments})
      }
    })
})
})
module.exports = Router