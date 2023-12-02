#  发布订阅和观察者

## 观察者
> 观察者、被观察者

一个对象维持和他相关的对象，当其发生改变的时候，通知被观察者，每次在自身改变之后都绑定式的触发对观察者的通知，是松耦合的
```
class ObserverMain{
  construct(){
    this.list =[]
  }

  add(oneObe){
    this.list.push(oneObe)
  }

  notify(){
    this.list.map(item=> item.update())
  }
}

class Subscribe{
  constructor(){

  }

  update(){}
}


ObserverMain main = new ObserverMain();

Subscribe s1 = new Subscribe()
Subscribe s2 = new Subscribe()

main.add(s1)
main.add(s2)


main.notify()

```

## 发布订阅
> 发布者、订阅者、发布订阅中心
* 发布者只关心发布
* 订阅者只关心订阅
* 发布订阅负责维护关系，状态改变通知订阅者处理
做到了完全解耦

### 订阅者
```

class Subscriber {
  constructor(context) {
    this.context = context;
  }
  subscribe(type, cb) {
    this.context.subscribe(type, cb);
  }
}


```

### 发布者
```
class Publisher {
  constructor(context) {
    this.context = context;
  }
  publish(type,tips) {
    this.context.publish(type,tips);
  }
}

```

### 发布订阅中心
```
class PubSub {
  constructor() {
    this.publishs = {};
    this.subscribes = {};
  }
  publish(type,tips) {
    const existContent = this.publishs[type];
    if (!existContent) {
      this.publishs[type] = [];
    }
    this.publishs[type].push(tips);
  }
  subscribe(type, cb) {
    const existListener = this.subscribes[type];
    if (!existListener) {
      this.subscribes[type] = [];
    }
    this.subscribes[type].push(cb);
  }
  // 调用notify进行监听
  notify(type) {
    this.subscribes[type].forEach((cb) => cb(this.publishs[type]));
  }
}
//定义三种消息类型
//定义三种消息类型
const A ='A'
const B ='B'
const C = 'C'

const main = new PubSub();
//创建多个发布者
const p1 = new Publisher(main)
const p2 = new Publisher(main)
const p3 = new Publisher(main)

//创建多个订阅者
const s1 = new Subscriber(main)
const s2 = new Subscriber(main)

p1.publish(A,"p1发布A")
p1.publish(B,"p1发布B")
p2.publish(B,"p2发布B")
p3.publish(B,"p3发布B")
p3.publish(C,"p3发布C")

s1.subscribe(A,(p)=>{console.log("S1 处理 A ",p)})
s1.subscribe(B,(p)=>{console.log("S1 处理 B ",p)})
s1.subscribe(C,(p)=>{console.log("S1 处理 C ",p)})
s2.subscribe(A,(p)=>{console.log("S2 处理 A ",p)})

console.log("A事件变更了")
main.notify(A) 
console.log("B事件变更了")
main.notify(B)
console.log("C事件变更了")
main.notify(C)

```

```
A事件变更了
VM137 脚本代码段 #7:71 S1 处理 A  ['p1发布A']
VM137 脚本代码段 #7:75 S2 处理 A  ['p1发布A']
VM137 脚本代码段 #7:81 B事件变更了
VM137 脚本代码段 #7:72 S1 处理 B  (3) ['p1发布B', 'p2发布B', 'p3发布B']
VM137 脚本代码段 #7:83 C事件变更了
VM137 脚本代码段 #7:73 S1 处理 C  ['p3发布C']
```
