---
id: concept
title: 你不知道的JS单例、工厂、重载
slug: /concept
---

## 单例模式

在 JS 当中，所谓的单例模式并不是我们理解的类似 java、c++这种单例模式，而是一种简单的分组模式，比如以下的例子，我们需要描述两个人

```
let name1="name",
let age1 = 10

let name2="name2"
let age2=12

```

这种是一种简单的描述，但是每个人的属性并没有对应起来，因此，诞生了对象的概念，描述同一个事物的属性放到同一个内存中，起到分组的作用，这便是对象！也称之为单例模式

```
let p1 ={
 name:"name1",
age:10
}

let p2 ={
 name:"name2",
age:10
}
```

## 工厂模式

> 目的是为了批量生产，将相同的代码放到同一个函数里边，这便是工厂

```
function createPerson(namep,agep){
  var obj = {};
  obj .name=namep,
  obj .age=agep
  return obj
}
```

## 重载

> 在 JS 中并没有明确的重载，函数名称相同，会被覆盖掉
> let a = createPerson("name",10)

```

```
