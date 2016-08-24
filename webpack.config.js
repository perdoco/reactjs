var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [APP_DIR + '/app.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpg|jpeg|gif|png)$/,
      loader:'file-loader?name=img/[name].[ext]'
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      loader: "file"
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  },
  plugins: [
    new ExtractTextPlugin( "bundle.css" ),
    new CopyWebpackPlugin([
        { from: './img', to:'img' }
    ]),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Perdoco',
      filename: 'index.html',
      template: APP_DIR + '/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  postcss: [autoprefixer]
};

module.exports = config;