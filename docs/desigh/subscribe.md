---
id: subscribe
title: 发布订阅和观察者
slug: /subscribe
---

## 观察者
> 观察者、被观察者

被观察者每次在自身改变之后都绑定式的触发对观察者的通知，是松耦合的

## 发布订阅
> 发布者、订阅者、发布订阅中心
* 发布者只关心发布
* 订阅者只关心订阅
* 发布订阅负责维护关系
做到了完全解耦

### 订阅者
```
class Subscriber {
  constructor(name, context) {
    this.name = name;
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
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  publish(type, content) {
    this.context.publish(type, content);
  }
}

```

### 发布订阅中心
```
class PubSub {
  constructor() {
    this.messages = {};
    this.listeners = {};
  }
  publish(type, content) {
    const existContent = this.messages[type];
    if (!existContent) {
      this.messages[type] = [];
    }
    this.messages[type].push(content);
  }
  subscribe(type, cb) {
    const existListener = this.listeners[type];
    if (!existListener) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(cb);
  }
  // 调用notify进行监听
  notify(type) {
    const messages = this.messages[type];
    const subscribers = this.listeners[type] || [];
    subscribers.forEach((cb) => cb(messages));
  }
}

```
