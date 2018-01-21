const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    default: './src/default/index.js',
    withModel: './src/with-model/index.js',
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: './src/default/index.html',
      filename: 'default.html',
      inject: 'body',
      chunks: ['default'],
    }),
    new HtmlWebpackPlugin({
      template: './src/with-model/index.html',
      filename: 'with-model.html',
      inject: 'body',
      chunks: ['withModel'],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
};
