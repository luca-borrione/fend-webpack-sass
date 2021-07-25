const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/client/index.js',
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    libraryTarget: 'var',
    library: 'Client'
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      protectWebpackAssets: false
    }),
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    })
  ],
  // devServer: {
  //   writeToDisk: true
  // }
};