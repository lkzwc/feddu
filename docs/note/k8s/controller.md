# Controller of k8s

## 概述

声明式处理，不断使系统的Status无限趋近Spec

![image](https://user-images.githubusercontent.com/84896877/221155504-3118e0b6-8d01-45b8-9f26-16519ac7cc65.png)

- ReplicaSet: 代用户创建指定数量的pod副本，确保pod副本数量符合预期状态，并且支持滚动式自动扩容和缩容功能

- Deployment：工作在ReplicaSet之上，用于管理无状态应用，目前来说最好的控制器。支持滚动更新和回滚功能，还提供声明式配置。ReplicaSet 与Deployment 这两个资源对象逐步替换之前RC(ReplicationController)的作用。

- DaemonSet：用于确保集群中的每一个节点只运行特定的pod副本，通常用于实现统级后台任务。比如日志采集（loki）服务、监控服务（promethues）特性：服务是无状态的，服务必须是守护进程

- StatefulSet：管理有状态应用

- Job：只要完成就立即退出，不需要重启或重建

- Cronjob：周期性任务控制，不需要持续后台运行



## 有状态无状态

> 具有先后关系顺序或者主从关系

## 负载资源（Workload）

- 何为工作负载 ？k8s上运行的应用程序

- 负载资源？管理PODS资源确保处于运行的Pod正确

### Deployment 

> 最常用的控制器，用来管理部署无状态应用

* 无状态应用

*  升级，滚动，更新

*  扩缩容


* **_具体负责管理的是 ReplicaSet,核心【Replicas】期望的终态数量来管理具体的 Pod_**

* 更新策略：
  rollingupdate：滚动更新
  recreate: 开始更新时，先进行删除再创建

### ReplicaSet

* 确保pod数量
* 确保pod健康
* 弹性伸缩，滚动升级 

### StateFulSets


* 管理有状态应用的部署和扩缩，有***顺序启停***

* 并提供***持久存储***，删除POD不会删除数据

*  与Deployment区别之处是提供了一个***固定的ID***(挂掉后拉起ID不变)

特性：

- POD启动带顺序，第一个无法启动后续也无法启动

- 数据安全，删除POD不会删库

- 使用headless services



### DaemonSet

> 确保节点上运行一个POD

* 保证集群每个节点已运行一组相同的Pod

* 跟踪集群节点状态，保证移除节点删除对应的POD、保证Pod处于运行状态

* 不同之处主要在于对节点信息也进行监控

### Jobs

* 创建一个或者多个pods

* 跟踪Pod状态，重试失败Pod

* 依赖关系

* 运行成功之后就退出，非持续性服务


### CornJob

*  创建可重复调度的Jobs（schedule\startinDeadingSeconds\concurrencyPolicy是否并行successFulJobsHistoryListmit留存历史格式）

### ReplicationController

* 确保一个Pod或者一组同类的Pod是可用的




