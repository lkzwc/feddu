---
title: vite为什么快
slug: /vite
tags: ['vite','Webpack']
---

## ESM 
首先在说vite之前，我们看下ESM，目前大多数浏览器已经支持ESM，只需要在script中加入type="module",就可以使用ESM了。

```
export default function hello() {
  console.log('hello world');
}

// index.html
<script type="module">
  import hello from './test.js';

  hello(); // hello world
</scirpt>
```
当浏览器遇到import的时候，会自动发器http请求，加载对应的模块

## vite 原理
vite开发环境依赖esbuild进行预构建，生产环境则依赖rollup进行打包，并且充分利用了现代浏览器的特性，比如http2、ES module，vite是站在众多巨人肩膀上的一个产物

首先vite将程序分为源码和依赖两类，改进了启动时间，本身使用的ESM技术


* 首先使用 esbuild预构建 其使用go编写，速度快，将所有模块转化为ES Module，不需要对整改项目进行打包
* 浏览器加载模块时候，拦截发出的请求，按需编译返回给浏览器
* http2
* 热更新缓存
> vite 项目中监听到文件变更=>websocket同时浏览器重新请求=>只对该模块编译并基于ESM，利用HTTP缓存机制进行处理