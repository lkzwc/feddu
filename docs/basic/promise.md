---
slug: /promise
title: 异步回调
tags: ["promise", "async", "await"]
---

## 回调地狱？

首先我们说一下同步情况下，一切逻辑都是正常的，函数的输出都是预期的，可以根据执行的顺序进行输出，那么当出现异步的时候，还会依据执行顺序输出吗？看代码:rocket

#### 异步函数

```
function  demo2(params) {
    setTimeout(()=>{
         return "hello"
    },2000)
}
demo(2)
```

> 实际输出是 undefine

#### 异步函数中的回调

接上边，我们无法取到正确的值，原因就是我们在异步当中无法通过 return 获取到值，正确的方式是通过回调函数

```
function  demo(fun) {
    setTimeout(()=>{
          fun("hello")
    },1000)
}
demo((data)=>{
    console.log("---",data)
})

```

#### 异步函数中的顺序

如果我们有两个异步，而且我想让他按照顺序去执行怎么办？

```

function  demo1(fun) {
    setTimeout(()=>{
          fun("hello")
    },2000)
}


function  demo2(fun) {
    setTimeout(()=>{
          fun("hello")
    },1000)
}

demo1((data)=>{
    console.log("demo1",data)
})
demo2((data)=>{
    console.log("-demo1-",data)
})

```

> 预期结果不如意：demo2 先输出，那么如何让其保证顺序呢，我们接着改

#### 回调地狱

```
demo1((data)=>{
    console.log("demo1",data)
        demo2((data)=>{
        console.log("demo2",data)
    })
})
```

> 当 demo1 执行完了再去执行 demo2，这样就保证的顺序，如果嵌套多个呢，这就是回调地狱，说了半天，终于要进入正题了

## Pormise 大法来了

Promise 就是为了解决回调地狱而诞生，我们小试一刀

```

let demo1 = new Promise((resolve)=>{
     setTimeout(()=>{
          resolve("demo1")
    },2000)
})


let demo2 = new Promise((resolve)=>{
     setTimeout(()=>{
          resolve("demo2")
    },1000)
})

demo1.then(res=>{
    console.log(res)
    return demo2;
}).then(res=>{
    console.log("demo2",res)
})

```

## 终极大法 Async

```
async function demopp(){
    let a = await demo1
    let b = await demo2
    console.log(a,b)
}
demopp()

```

最后，我们总结几点重要的东西，暂时就想到一点哈哈：

- Promise 中的 then 的结果是由 reslove 函数返回的，我们平时使用的 fetch().then()同理
