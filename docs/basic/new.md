---
title: 原型实例 new
slug: /new
---

## 什么是原型，什么是实例

通俗的来讲被 new 出来的就是对象的实例，而原型指是原型对象，即对象的 Property 属性

## 什么是原型链接

我们都知道 js 对象有一个*prop*属性，该属性指向自身的 Property,而每一个对象都有原型对象，
原型对象本身又是一个对象，这样就形成了一种链式结构，称之为原型链

js 中提供了构造函数创建对象，其实构造函数只是一个简单的函数，它唯一的标志就是使用了 new 关键词

使用 new 关键字调用的就是构造函数。通过构造函数我们可以创建一个对象，其依赖的底层还是通过原型链进行实现

## new 做了什么事情

- 首先创建一个空的对象
- 将原型对象指向构造函数的原型
- 指向构造函数代码
- 返回新对象

## 接下来我们说说特别的

> **proto** 指向构造函数的原型

```
const demo = new Demo()
demo.__prop__ === Demo.Property
```

> property 原型对象

## new 实现

```
const mynew =(obj,....args)=>{
   let tem={}
   tem.__prop__ = Obj.Property;  //连接原型
   obj.call(tem,...args);  //绑定this指向构造
   return tem;
}
```
