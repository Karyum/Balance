const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.config.js');
const webpack = require('webpack');

module.exports = merge(webpackBase, {
  plugins: [new webpack.optimize.UglifyJsPlugin({})],
});
