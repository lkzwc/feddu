---
title: 手写call实现
description: 手写call实现
---

# 手写call

> 首先我们需要知道 call的调用方式 参数形式：(this,p1,p2,p2)

```
function method(a, b){
    console.log("res",this,a + b )
}
// 版本1
Function.prototype.mycall=(ctx,...args)=>{
     let tem = Symbol('tem')  //防止重复
     ctx[tem] = this;
     ctx[tem](...args)
     delete ctx.fun
}


//版本2
Function.prototype.mycall=(ctx,...args)=>{
  ctx = !ctx ? globalThis : Object(ctx) //null undefine
  let tem = Symbol('tem')  //防止重复
  Object.defineProperty(ctx,tem,{
     enumerable: false,
     writable: false,
     value:this
  })
  let res = ctx[tem](...args)
  delete ctx.tem
  return res
}


method.mycall({},1,2)
```