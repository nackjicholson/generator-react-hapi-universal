/*eslint-disable */
var path = require('path');
var webpack = require('webpack');
var prodConfig = require('./webpack.config.prod');

module.exports = Object.assign(prodConfig, {
  entry:  [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './lib/public/js/client-app.js'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test:    /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + 8000
    },
    host: '127.0.0.1'
  }
});
