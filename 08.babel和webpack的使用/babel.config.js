module.exports = {
  presets: [
    ["@babel/preset-env", {
      useBuiltIns: "usage",
      // false 不使用任何polyfill代码
      // usage 代码中的polyfill按需引入
      // entry 需求都引入 需要手动在入口文件导入
      corejs: 3
    }]
  ]
}