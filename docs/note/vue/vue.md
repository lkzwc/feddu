# V2和V3的区别

## 核心方案
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

## 性能优化
* 静态标记

使用静态标记是指，对后期可能会修改的节点进行标记，在生成虚拟节点的阶段，可以将动态子节点提取出来保存到dynamicChildren数组中，这样渲染器在更新节点的时候回直接查找dynamicChildren更新
```
<div>
<div>foo</div>
<p>{{bar}}</p>
</div>


const vnode={
    tag:"div",
    children:[
        {
            tag:'div',child:'foo'
        },
        {
            tag:'p',children:ctx.bar
        }
    ]
}

// 静态标记之后

const vnode={
    tag:"div",
    children:[
        {
            tag:'div',child:'foo'
        },
        {
            tag:'p',children:ctx.bar，patchflag:1
        }
    ]
}

```
* 静态提升，只会被创建一次
> 对共有的节点在一个提升
```

function render(){
    return (openBlock(),createBlock('div',null,[
        createVNode('p',null,'static'),
        createVNode('p',null,ctx.title)
    ]))
}

// 提升之后
const host=createVNode('p',null,'text')

function render(){
    return (openBlock(),createBlock('div',null,[
        host,
        createVNode('p',null,ctx.title,)
    ]))
}
```
* 预字符串
> 比如我们在渲染20个p元素的时候，会直接使用字符串生成一个静态的VNode

createStaticVNode('<p></p><p></p><p></p><p></p>.....<p></p><p></p>')

* SSR优化
> 当静态内容大到一定量级时候，会用createStaticVNode方法在客户端去生成一个static node，这些静态node，会被直接innerHtml，就不需要创建对象，然后根据对象渲染


## V-once
v-once包裹的节点不会被父级的Block手机，因此在组件更新的时候，自然不会参与diff

## Ref 和 Reactive
* ref底层也是依赖于reactive的 ,[参见源码](https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts#L148)
* reactive 只能使对象或数组变成响应式 [参见源码](https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts)
* 响应式的需要
⚠️ reactive 可以跟踪对象内部属性的变化，但在替换整个对象时，你需要使用 ref 来保持响应性
```
const user = reactive({ name: 'Alice', age: 25 });

// 错误：这不会工作，因为 user 是一个常量不能被重新赋值 即使你使用 let 来声明 user，替换 user 变量的值也不会触发视图更新，因为 user 之前的 reactive 代理被丢弃了，新对象没有被转换成响应式。

user = { name: 'Bob', age: 30 }; 

```

