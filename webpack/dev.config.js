const { merge } = require('webpack-merge');
const webpackCommon = require('./common.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpackCommon, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css'
    })
  ],
  devServer: {
    host: 'localhost',
    port: '3000',
    historyApiFallback: true,
  }
});