const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = 'build';
const paths = {
  BUILD: path.resolve(__dirname, BUILD_DIR),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

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
  ],
  output: {
    path: paths.BUILD,
    filename: '[name].[chunkhash].js'
  }
};
