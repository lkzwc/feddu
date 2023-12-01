# 事件循环

没有废话，只有干货，简单的概念就不说了，如果要先说事件循环，那么必须插一嘴，同步任务和异步任务，要说同步任务和异步任务，那么还的先说下 JS 单线程。

## JS 单线程

大家肯定都知道，JS 是一个单线程，如果设计为多线程，考虑下各种 DOM 操作，无疑增加很大的复杂性，而且设计之初只是为了完成简单的任务，并没有考虑如此复杂！

## 同步任务 异步任务

说起同步任务和异步任务，首先我们说说它们为什么会出现，由于 JS 是单线程的，我们只能等一个任务结束之后再去执行另外一个任务，这样如果遇到数据请求、文件操作需要等待很长时间，为了提交效率，我们可以在等待的过程中去干其他的，这样异步任务就出现了，异步任务需要等待到结果之后才能接着去执行，而同步是立即执行的

- 同步任务
  > 在主线程上排队执行的任务，只有前一个任务完成，下一个才可以执行
- 异步任务

  > 不进入主线程，而进入任务队列，只有任务对列通知主线程的时候才会去执行

- 事件循环
  > 初始状态，执行栈为空，微任务为空，整体代码入栈执行。首先同步代码执行，执行的过程中，会判断区分同步异步，区分宏任务、微任务，分别推入各自的队列。当同步执行完之后，脚本会被移动队列，（本质上是宏任务队列）当主线程上的任务执行完毕的时候，会从任务队列中读取事件，执行微任务，微任务执行完毕之后，执行宏任务，一次循环结束（Tick）,以此反复运行称之为事件循环！

## 执行栈和任务队列

执行栈放的都是同步任务
任务队列是异步任务，这里我们需要注意一点就是，**是到时候(异步任务有了运行结果，在任务队列中放置一个事件)之后才放入队列，不是到时间之后去执行。**

## nextTick && setImmediate

netTick 同步任务执行之后，异步任务执行之前执行
setImmediate 每一轮的事件循环结束之后执行

## 宏任务和微任务

宏任务和微任务都是属于任务对列之中的
宏任务：setTimeout、setImmediate、requestAnimationFrame
微任务：Promise.then()、MutationObserver

## 小练一下

![image](https://user-images.githubusercontent.com/84896877/169861589-50f01d23-3478-4a3c-b89f-51effcce82bc.png)

## 千言万语汇成一幅图

![image](https://user-images.githubusercontent.com/84896877/169862605-17c472c3-4fb9-47c1-bceb-053cca3cc672.png)

当然最后的顺序也很重要

1. 同步任务
2. nextTick
3. 微任务
4. 宏任务
5. setImmediate

再看一个

```
Promise.resolve().then(()=>{
  console.log("a")
  setTimeout(()=>{
    console.log('b')
  },0)
})

setTimeout(()=>{
  console.log("c")
  Promise.resolve().then(()=>{
    console.log('d')
  })
},0)

```

1. then =>微任务 setTimeout(c)=>宏任务
2. log(setTimeout(c)) log(a) setTimout(b)=>宏任务
   > 输出的结果为 a c d b

## 总结下事件循环

- 所有同步任务在主线程上执行，形成一个执行栈
- 主线程之外，还有一个任务队列，只要异步任务有了结果，就会将在任务队列中放置一个事件
- 一旦执行栈中的同步任务执行完毕，系统就会读取任务队列，对应的异步任务，结束等待状态，进入执行栈执行
- 主线程不断执行第三步

## NodeJS 事件循环

> 当 nodejs 启动时候，会初始化一个事件循环，执行代码脚本，脚本会进行 API 的调用，process.nextTick 会开始事件循环，zhu yao 主要分为以下 6 个阶段，这 6 个阶段执行完之后才算一次事件循环

![image](https://user-images.githubusercontent.com/84896877/177361738-a5200425-85b7-4bf0-8423-9503ad772235.png)

- Timer:执行 setTimeout 一系列
- IO Callback:执行系统级别回调，比如 TCP 链接失败
- ID LE：空闲阶段
- poll：执行除过 setTimeout\setIntervel\setImmediate 以外的 IO 回调
- check 阶段：执行 setImmediate 的回调
- clsoe: 执行 close 的回调

## 浏览器的 APIrequestAnimationFrame、requestIdlecallback

> requestAnimationFrame ，高级版的 setInterval,(可以这样去理解)，主要目的下次渲染之前执行回调函数
> requestIdlecallback 浏览器空闲状态执行，为了防止一直繁忙，浏览器设置了一个 timeout 参数

就是在每一次 Eventloop 的末尾，判断当前页面是否处于渲染时机，就是重新渲染。而这个所谓的渲染时机是这样定义的：比如 60Hz,即每秒刷新 60 次

## Process.nextTick

独立于事件循环之外，他有自己的一个队列，当每个阶段完成后，如果存在该队列就会清空队列中的回调，并优先于微任务之前执行

## 总结

浏览器和 node 中的事件循环的区别是，浏览器每次执行的是宏任务队列中的一个任务，执行完了之后再执行微任务，而 node 中的微任务是各个阶段都执行的
