# 迭代器

## 迭代器

> 是一个对象序列，也是一种接口，Iterator 接口主要供 for...of 消费，当使用 for---of 的时候，它会去寻找 Iterator 接口

默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性,Symbol.iterator 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名 Symbol.iterator，它是一个表达式，返回 Symbol 对象的 iterator 属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内

## 代码实现

```
const aa = {
  a: '10',
  b: 20
}
const myiterator = (target) = > {
  target[Symbol.iterator] = () = > {
    const temKeys = Object.keys(target)    let index = 0
      return {
      next: function () {
        if (index < temKeys.length) {
          return {
            done: false,
            value: temKeys[index++]
          }
        } else {
          return {
            done: true,
            value: undefined
          }
        }
      }
    }
  }
}
myiterator(aa) for (let tem of aa) {
  console.log(tem)
}
```
