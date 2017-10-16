const webpack = require('webpack');
const path = require('path');

const webpackConfigMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.js');

const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

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
       }
     ]
   },
   resolve: {
     extensions: ['.js', '.jsx']
   }
 });
