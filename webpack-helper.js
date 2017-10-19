const path = require('path');

const BUILD_DIR = 'build';
const paths = {
  BUILD: path.resolve(__dirname, BUILD_DIR),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
  BUILD_DIR,
  paths
};
