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
 return add();
}
```

## 作用域链

假如我们打印 c,当前环境中没有 c，我们会向上级作用域去查找，这种链式称之为作用域链

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
 return ad()
}
```

## 总结

当内部的函数没有执行完毕的时候，其外部函数变量不会被销毁

## 应用

代码模块化封装
