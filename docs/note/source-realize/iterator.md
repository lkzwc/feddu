# 迭代器源码实现

首先我们来说说什么是迭代器？
什么是迭代器呢？迭代器就是遍历对象的，关于迭代器，我们必须要知道的是，只要是实现迭代器对象的，都是可以进行遍历操作，而默认的迭代器接口部署在Symbol.iterator上
迭代器的作用大致有是三个
* 为数据访问提供统一的接口
* 是数据结构的成员能够按照某种次序排列
* es6创造了新的遍历方法for of
```
const aa ={a:'10',b:20}

const myiterator=(target)=>{
    target[Symbol.iterator] =()=>{
        const temKeys = Object.keys(target)
        let index = 0
        return {
            next: function () {
                if(index < temKeys.length){
                    return {done :false,value:temKeys[index++]}
                }else{
                    return {done: true,value:undefined}
                }
            }
        }
    }
}

myiterator(aa)

for (let tem of aa) {
    console.log(tem)
}

```