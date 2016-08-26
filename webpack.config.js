const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: [SRC_DIR + '/_app.jsx'],
  output: {
    path: BUILD_DIR,
    filename: '_app'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel?cacheDirectory']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.(eot|ttf|svg|woff|woff2)$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    },]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/img', to:'img' },
    ], {
      copyUnmodified: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Perdoco',
      filename: 'index.html',
      template: SRC_DIR + '/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
  ]
};

module.exports = config;