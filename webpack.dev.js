const webpack = require('webpack');

const webpackConfigMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.js');

const BUILD_DIR = 'build';

module.exports = webpackConfigMerge(commonWebpackConfig, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: `./${BUILD_DIR}`,
     hot: true
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('development')
       }
     }),
     new webpack.NamedModulesPlugin(),
     new webpack.optimize.CommonsChunkPlugin({
       name: "vendor",
       minChunks: Infinity
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: "runtime"
     })
   ]
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