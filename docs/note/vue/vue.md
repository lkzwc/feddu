---
id: vue
title: V2和V3的区别
slug: /version
---

在Vue中，V2使用的defineProperty达到响应式，V3使用的是Proxy。
> V2中，我们一上来会遍历所有字段，将其改变为响应式，而V3中使用到哪部分数据的时候，再把数据变成响应式。一个是对属性劫持，一个是对对象代理


```

class Dep(){
    subscribers = new Set()

    depen(effect){
        if(notExist){
            this.subscribers.add(effect)
        }
    }

    notify(){
        this.subscribers.forEach(one=>one())
    }
}

function reactive(obj){

    Object.keys(obj).forEach(item=>{

        const dep = new Dep()

        let real_value = obj[item]

        Object.defineProperty(obj,key,{
            get(){
                dep.depend();
                return real_value
            },
            set(newValue){
                real_value=newValue
                dep.notify()
            }
        })
    })
    return obj
}
```

