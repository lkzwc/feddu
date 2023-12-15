# fiber

## 为什么需要Fiber
Fiber是一种React 新的协调机制，主要是为了改进React的更新渲染机制
传统过程中，react的Stack reconciler是一种递归执行的过程，diff算法采用深度遍历，使用Fiber把更新过程碎片化，变成异步可中断的操作

## 架构（16之后）
* Schedule(调度)
* Reconciler(找不同异步可中断)
* Rerender(渲染)


## ShowTime
以下是模拟实现
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

## fiber节点

[节点定义](https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiber.new.js#L117)


## 调和核心
[调和核心](https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1599)
performUnitOfWork->beginWork->completeUnitOfWork

## Schedule
> Schedule中，每个任务分配的时间为5ms。(shouldYield判断)
### 调度流程
一个task(宏任务) -- 队列中全部job(微任务) -- requestAnimationFrame -- 浏览器重排/重绘 -- requestIdleCallback

### 时间切片
> 判断当前系统是否有剩余时间，现成的API有requestIdleCallback，但是由于兼容性以及触发的不稳定性，放弃该方案，唯一可以精准控制调用时间的API是requestAnimationFrame，他能在重绘重排之前执行，最终退而求其次，使用宏任务实现MessageChanner(执行时间更加靠前)来调度Scheduler

[实现](https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/src/forks/SchedulerHostConfig.default.js#L228-L234)

### 优先级调度
> 目的就是计算更新的优先级 其中有两种方式 Lane模型和Expiration Time两种，如果一个任务的过期时间很短，那么其优先级会很高，如果过期时间很长，则优先级很低。在timerQueue中，以小顶锥

Lane 是一个32位的二进制，可以指定不同的更新
react中的饥饿问题，低优先级的任务如果被高优先级的任务一直打断，到了它的过期时间，它也会变成高优先级



## Reconciler
> 找出DOM的不同，并打上标记,完成所有的DOM之后交给Rerender,此过程由之前的递归过程变成可中断的过程，通过shouldYield判断当前是否有剩余时间
创建或者更新Fiber节点。在mount的时候会根据jsx生成Fiber对象，在update的时候会根据最新的state形成的jsx对象和current Fiber树对比构建workInProgress Fiber树，这个对比的过程就是diff算法,然后打上标签
```
//ReactFiberFlags.js
export const Placement = /*             */ 0b0000000000010;
export const Update = /*                */ 0b0000000000100;
export const PlacementAndUpdate = /*    */ 0b0000000000110;
export const Deletion = /*              */ 0b0000000001000;

```

### Fiber Reconciler和 Stack Reconciler
16之前整个Reconciler采用递归的方式执行，数据保存到栈中，所以称为栈调和，而16版本之后，Reconfiler基于fiber实现，称之为fiber Reconfiler

### 为什么没有使用generate方案
异步可中断更新可以理解为在更新的执行过程中可能会被打断（浏览器时间分片完了或者更加高优先级插队），可以继续执行时可以恢复之前的状态。但是generator有一些缺陷：
* 传染性 
* 中间状态时上下文关联的，中断后状态需要重新计算


## Rerender
> 负责将DOM渲染到不同的平台，比如ReactDom、ReactNative
Renderer 发生在commit阶段，主要是遍历effectList执行对应的dom操作或部分生命周期