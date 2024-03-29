---
slug: /link
title: 从URL输入到界面展示发生了什么
tags: ["URL输入", "垃圾回收"]
---

![image](https://github.com/lkzwc/fe-ddu/assets/84896877/48470369-48b1-4854-8d6e-701990c47a9b)
## URL输入到看见界面发生了什么
> 首先我们从大的方面说一下吧，后边细节在补充
* 预请求
* DNS解析
* TCP链接
* HTTP请求
* 服务器响应http
* 浏览器解析
* 渲染呈现
* 断开连接


## 预请求
* 浏览器进程会通过进程间通信（IPC）把URL请求发送至网络进程
* 查询缓存
* 进入网络请求流程

## DNS解析
> 目的是将我们输入的域名解析到对应的IP地址，整个过程是递归查询的，查询的途径有：
* 本地浏览器的缓存
* 系统缓存host
* 路由器缓存
* 互联网的DND缓存
* 域名服务其缓存
### 附加问题
#### 为什么要配置host，而不用ip？
> 原因是浏览器的同源策略（协议、域名、端口）
#### 跨域问题解决：
  *  location.hash + iframe
  *  window.postMessage()
  *  跨域资源共享 CORS  (XMLHttpRequest请求  )
   * Websockets
![image](https://user-images.githubusercontent.com/84896877/179012013-780903d8-604a-4381-be76-4c2b723906d9.png)

## TCP 连接
> TCP提供可靠的传输协议、UDP提供不可靠的传输协议
* 三次握手
 1.客户端向服务器发送SYN标志的数据包（S确认自己接收正常，对方发送正常）
  2.服务端发送带有SYN+ACK（代表应答） 的应答包（C确认接收正常，发送正常，对方发送正常、接收正常）
  3.客户端发送ACK的应答数据包（S确认自己发送正常，对方接收正常）
* 为什么需要三次？
  只有三次才会同步双方序列号，只有三次可以避免重复连接
  
* 四次挥手
 1.客户端发送带FIN=1,seq=u数据包
 2.服务器进入Close-wait状态，发送ack=1,seq=u+1 (客户端到服务端的连接释放，但是服务端到客户端连接存在)
 3.服务器发送释放报文FIN=1，ack=u+1
 4.客户端应答ack=w+1，seq=u+1,发送完毕等待2msl，然后关闭

## HTTP请求
当建立起T CP请求之后，服务端会持续监听，客户端发送请求，服务器响应请求，这就是http的主要特点，遵循客户端、服务端的模型
### HTTP1
http1.0到1.1，1.0中，每一对 http请求都会打开一个TCP连接，通过设置Connection头部为keep-alive的方式，实现了TCP的复用,语义可读
### HTTP2
* 多路复用：将http请求消息拆分为独立的帧，交错发送，实现一个连接上并行多个请求，
* 头部二进制编码，语义不可读
* 向客户端推送,目前谷歌已经放弃[详见](https://developer.chrome.com/blog/removing-push/)
* 优先级
### HTTP3
UDP+QUIC协议（处理错误）实现更快更可靠的传输

### HTTPS 
* 使用SSL(Secure Sockets Layer)和TLS协议
* 服务端和客户端通信之间使用堆成或非对称加密
* 数字证书，客户端服务器建立连接时候，会进行证书校验

### HTTP cookie
由于协议无任何状态，前后的连接之间没有任何的关系，那么用户在同一个网站操作，服务器如何识别呢？这就因此诞生了cookie
服务器返回数据，通过在响应头中添加Set-Cookie，浏览器保存cookie，后期发起请求的时候带上cookie。由于cookie是浏览器自动识别保存并发送的，默认请求浏览器关闭就会删除，但是我们也可以通过设置Expires超时时间或者有效期

由于网站设置cookie 之后，符合请求的连接都会被自动带上cookie,于是就造成了一种安全漏洞（CSRF 跨站伪造），当然这种漏洞可以可以通过检查请求头中的referer,但是这个字段有可能也被篡改，一般最合适的解决方式就是，使用其他方式校验用户登录态，比如token

### HTTP缓存
* 强缓存
> 规定有效期内直接使用缓存
使用方式：1.服务器通过设置Expires,Cache-control和客户端约定缓存时长，2.符合缓存条件，浏览器响应200
* 协商缓存
 >  和服务器协商是否使用缓存
 使用方式：1.服务器设置If-Modified-Since和If-None-Match，和客户端约定协商缓存的值，2.有效期过了之后，浏览器讲缓存信息中的Etag、Last-Modified 信息，分别使用If-Modified-Since和If-None-Match设置请求头，提交给服务器。3.若最新数据和缓存一致，则服务器响应304，将从浏览器缓存读取数据，否则返回最新数据并缓存
### HTTP请求组包


## 服务器响应http

### 流程
* 301/302处理
* 根据Content-Type获取具体的数据
* 准备渲染进程（默认策略叫process-per-site-instance）
* 提交文档
   ![image](https://github.com/lkzwc/fe-ddu/assets/84896877/124f7f8a-d15e-4c37-a453-d776d853a237)
* 渲染

## 解析
### 构建DOM树
### 构建CSS树
* 转化样式表：将行内，style，link等样式转化为浏览器可以识别的样式表
* 标准化样式值：比如EM转化等
* 具体样式计算：（CSS的继承和层叠）

## 渲染呈现

### 创建布局树：
### 创建图层树：(层叠、裁剪)
### 图层绘制
### 珊格化
> 由于视口的关系，有些图层会很大，不便全部绘制，于是就有了图块的概念，合成线程会将图层划分为图块（tile），这些图块的大小通常是256x256或者512x512
![image](https://github.com/lkzwc/fe-ddu/assets/84896877/1ec3c196-ceb6-4845-ba80-d15a89c57b0c)
### 合成与展示
> 一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。紧接这会在内存中绘制并将其展示。

### 渲染流程
1. 渲染进程将HTML内容转换为能够读懂的DOM树结构。
2. 渲染引擎将CSS样式表转化为浏览器可以理解的styleSheets，计算出DOM节点的样式。
3. 创建布局树，并计算元素的布局信息。
4. 对布局树进行分层，并生成分层树。
5. 为每个图层生成绘制列表，并将其提交到合成线程。
6. 合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。
7. 合成线程发送绘制图块命令DrawQuad给浏览器进程。
8. 浏览器进程根据DrawQuad消息生成页面，并显示到显示器上。

## 断开


## 总结
> 输入->UI线程判断->网络线程->网络线程发起请求->响应HTML->网络进程解析->判断可以渲染->通知UI线程->寻找或启动渲染进程->[浏览器进程<=IPC通信确认=>渲染器进程]->渲染器->加载渲染->IPC通知浏览器进程已加载