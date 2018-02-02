const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.config.js');
const path = require('path');

module.exports = merge(webpackBase, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
  },
  devtool: 'inline-source-map',
});
