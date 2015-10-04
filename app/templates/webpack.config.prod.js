/*eslint-disable */
var path = require('path');

module.exports = {
  entry: [
    './lib/public/js/client-app.js'
  ],
  output: {
    path: path.join(__dirname, 'lib/public/js/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};
