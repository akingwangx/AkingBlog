'use strict';

var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV;
var config = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
          include:[path.resolve(__dirname, 'src/style')]
      },
    ],
  },
  entry: [ __dirname + '/src/index.js'],
  output: {
      path: __dirname + '/lib',
      filename: 'index.js',
      publicPath:'/',
      libraryTarget: 'umd',
      library : 'react-web-dom'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
  ],
  externals : [
      {
          'react' : 'react',
          'prop-types' : 'prop-types',
      },
      /^antd-mobile\/.+$/
  ]
};

    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false,
                screw_ie8: false
            },
            mangle: {
                screw_ie8: false
            },
            output: {
                screw_ie8: false
            }
        }),
        new webpack.DefinePlugin({
            // <-- 减少 React 大小的关键
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false, //去掉注释
            compress: {
                warnings: false //忽略警告,要不然会有一大堆的黄色字体出现……
            }
        }), //最小化一切
        new webpack.optimize.AggressiveMergingPlugin() //合并块
    );


module.exports = config;
