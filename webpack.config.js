const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared'
    },
    print: {
      import: './src/print.js',
      dependOn: 'shared'
    },
    shared: 'lodash'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'code splitting using webpack entry configuration'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}