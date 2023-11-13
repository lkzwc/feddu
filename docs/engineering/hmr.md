---
title: 热更新
slug: /hmr
tags: ['热更新','Webpack']
---

## HMR 原理
Hot Module Replacement
* web-packdev-server WDS托管静态资源，同时以RunTime方式注入
* 浏览器加载界面后，WDS和WebSocket连接
* webpack监听文件变化后，增量构建，并通过websocket发送hash事件
* 浏览器接收到hash事件之后，请求资源文件，加载变更的增量模块
* webpack触发回调，将最新的代码替换到运行环境中