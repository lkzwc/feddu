---
slug: /copy
title: 深拷贝和浅拷贝
---

## 浅拷贝

### 概念

创建一个对象，接受重新赋值的对象，如果该值是基本类型，则复制其值，如果是引用类型，则复制其地址

### 方式

1. Object.assign(tar,src)
2. ...扩展运算符

## 深拷贝

### 概念

创建一个新的对象，将原对象从内存中拷贝出来一份给目标对象，并在堆内存中开辟一个新的地址保存器引用，原对象和新的对象互不影响

### 方式

1. JSON.stringify()，不完备方案,有以下问题
   拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
   拷贝 Date 引用类型会变成字符串；
   无法拷贝不可枚举的属性；
   无法拷贝对象的原型链；
   拷贝 RegExp 引用类型会变成空对象；
   对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；
   无法拷贝对象的循环应用，即对象成环 (obj[key] = obj)。
2. 手写递归实现

```
function deepClone(obj){
 let newObj={}

 for(let key in obj){
        if(typeof obj[key] ==='object'){
           newObj[key]=deepClone(obj[key] )
       }else{
           newObj[key]=obj[key]
      }
 }
return newObj
}
```
