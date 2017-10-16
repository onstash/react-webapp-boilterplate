const webpack = require('webpack');

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
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor', // Specify the common bundle's name.
       minChunks: Infinity,
       // (with more entries, this ensures that no other module
       //  goes into the vendor chunk)
     })
   ],
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
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
