---
id: virtualdom
slug: /virtualdom
title: 虚拟DOM
---

### 命令式
> 更加关注过程

### 声明式
> 关注结果

对于框架而言，声明式的性能 = 命令式的性能 + 找出差异的损耗


## 解决了什么问题
挂载阶段，React 将结合 JSX 的描述，构建出虚拟 DOM 树，然后通过 ReactDOM.render 实现虚拟 DOM 到真实 DOM 的映射（触发渲染流水线）；

更新阶段，页面的变化在作用于真实 DOM 之前，会先作用于虚拟 DOM，虚拟 DOM 将在 JS 层借助算法先对比出具体有哪些真实 DOM 需要被改变，然后再将这些改变作用于真实 DOM。

## 虚拟dom
> 虚拟dom是一个用来描述真实dom的JS对象,  虚拟DOM是整个DOM操作发展历史长河中的产物，这种概念其实和具体的框架是没有关系的。

虚拟dom并不一定能带来更好的性能，他的优势自安于提供更高效的UI编程模式的同时，保持一个还不错的性能。


```
const staff = [
  {
    name: '修言',
    career: '前端'
  },
  {
    name: '翠翠',
    career: '编辑'
  },
  {
    name: '花花',

    career: '运营' 
  }
]

<table>
  {% staff.forEach(function(person){ %}
  <tr>
    <td>{% student.name %}</td>
    <td>{% student.age %}</td>
  </tr>
  {% }); %}
</table>

```
数据+模版=>真实DOM=>挂载
数据+模版=>虚拟DOM=>真实DOM=>挂载

新旧DOM->Diff->补丁集->patch->真实DOM

## 虚拟dom解决的问题
* 数据驱动视图，使前端能够基于函数式UI编程方式实现更加高效的声明式编程
* 跨平台的实现
