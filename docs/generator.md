# generator
> 他是一种异步编程的解决方案，其核心就是一个状态机

## 简单认识一下
* 和普通函数一样 只是多了一个星号function* foo(x, y) { ··· }
* yield 暂停执行 和 next 恢复执行
* 调用执行之后，函数并不执行，返回的是一个只想内部状态的指针

## yidld
* 遇到yield 就暂停执行，并将紧跟在yield后边的那个表达式的值返回作为对象value的属性值
* 下次调用：yield **后面的表达式**，只有当调用next方法紧接着往下执行一步
* generator内部循环调用

## next
* 通过 next的参数，向generator函数注入【next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值】

## 与Iterator的关系
任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数（即Generator函数），调用该函数会返回该对象的一个遍历器对象。

```
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] /
```
