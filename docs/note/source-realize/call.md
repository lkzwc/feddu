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
Function.prototype.myCall =function(context,...args){
    const ctxMain = !context ? globalThis : Object(context); //null undefine
    const key = Symbol();  //防止重复

    //ctxMain.key = this
    Object.defineProperty(ctxMain, key, {
        enumerable: false,
        writable: false,
        value: this
    })
    const result = ctxMain[key](...args);
    delete ctxMain[key];
    return result;
}

function fn(a, b, c) {
    console.log(this, a, b, c);
}

fn.myCall({}, 1, 2, 3);
```