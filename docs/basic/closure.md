---
slug: /closure
title: 闭包
---

## 闭包？ 什么玩意呢？

> 从概念上来讲，一句话总结，函数里边的函数，里边的函数就称之为闭包

## 举列说明一下

```
function demo(){
  let a = 10;
  let b =10;
  function add(){
    return a +b
  }
 return add;
}

let app = demo()
app()
```

## 作用域链

假如我们打印 c,当前环境中没有 c，我们会向上级作用域去查找，这种链式称之为作用域链，
其实在闭包当中很明显应用的作用域链的概念，即当前环境的中存在指向父级作用域的引用

```
function demo(){
  let a = 10;
  let b =10;
  function add(){
    let aa = 1;
    let bb =2
    function add1(){
      console.log(c)
    }
  }
 return add()
}
```

## 形式

1. 函数中返回函数

2. 在定时器、事件监听、Ajax 请求、Web Workers 或者任何异步中，只要使用了回调函数，实际上就是在使用闭包。请看下面这段代码，这些都是平常开发中用到的形式。

## 关于循环输出的解释

```
for(var i = 1; i <= 5; i ++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}
```

- setTimeout 为宏任务，由于 JS 中单线程 eventLoop 机制，在主线程同步任务执行完后才去执行宏任务，因此循环结束后 setTimeout 中的回调才依次执行。

- 因为 setTimeout 函数也是一种闭包，往上找它的父级作用域链就是 window，变量 i 为 window 上的全局变量，开始执行 setTimeout 之前变量 i 已经就是 6 了，因此最后输出的连续就都是 6

## 总结

当内部的函数没有执行完毕的时候，其外部函数变量不会被销毁

## 应用

代码模块化封装

```
let test =(function(){
  let a = 10;
  let b =10;
  function add(){
    let aa = 1;
    let bb =2
  }
  return {add}
})()

let a =test.add()
```
