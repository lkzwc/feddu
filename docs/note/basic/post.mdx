---
title: POST为什么会请求两次
slug: /post
---

## POST为什么会请求两次

> 跨域预请求

## 为什么会有跨域的问题
> 在浏览器当中，内容是很开放的，所有的资源都可以接入，但是如果对其不加以控制，就会出现一下的问题

* 跨站脚本攻击（XSS）
* SQL 注入攻击
*  命令注入攻击
* HTTP 首部注入攻击
* 跨站点请求伪造（CSR实际上是一种浏览器的安全机制

而能够解决此类问题的最基础的东西就是【同源策略】

## 同源策略
> 同源策略是一个重要的安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互, 如果两个 URL 的协议、主机和端口都相同，我们就称这两个 URL 同源。




### CORS
> CORS 也是一种跨域管理机制，定义了浏览器和服务器之间的一组规则，允许服务器决定是否允许跨域，并可配置

CORS 的基本思想是，服务器在响应中提供一个标头（HTTP 头），指示哪些源被允许访问资源。浏览器在发起跨域请求时会先发送一个预检请求（OPTIONS 请求）到服务器，服务器通过设置适当的 CORS 标头来指定是否允许跨域请求，并指定允许的请求源、方法、标头等信息

### CORB

> CORB 是一种更严格，用于阻止跨域读取攻击和数据泄漏的安全机制，是浏览器的默认行为

这里值得注意一点就是，跨域并不一定是浏览器不能发出请求，也有可能是收到请求之后，被浏览起拦截（请求返回之后，由网络进程下载之后交给浏览器的渲染进程，此时数据会被切割检查，排除掉不安全的部分可能会被阻止加载到渲染进程）


## 简单请求
* HTTP 方法限制：只能使用 GET、HEAD、POST 这三种 HTTP 方法之一
* 请求的 HTTP 标头只能是以下几种常见的标头：Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type（仅限于 application/x-www-form-urlencoded、multipart/form-data、text/plain）
* 没有使用 ReadableStream 对象

## 预检请求
所有的非简单请求，会在正式通行之前，增加一次HTTP查询请求，此请求称为预见请求

* 使用OPTIONS方法发起一个愚见请求到服务器，获知服务器是否允许
* Access-Control-Request-Method：该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法，上例是 POST。
* Access-Control-Request-Headers：该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段，上例是 content-type,x-secsdk-csrf-token。
* access-control-allow-origin：在上述例子中，表示 https://juejin.cn 可以请求数据，也可以设置为* 符号，表示统一任意跨源请求。
* access-control-max-age：该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是 1 天（86408 秒），即允许缓存该条回应 1 天（86408 秒），在此期间，不用发出另一条预检请求。

通过之后，每次请求就和简单请求一样，会有一个Origin的信息头子弹，服务器的响应，也会有个Access-Control-allow-Origin的信息头