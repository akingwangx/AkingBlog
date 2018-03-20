const express = require('express')
const userRouter=require('./user')

const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

//数据库模型
const Post = require('../models/post')
const User = require('../models/user')
const Schema = mongoose.Schema
const DB_URL = 'mongodb://localhost:27017/AkingBlog'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('mongo连上了')
})

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api/user',userRouter)
// app.use(express.static(path.join(__dirname, 'server')));
app.listen(3333, function () {
  console.log('启动3333端口')
})
// User.create({user:'admin',nickname:'王鑫aking',password:'woaini1314',type:'admin'})
// User.remove({}, function (err) {
//   if (err) return handleError(err);
//   // removed!
// })
app.get('/api/user/register', (req, res) => {
  User.find({}, (err, doc) => {
    res.send(doc)
  })
})
// if (!isDev) {
//   const serverEntry = require('../client/server-entry').default
//   const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
//   app.use('/public', express.static(path.join(__dirname, '../dist')))
//   app.get('*', function (req, res) {
//     const appString = ReactSSR.renderToString(serverEntry)
//     res.send(template.replace('<!-- app -->', appString))
//   })
// }
// else{
//   const devStatic=require('../util/dev-static')
//   devStatic(app)
// }
