const path = require('path');
const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|mp3)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      filename: 'sw.js',
      cacheId: 'projectName',
      staticFileGlobs: ['dist/*.{js,css,json,html,png}'],
      mergeStaticsConfig: true,
      stripPrefix: 'dist/',
      navigateFallback: '/',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({}),
  ],
};

module.exports = webpackConfig;
