
const path=require('path')

module.exports={
  //指定资源文件路径
  entry:{
    app:path.join(__dirname,'../client/server-entry.js')
  },
  //指定输出的目录
  output:{
    filename:'server-entry.js',
    path:path.join(__dirname,'../dist'),
    publicPath:'/public/',
    libraryTarget:'commonjs2'
  },
  module:{
    rules:[
      {
        test:/.jsx$/,
        loader:'babel-loader',
      },
      {
        test:/.js$/,
        loader:'babel-loader',
        exclude:[
          path.join(__dirname,'../node_modules')
        ]
      }
    ]
  },

}
// publicPath名字加在前面/app.hash.js