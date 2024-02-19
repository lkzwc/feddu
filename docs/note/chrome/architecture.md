# 浏览器架构

## 浏览器
首先我们有必要说下浏览器，只有吧浏览器讲了，这才是一个从头到尾完整的流程说明。
关于进程、线程的概念不做表述，当一个应用程序启动的时候，可以理解为操作系统启动了一个进程，进程启动之后，CPU回给你进程分配对应的内存空间，当进程获取内存之后，就可以使用线程进行资源调度。

在应用程序当中，为了满足需要，启动的进程会创建另外的进程来处理其他任务，而创建出来的进程拥有全新的独立内存空间，如果要进行内存间的通信，将使用IPC机制

## 浏览器架构
* 单进程多线程
* 多进程

## Chrom

###  架构发展史
> 谷歌浏览器从08年开始支持多线程，以下是08年发布的模型，是一个多进程的，主要的进程有：渲染进程、浏览器进程、GPU、插件进程、sharedWorker进程，现如今，除了以上的分类，目前还有Network\Storage\Audio等

![image](https://github.com/lkzwc/fe-ddu/assets/84896877/f8c50875-1945-4aea-8b52-ff36a27ba107)
![image](https://github.com/lkzwc/fe-ddu/assets/84896877/cb12582e-2490-40a6-a0d3-f5b1b916630a)
![image](https://github.com/lkzwc/fe-ddu/assets/84896877/2d74c5ca-9524-4656-a89b-b65d1346d81e)

● 浏览器进程。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。
● 渲染进程。核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎Blink和JavaScript引擎V8都是运行在该进程中，默认情况下，Chrome会为每个Tab标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。
 * JS进程
 * HTTP进程
 * 定时触发进程
● GPU进程。其实，Chrome刚开始发布的时候是没有GPU进程的。而GPU的使用初衷是为了实现3D CSS的效果，只是随后网页、Chrome的UI界面都选择采用GPU来绘制，这使得GPU成为浏览器普遍的需求。最后，Chrome在其多进程架构上也引入了GPU进程。
● 网络进程。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。
● 插件进程。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。

### 多进程带来的优势
* 容错性更高
* 更高的安全性和沙盒性
* 更高的响应速度，避免单进程架构中任务抢夺CPU


### 进程模式
* Process-pre-site-instance 同一个site-instance使用一个进程 默认选项
* Process-per-site 同一个site使用一个进程
* Process-per-tab 每个T AB使用一个进程
* Single Process 所有tab使用一个进程

PS： site-instance: connected pages from the same site同一个界面连接的界面包括 window.open


* web worker
> 后台线程中运行脚本的方式，不干扰用户界面
* server worker 
> 作为web应用程序、浏览器和网络之前的代理服务器，可以进行推送，同步。常驻浏览器，本质是后台线程
* shared worker 