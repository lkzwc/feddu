---
slug: /extends
title: JS继承
---

首先继承的概念就不讲了，目的使用最少的语言描述最全的知识

## 原型链继承

```
function Parent(){}

function Son(){}

Son.prototype=new Parent()
```

> 存在的问题，new 多个对象的时候，其指向的是一个地址，内存是共享的

## 构造函数继承

```
function Parent(){}

Parent.prototype.func=function(){

}

function Son(){
    Parent.call(this)
}

```

> 存在的问题 原型上的方法无法继承

## 组合继承 （前两种组合）

```
function Parent(){
  this,name="lkzwc"
}

function Son(){
    Parent.call(this)
}

Parent.prototype.run=function(){
   console.log("runing" + this.name)
}

Son.prototype=new Parent()

let son = new Son()
son.run()
```

> 存在的问题 构造多次执行，开销更大了

## 原型式继承

```
function Parent(){}

function Son(){}

let son = Object.create(new Parent())
```

## 寄生式继承

虽然本质上和原型继承没有区别，只是再其浅拷贝的基础之上，增加了一些方法

```
function Parent(){}

function Son(){}

function clone(source){
   let new = Object.create(source)
   new.run=function(){
    return this.name
  }
  return new
}
```

## 寄生组合式继承

```
function Parent(){
  this,name="lkzwc"
}

function Son(){
    Parent.call(this)
}

Parent.prototype.run=function(){
   console.log("runing" + this.name)
}

function clone(par,son){
   son.prototype = Object.create(par.prototype)
   son.prototype.constructor =son
}


clone(Parent,Son)
let son = new Son()
```

## Extends

其底层实现依旧是寄生组合 使用 bable 处理后的代码

```
function _possibleConstructorReturn (self, call) {
		return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits (subClass, superClass) {
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});

	if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



var Parent = function Parent () {
	// 验证是否是 Parent 构造出来的 this
	_classCallCheck(this, Parent);
};

var Child = (function (_Parent) {
	_inherits(Child, _Parent);
	function Child () {
		_classCallCheck(this, Child);
		return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
}
	return Child;
}(Parent));

```
