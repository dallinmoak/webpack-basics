const { merge } = require('webpack-merge');
const webpackCommon = require('./common.config');


module.exports = merge(webpackCommon, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  }
});