---
slug: /concurrency
title: 前端实现并发
---

> 首先我们来说一下什么叫做并发，并发是指在一定的时间范围内进行着多次执行请求，也就是类似我们的三行到，就可以简单的理解为三个并发，但是这只是从一定的参考上去衡量，单时间片很小很小的时候，也就是小刀只够执行一次任务的时候，实际上并发还是单次执行！他只是在很小的时间范围内去来回切换执行而已！
```
function request(par){
    return new Promise((resolve)=>setTimeout(resolve(`执行${par}`),1000))
}

async function concurrent(task, max = 3) {
    let pools = []
    for (let i = 0; i < task.length; i++) {
        console.log(task[i])
        pools.push(request(task[i]))

        if (pools.length === max) {
            console.log(pools,i)
            await Promise.race(pools).then(res => {
                console.log(res)
            }).finally(() => {
                pools.pop()
            })
        }
    }
}


concurrent(new Array(10).fill(1).map((item,index)=>index))()
```


整体代码比较简单，当pools中的数据也链接数一样的，开始执行并发任务，执行完一个之后剔除，再加入，再次执行，这样就可以简单的模拟一个并发，当然我们还有最后不满3个任务的时候，没有实现，但是一个简单的并发基本完成，如果感兴趣，自己也可以试试，加深印象！
