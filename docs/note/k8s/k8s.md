# 云原生

## 云原生

软件系统生在云上，长在云上，利用云的资源敏捷，可扩展

- 不可变基础设施

  1. 自包含、可定制镜像

  2. 快速部署和隔离

  3. 自动化管理创建销毁

  4. 可复制的管控系统与支撑组件

- 云编排（Docker）

<!-- truncate -->
## 容器

视图隔离、资源可限制、独立文件系统的进程集合。是一个单进程模型。原子调度单位。

> 单进程模型

比如有一个进程组hello，在这个进程组里边还有4个进程,由于容器是单进程模型，所以k8s会启动4个容器，每个容器里 边运行一个进程，而整个进程组是有Pod由管理,启动hello,会启动4个容器，共享一定的资源，定义在一个Pod中

> 隔离 -提供独立的运行环境

- Linux提供chroot  使文件系统隔离

- 资源视图 namespace（网络资源...）

- 资源使用率 cgroup[systemd、cgroupfs两种驱动方式 ]

> 镜像 运行容器所需要的文件集合

- dockerFile

- 分层可复用 changeset

- build once run anywhere

> 生命周期

- init进程=容器生命周期

- 数据卷 docker volume

   `docker run -v demo to`

  `docker create volume demo`

> 容器 VM

- 是否具有单独的内核

- 是否进程级别的隔离

![image](https://user-images.githubusercontent.com/84896877/221467124-3259047b-c8ba-40f6-ac0a-3bc3af499383.png)

## kubernetes

支持自动化部署、大规模可伸缩、应用容器化管理。在k8s中，我们可以创建多个容器，每个容器运行一个实例，然后通过内置的负载均衡策略，实现对者一组应用实例的管理、发现、访问、扩展、自愈等等

- 服务发现负载均衡

- 存储编排

- 自动部署修复 迁移

- 水平伸缩 负载均衡

### 架构

![image](https://user-images.githubusercontent.com/84896877/221155119-33a24dbf-d00e-48db-8133-2a96d55da973.png)


- Master 负责管理整个容器，通过暴露出来的API Server和Node通信

- 每个业务负载以Pod形式运行，一个pod中运行一个或者多个容器，真正运行的是Node上的kubelet通过APIServer将状态提交到container runtime上，将容器运行

- Node上的组件（Container Runtime\Storage plugin\Network plugin\kube-proxy[跨集群访问]）



![image](https://user-images.githubusercontent.com/84896877/221154809-78671316-a63f-4f29-bd9a-8279f84c4bf9.png)

POD创建工作流

![image](https://user-images.githubusercontent.com/84896877/221155215-9f0150d9-4f05-46f2-b14f-8417759c3c25.png)

### Node

K8S通过将容器放入节点上运行POD来执行具体的工作负载，节点可以是一个虚拟或者物理机

向API服务器添加节点的方式：1.节点上的kublet向控制面自注册 2.手动添加Node对象

![image](https://user-images.githubusercontent.com/84896877/221155288-8cd1aca2-910d-4880-acfe-c670284131f2.png)

### Pod

最小的调度以及资源单元，包括一个或者多个容器。

由于不能将多个进程聚集在一个单独容器，需要另外一种高级结构将容器绑定在一起，作为一个单元管理，这就是Pod背后根本原理

一个pod的共享上下文包括一组linux名字空间、控制组和kennel一些其他的隔离的技术，共享相同ip和端口空间

![image](https://user-images.githubusercontent.com/84896877/221155339-f4adbac1-c128-4d31-b168-77db6bd5f0a0.png)

定义容器运行的方式
提供给容器共享的运行环境

1. 共享网络：Pod 中的容器会作为一个整体被 Master 调度到一个 Node 上运行,具有一个IP地址，通过Infra Container方式共享一个NetWork Namespace.

2. 共享存储：申明同一个volumes

3. InitContainer:容器启动之前启动 => sideCar 抽离出来一个单独的容器，执行业务的辅助工作（代理、Adapt）

### volume

申明pod可访问的文件目录
挂载在一个或者多个容器指定路径下
支持分布式远程云盘

### Service

提供访问一个或者多个Pod的访问地址

### Namespace

一个集群内部的逻辑隔离
同一个NameSpace资源命名唯一

### Headless Service 和普通Service

类似负载均衡的中间件，而headless是干掉中间转发件之后的，其Cluster IP为None

### 资源对象

> Spec期望的状态

Status观测到的状态

MetaData

> labels、

annotations、 扩展存储非标识性信息、OwnerReference、集合类资源

### 调度

- 如 果更具POD需求找到满足的Node,称之为可调度节点，如果没有找到，则状态一直停留为未调度状态

- 调度器负责寻找可调度节点，通过watch手段发现集群中存在且尚未调度的节点上的POD，更具一系列的函数规则打分，先择最高的，并将调度决定通知kube-apiserver

> NodeSelector

- 首先需要在nodes里边添加label

- 在Pod的中的Spec部分添加NodeSelector部分

> 亲和性和非亲和性(包括Node和Pod)

- 包括软硬需求，在Pod中通过PodSpec的affinity下的nodeAffinity指定【matchExpression】

> Taints污点-排斥某类型的POD

- 应用在Pod上允许单是并不要求(如果设置Effect为NoExecue）则不能容忍

> nodeName

- 应用在Pod上，需要在Pod的Spec下边配置nodeName

> Pod优先级-PriorityClass

- 如果没有找到满足pod指定的所有要求的的节点，则触发抢占

> 压力驱逐

- 达到消耗水平的临界值，kubelet使节点失效，包括软硬驱逐




### 弹性伸缩

k8s默认提供的弹性伸缩组件，主要VPA、HPA伸缩分类：

#### 服务伸缩

  （立即执行、定时伸缩、预测性伸缩(后两种暂无成熟方案)）

  - 垂直伸缩 (VPA)【根据容器资源使用率自动设置CPU以及内存】

    >AddonResizer
     
    ```Plain Text
    AddonResizer是一种VPA即垂直POD自动扩缩容,根据集群规格、画像策略自动设置CPU、内存的Request,从而允许在节点上进行适当的调度
    ```

    > VPA定期查看pod资源使用情况， 主要从metric server中采集数据，需要重启pod,如果计算超过node可用资源，将导致pod一直pedding


  - 水平伸缩（HPA）
    > Cron HPA、 MetricHPA

    > 根据cpu和memory的使用率自动缩放 replication 控制器，deployment，副本集或状态集中的 pod 数量

#### 节点伸缩

- 水平伸缩

  > CA节点水平伸缩能否成功实施，与调度策略密切相关。kubernetes 在为 pod 选择可分配节点时，
是采用 LeastRequestedPriority 策略，简单来说就是就是尽可能把资源打散，把 pod 分配到资源利用率低的节点。这样会倒是有一批利用率较低，但未到缩容阈值的节点，因此会导致无法成功缩容，资源利用率低

- 垂直伸缩

  > 具体有厂商提供，主机是否支持升降配，考虑过程中主机是否需要进行重启（节点驱逐）



### TIPS单位

cpu:“30”表示30个core，100m表示0.1个core云原生架构

![https://i.loli.net/2021/08/02/L54aswkJr7epBIy.png](https://i.loli.net/2021/08/02/L54aswkJr7epBIy.png)



