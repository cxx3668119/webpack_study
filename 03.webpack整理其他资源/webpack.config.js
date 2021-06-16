const { options } = require('less');
const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      {
        // 正则表达式
        test: /\.css$/,//匹配资源
        use: [
          // { loader: "css-loader" }
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-preset-env")
                ]
              }
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: "file-loader"
      }
    ]
  }
}
