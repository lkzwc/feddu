---
slug: /cjs
title: 模块化
---

## Why
主要是为了解决项目中的各种命名冲突、文件依赖等等问题

## How
将代码自顶向下模块化划分

## 常见方式和区别
|  模块化 |  CJS | AMD |   ESM | UMD |
| ---- | ----- | ----- |  ----- | ----- | 
| 名称 |  commonJS  | amd  | es6 module  |  umd兼容 cjs 与 amd 的模块 | 
| 实现|  require 及 module.exports | require.js  | import export  |  判断cjs存在，是执行cjs,再判断支持AMD，则用AMD 加载 | 
| 加载|  运行时同步加载,不支持异步 | 异步加载（require）  | 编译时确定模块依赖 |  兼容 cjs 与 amd 的模块 | 
| 状态|  node支持 | 残余势力  |  官方加持|  --| 
| 方式|  缓存 | ---  |  动态只读引入|  --| 
 