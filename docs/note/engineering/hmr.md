# 热更新

## Webpack的原理
> 使用webpack启动项目时，webpack会根据我们配置文件（webpack.config.js） 中的入口文件（entry），分析出项目项目所有依赖关系，然后打包成一个文件（bundle.js），交给浏览器去加载渲染。


由于基于nodejs运行，无法利用多核CPU的优势


## HMR 原理
Hot Module Replacement
* webpack-dev-server WDS托管静态资源，同时以RunTime方式注入
* WDS启动的时候建立浏览器和WebSocket连接
* webpack监听文件变化后，增量构建，并通过websocket发送hash事件
* 浏览器接收到hash事件之后，请求资源文件，加载变更的增量模块
* webpack触发回调，将最新的代码替换到运行环境中

## 加快速度
> 在webpack中耗时最久的当属负责AST转化的loader
* 使用更快的swc-loader
* cache开启缓存 type: filesystem
* 多进程 thread-loader 替代4中的happypack

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: 8,
            },
          },
          "babel-loader",
        ],
      },
    ],
  },
};
```
