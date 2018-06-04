
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public', // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true // 实时刷新
  },
  module: {
    // mode: 'development',
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env', 'react'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        // test 表示测试什么文件类型
        test:/\.css$/,
        // 使用 'style-loader','css-loader'
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins: [
      new webpack.BannerPlugin('版权所有，翻版必究'),
      new HtmlWebpackPlugin({
          template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      })
  ]
}