---
id: setState
slug: /setState
title: setState是同步异步
---
## 是同步还是异步
setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同：在 React 钩子函数及合成事件中，它表现为异步；而在 setTimeout、setInterval 等函数中，包括在 DOM 原生事件中，它都表现为同步。这种差异，本质上是由 React 事务机制和批量更新机制的工作方式来决定的。

## 为什么
在react的bacthUpdates逻辑中，当更新发生时候，首先会给你全局变量附加一个批处理的值，然后执行函数，执行完之后就会将批处理标记移除，如果此时异步调用，则标记被清楚，在执行sheduleUpdateFilber就会进入同步流程，否则异步流程

## react中的模式
legacy 异步  （ReactDom.render()创建的都是同步优先级）
createRoot之后 都是异步