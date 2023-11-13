---
title: vite为什么快
slug: /vite
tags: ['vite','Webpack']
---

## vite 原理
首先vite将程序分为源码和依赖两类，改进了启动时间
* 依赖使用 esbuild构建 其使用go编写，速度快
* 源码使用原生ESM方式，实际是让浏览器接管打包程序的部分工作，其他按需编译
* 热更新缓存