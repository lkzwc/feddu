---
title: 原型实例 new
slug: /new
---

js中提供了构造函数创建对象，其实构造函数只是一个简单的函数，它唯一的标志就是使用了new关键词

使用new关键字调用的就是构造函数。通过构造函数我们可以创建一个对象，其依赖的底层还是通过原型链进行实现

## new做了什么事情
* 首先创建一个空的对象
* 将原型对象指向构造函数的原型
* 指向构造函数代码
* 返回新对象


## 接下来我们说说特别的
![image](https://user-images.githubusercontent.com/84896877/171343623-41693045-464e-4919-a07d-fbb9835d5172.png)
我们可以简单分析一下查看一下new出来的最终结果
> __proto__ 指向构造函数的原型
```
const demo = new Demo()
demo.__proto__ === Demo.Property
```

> property 原型对象

## new实现
```
const mynew =(Obj,....args)=>{
   let tem={}
   tem.__proto__ = Obj.Property;  //连接原型
   Obj.call(tem,...args);  //绑定this指向构造
   return tem;
}