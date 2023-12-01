---
id: react
slug: /reactdiff
title: react如何diff的
---

## 应该认识的
* current fiber 
> 当前已经展示出来的fiber
* workInProgress Fiber
> 内存中即将渲染出来的

## Diff
> diff 指的是对比出两棵虚拟 DOM 树之间差异的过程
正常情况下，按照最优秀的算法，前后两棵树完全比对的算法负责度为O（N3），React团队为了解决此问题，做了三个限制

* 同级元素比较
* 同类型比较，如果类型不同，会销毁该节点以及其子孙
* key

## 单节点
```
while(child!== null){
    if(child.key === key){
        switch(child.tag){
            .....
            default:
                if(child.elementType === element.type){
                    return existing
                }
        }
    }
}

```
从上述代码我们可以看出对于单节点比较的时候，首先是进行key的比较，然后在数type比较，如果都相同，则复用。

如果key相同，type不同则会删除child以及其兄弟fiber
如果key不同，则只是将child删除

[diff](https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1141)

## 多节点
* 处理更新的节点
* 处理剩下的节点
