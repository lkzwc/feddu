---
slug: /datatype
title: JS数据类型
---

## 数据类型分类

- 基本类型
  > string,number,boolean,null,undefine,symbol
  > 一般大小固定，存储在栈内存当中
- 引用类型
  > Array,Date,Math,Function
  > 一般大小不固定，存储在堆内存当中，多个引用指向同一个地址，直到没有任何引用的时候才会释放掉

## 数据类型检测

- typeof
  > 检测除了 null 之外的基本类型
- instanceof
  > 检测复杂类型即引用类型，根据判断改对象是否是原型链上的对象才确定是否是该类型
- Object.prototype.toString
  > toString 是 Object 的方法，返回的结果是[object Object],第二个就是我们需要的类型，对于 Object 对象，可以直接通过调用 toString 返回，对于其他对象，需要用 call 调用，才能返回正确的结果

```
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
```
