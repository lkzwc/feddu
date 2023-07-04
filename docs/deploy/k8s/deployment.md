---
slug: /deployment
title: Deployment
---

> 最常用的控制器，用来管理部署无状态应用

1. 无状态应用

2. 升级，滚动，更新

3. 扩缩容

4. Pod 之上的抽象层
   定义一组 Pod 的副本
   通过 controller 维持 Pod 的数目
   通过控制器控制版本

5. **_具体负责管理的是 ReplicaSet,而 ReplicaSet 去管理具体的 Pod_**

核心【Replicas】期望的终态数量
