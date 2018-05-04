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



技术栈亮点

react前沿技术栈，组件化、高性能的工程化开发模式

使用了Material-UI框架,满足了用户的审美且增强了交互体验

express+mongodb，可快速构建 node 后端服务


未来规划:

在现有基础上，陆续推出更多的功能

尝试按功能模块拆分打包，做更精细的优化

开发react+node实现同构的 ssr 版本

使用react+GraphQL+node技术栈，开发GraphQL版本

如果时间充裕，推出React Native移动端版本(安卓+ios)

效果图如下:

首页
![](http://ovwvaynot.bkt.clouddn.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5.png)

文章页
![](http://ovwvaynot.bkt.clouddn.com/%E6%96%87%E7%AB%A0%E9%A1%B5.png)

登录与裁剪头像功能
![](http://ovwvaynot.bkt.clouddn.com/%E8%A3%81%E5%89%AA%E5%A4%B4%E5%83%8F%E5%8A%9F%E8%83%BD.gif
)


不太清楚为啥动一半卡主了,图片链接:http://ovwvaynot.bkt.clouddn.com/%E8%A3%81%E5%89%AA%E5%A4%B4%E5%83%8F%E5%8A%9F%E8%83%BD.gif





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


关于material-ui的实践体验

material-ui是国外开源的一个基于谷歌material设计理念的优秀的react UI库。


与它类似的还有后起之秀react-toolbox

这两个都是非常精美的UI库, 对于视觉的把握度非常高，同时提供了很多常用的组件，组件的可用性也非常的合理。

不足之处：

1，组件的性能相比ant design 等库逊色了不少，在移动端尤其糟糕。

2，灵活性较差。

3，主要输出UI层，很多逻辑层需要手动处理， 对于这点，ant design就显得更人性化一些。

4，可用组件不够丰富，类似于form，pagination，upload，message(消息提示)等常用基础组件一概没有，于是不得不寻找其他开源的组件，或手动封装来处理这些问题，这样就造成了UI风格不统一。

总的来讲material-ui是一个优秀的UI库，但在用户体验和功能性上略有不足。

技术交流
开源重点在于技术分享和交流。欢迎点赞与留言。
