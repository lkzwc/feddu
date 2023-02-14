---
slug: /closure
title: 闭包
---

## 闭包？ 什么玩意呢？
函数里边的函数，里边的函数就称之为闭包。它存储了一个函数和一个关联的环境。严格意义上来讲，一个javascrip函数，如果访问了外层作用域的变量，那它就是一个闭包。

> 函数创建的时候，函数的隐藏属性[environment]会记住函数创建的位置，即当时的词法环境，这样无论函数在哪里调用，都会去[environment]引用的词法环境中查找变量，先去词法环境内部查询，没有的话再去当前词法环境记录的外部词法环境寻找

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
> ab和add就组成了严格意义的闭包，但同时也存在着内存泄漏问题，app函数调用完毕之后，demo函数会销毁，但是其中的变量a b不会被销毁，因为add函数对其有引用，那么如何解决呢？ app = null

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

2. 在定时器、冒泡、事件监听、Ajax 请求、Web Workers 或者任何异步中，只要使用了回调函数，实际上就是在使用闭包。请看下面这段代码，这些都是平常开发中用到的形式。

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



