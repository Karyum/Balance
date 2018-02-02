const path = require('path');
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

  plugins: [
    new SWPrecacheWebpackPlugin({
      filename: 'sw.js',
      cacheId: 'projectName',
      navigateFallback: '/index.html',
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};

module.exports = webpackConfig;
