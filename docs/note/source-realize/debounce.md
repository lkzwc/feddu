# 防抖节流实现

## 防抖和节流

首先说下防抖和节流都是为了稀释函数的执行频率，其核心的区别为：

- 防抖： 多次触发，只执行最后一个，比如保存、搜索等
- 节流： 执行一次之后，只有在大于设置的执行周期后会执行，持续触发，保证同一个时间段只会执行一次，总结就是周期内执行一次，比如计算进度等等

## 代码实现

- 防抖实现

```
function debounce(callback,time){
  let timer= null
  return (...args)=>{
       if(timer){
            clearTimer(timer)
        }
     setTimeout(()=>callback(...args),time)
    }
}

```

- 节流实现

```
function throttle(callback,time){
   let timer = null
    return (...args)=>{
       if(timer) return ;
       setTimeout(()=>{
            callback(...args);
            timer= null
        },time)
     }
}
```
