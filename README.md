## 简介

AkingBlog是一个基于react+react-redux+material-ui技术栈开发的，从零配置webpack构建的个人开源项目。
目标是打造一个小型社区论坛,为程序猿&&攻城狮提供一个简洁明亮的写文章的地方。


( 开源重点在于技术分享和交流，如果觉得可以，右上角点颗星星喔~ )

技术选型

前端:
webpack3, react ,react-router,  react-redux , material-ui, axios, es6, babel
后端:
nodejs, express, mongoose, es6/7,  async/await
部署/服务器

暂时没有部署


## HOW TO USE?

一，前端


可以使用git，当然也可以直接download

git clone git@github.com:akingwangx/AkingBlog.git
安装依赖

 npm install 或者 yarn



二，设置webpack代理 ，处理跨域问题（使用默认配置可忽略本项）

本地开发 

1, 通过设置proxy代理，可来避免跨域问题 

2, webpack配置地址：/build/webpack.dev.js ，如下:
proxy: {
       '/api' : {
         target: 'http://localhost:8080',
         secure: false
       },
      }  

三，项目启动

开发环境

npm run dev:client

正式环境 (打包构建)

npm start 或者 yarn start  

