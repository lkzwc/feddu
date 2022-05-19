---
title: 执行上下文
slug: /runningcontent
---

# 今天我们的打卡的内容是执行上下文

JS 中的 this 指的就是一种执行上下文，是一种抽象的执行环境

## 所谓的 this 如何理解呢？

> this 指的当前执行的上下文环境，它 永远指向最后调用它的那个对象

当然这个只是简答的概念，那么如何去理解它呢，大家可以看一下下边的代码

```
function demo(){
    console.log(this.age)
}

let User={
    age=10
}

demo()
```

这段代码执行的输出结果是 undefine
那么如果我们再加入一行代码

```
demo.call(User)
demo()
```

这样打印的结果会是 10，第一次 this 指向调用的它的对象 window，所以打印出来是空，
第二次指向 User，所以打印出来 10

## 接下来讲讲修改 this 的方法

修改 this 的方式有是那种，apply\call\bind,这三种函数都是 js 定义在函数原型的方法，其中第一个参数指的是运行时候使用的 this 值

- call
  参数形式：（this,p1,p2,p2）
- apply
  参数形式：（this,[p1,p2]）
- bind
  bind 函数会创建一个新的绑定函数,第一个参数为 this,其余参数作为新函数的参数
  参数形式: (this,p1,p2)
