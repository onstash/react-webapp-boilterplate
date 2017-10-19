const webpack = require('webpack');
const path = require('path');

const webpackConfigMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.js');

const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackConfigMerge(commonWebpackConfig, {
   plugins: [
     new UglifyJSWebpackPlugin(),
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     }),
     new webpack.HashedModuleIdsPlugin(),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor',
       minChunks: Infinity
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'runtime'
     }),
     new ExtractTextPlugin({
       filename: '[name].[contenthash].css',
       allChunks: true
     })
   ],
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         include: path.resolve(__dirname, "src"),
         exclude: /node_modules/,
         use: [
           'babel-loader'
         ]
       },
       {
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           //resolve-url-loader may be chained before sass-loader if necessary
           use: ['css-loader', 'sass-loader']
         })
       }
     ]
   },
   resolve: {
     extensions: ['.js', '.jsx']
   }
 });
