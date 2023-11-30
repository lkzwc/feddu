---
slug: /datatype
title: 数据类型
---

## 数据类型分类

- 基本类型
  > string,number,boolean,null,undefine,symbol,BigInt（es10 新增）
  > 一般大小固定，存储在栈内存当中
- 引用类型
  > Array,Date,Math,Function
  > 一般大小不固定，存储在堆内存当中，多个引用指向同一个地址，直到没有任何引用的时候才会释放掉

## 数据类型检测

- typeof
  > 检测除了 null 之外的基本类型
- instanceof
  > 检测复杂类型即引用类型，根据判断改对象是否是原型链上的对象才确定是否是该类型，返回true false
- Object.prototype.toString
  > toString 是 Object 的方法，返回的结果是[object Object],第二个就是我们需要的类型，对于 Object 对象，可以直接通过调用 toString 返回，对于其他对象，需要用 call 调用，才能返回正确的结果

```
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
```

## 存储位置
​
* 原始数据类型
> 直接存储在**栈**（stack）中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。

​
* 引用数据类型
> 同时存储在**栈**（stack）和**堆**（heap）中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。