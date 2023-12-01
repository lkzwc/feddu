---
slug: /inject
title: 依赖注入
---
```
class Log{
    print(xx) {
        console.log(xx)
    }
}

const deco = x=>(target,property)=>{
    const old = target[property]
    //保存原来的print
    target[property] = (mes)=>{
        mes = `${x}--${mes}`
        //注入
        old(mes)
        //调用之前的逻辑
    }
}

const log = new Log()
log.print("mess")

deco("aaa")(log, 'print')
log.print("mess")

```