const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { paths, BUILD_DIR } = require('./webpack-helper');

module.exports = {
  entry: {
    app: path.join(paths.JS, 'app.js'),
    vendor: [
      'react',
      'react-dom'
    ]
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_DIR]),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
      title: 'Production'
    })
  ]
};
