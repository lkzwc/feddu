# fiber

## 为什么需要Fiber
Fiber是一种React 新的协调机制，主要是为了改进React的更新渲染机制
传统过程中，react的Stack reconciler是一种递归执行的过程，diff算法采用深度遍历，使用Fiber把更新过程碎片化，变成异步可中断的操作

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

## Lane模型
> 目的就是计算更新的优先级 其中有两种方式 Lane模型和Expiration Time两种

Lane 是一个32位的二进制，可以指定不同的更新
react中的饥饿问题，低优先级的任务如果被高优先级的任务一直打断，到了它的过期时间，它也会变成高优先级


## 调和核心
### Schedule优先级
如果一个任务的过期时间很短，那么其优先级会很高，如果过期时间很长，则优先级很低。在timerQueue中，以小顶锥排放



### Reconciler
> 通过如 ReactDOM 等类库使虚拟 DOM 与“真实的” DOM 同步，这一过程叫作协调（调和）
创建或者更新Fiber节点。在mount的时候会根据jsx生成Fiber对象，在update的时候会根据最新的state形成的jsx对象和current Fiber树对比构建workInProgress Fiber树，这个对比的过程就是diff算法,然后打上标签
```
//ReactFiberFlags.js
export const Placement = /*             */ 0b0000000000010;
export const Update = /*                */ 0b0000000000100;
export const PlacementAndUpdate = /*    */ 0b0000000000110;
export const Deletion = /*              */ 0b0000000001000;

```
### Rerender
Renderer 发生在commit阶段，主要是遍历effectList执行对应的dom操作或部分生命周期