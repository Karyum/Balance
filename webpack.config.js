const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|mp3)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      filename: 'sw.js',
      cacheId: 'projectName',
      staticFileGlobs: ['dist/*.{js,css,json,html}'],
      minify: true,
      mergeStaticsConfig: true,
      stripPrefix: 'dist/',
      navigateFallback: '/dist'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      serviceWorker: '/sw.js'
    }),
    new webpack.optimize.UglifyJsPlugin({})
  ]
};

if (process.env.ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
