---
id: fiber
slug: /fiber
title: fiber
---

## 为什么需要Fiber
diff算法采用深度遍历，react的Stack reconciler是一种递归执行的过程，

## 架构
Schedule(调度)->reconciler(找不同TAG)->rerender(渲染)

## ShowTime
```
let fistFiber;
let nextFiber = firstFiber
let shouldYield = false

// 处理单个fiber
function  performUnitofWork(fiber){
   // ...fiber处理
  return fiber.next
}

//整个链表工作
function workloop(deadline){
    while(nextFiber && !shouldYield){
       nextFiber = performUnitofWork(nextFiber)
       shouldYield = deadline < 1
   }
  requestIdleCallback(workloop)
}

 requestIdleCallback(workloop)

```

## Schedule优先级
如果一个任务的过期时间很短，那么其优先级会很高，如果过期时间很长，则优先级很低。在timerQueue中，以小顶锥排放

## Lane模型
react中的饥饿问题，低优先级的任务如果被高优先级的任务一直打断，到了它的过期时间，它也会变成高优先级

## Reconciler
创建或者更新Fiber节点。在mount的时候会根据jsx生成Fiber对象，在update的时候会根据最新的state形成的jsx对象和current Fiber树对比构建workInProgress Fiber树，这个对比的过程就是diff算法,然后打上标签
```
//ReactFiberFlags.js
export const Placement = /*             */ 0b0000000000010;
export const Update = /*                */ 0b0000000000100;
export const PlacementAndUpdate = /*    */ 0b0000000000110;
export const Deletion = /*              */ 0b0000000001000;

```
## rerender
Renderer 发生在commit阶段，主要是遍历effectList执行对应的dom操作或部分生命周期