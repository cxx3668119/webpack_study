const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { plugins } = require('../07.source-map/wk.config');

module.exports = {
  watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}