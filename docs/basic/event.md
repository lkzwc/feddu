---
title: 事件循环
slug: /event
---

没有废话，只有干货，看完绝对让你醍醐灌顶，简单的概念就不说了，如果要先说事件循环，那么必须插一嘴，同步任务和异步任务，要说同步任务和异步任务，那么还的先说下 JS 单线程。

## JS 单线程

大家肯定都知道，JS 是一个单线程，如果设计为多线程，考虑下各种 DOM 操作，无疑增加很大的复杂性，而且设计之初只是为了完成简单的任务，并没有考虑如此复杂！

## 同步任务 && 异步任务

说起同步任务和异步任务，首先我们说说它们为什么会出现，由于 JS 是单线程的，我们只能等一个任务结束之后再去执行另外一个任务，这样如果遇到数据请求、文件操作需要等待很长时间，为了提交效率，我们可以在等待的过程中去干其他的，这样异步任务就出现了，异步任务需要等待到结果之后才能接着去执行，而同步是立即执行的

## 执行栈和任务队列

执行栈放的都是同步任务
任务队列是异步任务，这里我们需要注意一点就是，是到时候之后才放入队列，不是到时间之后去执行。

## nextTick && setImmediate

netTick 同步任务执行之后，异步任务执行之前执行
setImmediate 每一轮的事件循环结束之后执行

## 宏任务和微任务

宏任务和微任务都是属于任务对列之中的

- 宏任务：setTimeout
- 微任务：Promise.then()

## 小练一下

```
console.log(1);
process.nextTick(() => {
  console.log(2);
});
setTimeout(() => {
  console.log(3);
}, 0);
setTimeout(() => {
  console.log(4);
}, 0);

setImmediate(() => {
  console.log(5);
});
console.log(6);
new Promise((resolve) => {
  console.log(7);
  resolve();
})
  .then(() => {
    console.log(8);
  })
  .then(() => {
    console.log(9);
  });
console.log(10);

```

![image](https://user-images.githubusercontent.com/84896877/169861589-50f01d23-3478-4a3c-b89f-51effcce82bc.png)

## 千言万语汇成一幅图

![image](https://user-images.githubusercontent.com/84896877/169862605-17c472c3-4fb9-47c1-bceb-053cca3cc672.png)

当然最后的顺序也很重要

1. 同步任务
2. nextTick
3. 微任务
4. 宏任务
5. setImmediate
