---
slug: /docker
title: Docker基础
tags:
 - label: docker基础
   permalink: docker
---

## 什么是容器
> 简单的来说就是包含一个完整的的运行时环境，除了应用程序本身之外，还包括这个应用所需的全部依赖、类库、二进制文件、配置文件等比如Linxu、JVM等

## Why Docker
![image](https://user-images.githubusercontent.com/84896877/230301210-cb48fa37-6c95-4ab3-980d-443d5fc46893.png)
![image](https://user-images.githubusercontent.com/84896877/230301426-207a237c-9481-4cef-9b10-28e709a6fb69.png)
![image](https://user-images.githubusercontent.com/84896877/230301632-4dc86882-d5f4-4d8b-bfd1-75c70c4e826c.png)


## 发展史
![image](https://user-images.githubusercontent.com/84896877/230301715-3a854fa8-a745-431e-98fd-991879720525.png)
![image](https://user-images.githubusercontent.com/84896877/230301797-96730635-cf44-4ced-afaf-7cb2b52425a0.png)

### 容器隔离思路
![image](https://user-images.githubusercontent.com/84896877/230301896-a195eb04-7604-4d15-8171-455bb9109010.png)
* 进程隔离：以进程为隔离单位，自有上下文，互不干涉
* OS虚拟化：操作系统层面虚拟化，对组和资源分配
* 硬件虚拟化：一个机器装两个linux，系统之间形成隔离
* 硬件分区：小型机->每个系统盘安装一个系统


### 容器规范
用于描述docker容器运行时环境和配置信息的标准格式和规范
以下是容器规范中的一些重要元素和属性：
1. 容器镜像：容器镜像是一个只读的文件系统，包含了容器运行所需的所有文件、库、配置等信息。Docker容器镜像遵循OCI（Open Container Initiative）标准规范，可以使用Docker CLI或其他OCI兼容工具来构建、管理和操作。
2. 容器元数据：容器元数据包括容器的名称、标签、版本、作者、描述等信息，用于标识和描述容器本身。这些信息可以在容器启动时传递给Docker守护进程，并在容器运行时用于识别和管理容器。
3. 容器配置：容器配置包括容器运行时环境、命令行参数、环境变量、端口映射、数据卷挂载等信息。这些信息可以通过Dockerfile或Docker CLI等工具来定义和配置，并在容器启动时传递给Docker守护进程，用于启动容器。
4. 容器状态：容器状态描述了容器当前的运行状态，包括容器是否正在运行、容器的PID、容器的CPU和内存使用情况等信息。可以使用Docker CLI或其他工具来查询容器状态，并对容器进行操作和管理。

|规范 |	说明 |	所属组织 |
|  ----  | ----  |----|
| OCI Runtime Spec  | 容器运行时规范，旨在指定容器配置、执行环境、生命周期及公共操作 |OCI  |
| OCI Image Spec  | 镜像格式规范，主要包括镜像元数据、镜像索引（URL）、配置、文件系统层 |OCI |
| 单OCI Distribution Spec元格  | 镜像分发策略 |OCI |
| RunC |基于OCI标准的实现，与底层系统进行交互，负责容器启动、管理、将空等功能，并提供一套标准化接口  | Docker |
| ContainerD  | 基于Runc实现使用 OCI规范定义的容器高级功能，比如镜像管理、容器执行等调用功能	｜Docker｜


Docker原理
Docker是一个基于Linux容器技术的开源容器平台，可以为应用程序提供一种轻量、便携和可移植的运行环境。
Docker通过将应用程序、其依赖项和运行时环境打包到一个可移植的容器中，将应用程序从底层基础设施分离出来。
Docker容器是轻量的、可移植的，可以在不同的操作系统、云平台和物理主机上运行。

## Docker容器的工作原理：
> Docker容器是基于Linux容器技术实现的，每个Docker容器都是独立的、轻量的应用运行环境。Docker容器使用了Linux内核的命名空间（namespace）和控制组（cgroup）功能，将每个容器的文件系统、网络、进程、用户和其他系统资源隔离开来，从而实现容器间的隔离。
具体来说，Docker容器的工作原理如下：
1. 创建镜像：Docker镜像是Docker容器的模板，包含了应用程序、其依赖项和运行时环境等。
2. 创建容器：使用Docker镜像创建一个新的容器，每个容器都有唯一的ID和名称，容器之间相互隔离，互不影响。
3. 启动容器：启动Docker容器时，Docker守护进程会创建一个新的命名空间和控制组，为容器分配一组独立的系统资源。
4. 应用程序运行：将应用程序和其依赖项复制到容器中，并在容器中启动
5. 容器隔离：每个Docker容器都有自己的文件系统、进程、用户和网络等隔离的命名空间和控制组，从而保证容器之间互相隔离，互不影响。
6. 容器管理：Docker守护进程负责管理和监控所有的容器，用户可以使用Docker客户端来管理和操作容器，包括启动、停止、暂停、删除和查询容器等操作。

总结：
Docker是一个基于Linux容器技术的开源容器平台，可以为应用程序提供一种轻量、便携和可移植的运行环境。Docker的架构由Docker客户端、Docker守护进程和Docker镜像库三个核心组件组成。Docker容器使用了Linux内核的命名空间和控制组功能，将每个容器的文件系统、网络、进程、用户和其他系统资源隔离开来，从而实现容器间的隔离和互相隔离。
### NameSpace
我们知道Linux中的PID、IPC、网络等资源是全局的，而NameSpace机制是一种资源隔离方案，在该机制下这些资源就不再是全局的了，而是属于某个特定的NameSpace，各个NameSpace下的资源互不干扰，这就使得每个NameSpace看上去就像一个独立的操作系统一样，但是只有NameSpace是不够
### Cgroup
虽然有了NameSpace技术可以实现资源隔离，但进程还是可以不受控的访问系统资源，比如CPU、内存、磁盘、网络等，为了控制容器中进程对资源的访问，Docker采用control groups技术(也就是cgroup)，有了cgroup就可以控制容器中进程对系统资源的消耗了，比如你可以限制某个容器使用内存的上限、可以在哪些CPU上运行等等。
## Docker  三板斧

![image](https://user-images.githubusercontent.com/84896877/230302038-09f8fb78-2a6e-41c9-a626-931c4ae5c5fb.png)

## Docker架构
![image](https://user-images.githubusercontent.com/84896877/230302093-c77709f8-2136-4d60-af4e-e12a733d7c96.png)


* Client: 提供用户交互的入口，可以使用client给docker发送各种操作API
* Docker Daemon: 用于监听Docker的API请求并管理docker镜像、容器、文件等结构，同时也是可以和其他的Docker Daemon交互的
* Registry:  仓库 ，docker hub是一个公共的仓库
* Images:  镜像，创建容器的制度模版说明，通常建立在一个镜像之上
* Container: 镜像的运行实例，你可以控制它的网络、存储

## Docker的使用方法
官方在线环境： https://labs.play-with-docker.com/
### 安装
安装Docker Destop会直接安装docker compose

### 常用命令
```
docker images
docker ps
docker rm 
docker rmi
docker logs id
docker exex id [cmd] //docker exec my-app ls
eg: docker exec -it 6527a5c8cfd4 /bin/bash
docker build -t name .   //.代表当前路径
docker run --rm -p 3000:3000 simple-app //左边是宿主机，容器右边
```


## DockerFile
```
FROM node:gallium-slim

WORKDIR /code-server #工作目录 后续所有的命令在该目录下执行
  
ADD . /code-server  #将代码拷贝到工作目录

RUN npm install 

EXPOSE 3000

CMD npm start
```

## docker compose
> Docker Compose是一种用于定义和运行多个容器应用程序的工具，可以使得启动多个容器变得更加容易
docker compose = docker build + docker run 
可以很方便的进行多个容器的配置启动
docker-compose up --build  //每次启动前构建

### docker-compose.yaml
```
version: "3"
services:
  nginx-app:
    # build: 从当前路径构建镜像
    build:  #从哪里开始构建
      context: .
      dockerfile: nginx.Dockerfile
    ports:
      - 3111:80
  node-app:
    # build: 从当前路径构建镜像
    build:  #从哪里开始构建
      context: .  #文件位置
      dockerfile: node.Dockerfile
    ports:
      - 3222:3000
# 替代了之前构建 运行的步骤
# 1.build image 2.docker run => docker-compose up --build

```

### nginx.Dockerfile
```
FROM nginx:stable-alpine3.17-slim

COPY ./src/index.html /usr/share/nginx/html

EXPOSE 80
```

### node.Dockerfile
```
FROM node:gallium-slim

WORKDIR /code-server

ADD . /code-server

RUN npm install 

EXPOSE 3000

CMD npm run start
```

## CMD 和RUN的区别
* RUN
每一次执行叠加一层镜像，用于安装软件包、运行脚本、配置环境
* CMD
用于容器启动时候要执行的默认命令，在DockerFile文件中，只能有一个CMD指令


## Docker 高级命令
```
docker run [option] images [command] [args]

docker run --name=demo -d nginx  // -d后台运行 --name 名称

docker ps //查看运行的 -a 查看所有的
docker stop id //
docker start id 
docker run --restart='always' nginx //开机自启

docker update id --restart='always' //更新容器重启功能


docker exec -it id /bin/bash  //进入容器  echo "dsda" > index.html



## Docker 提交改变 
docker commit [option] container [repository[:tag]]

docker commit  -m "tips" id  new:v1

## Docker Save
docker save -o yys.tar nginx


## Docker Load 加载镜像

docker load -i yys.tar


## Docker push
docker push liuketh/yys:v2  //注意：必需是 【用户名/仓库名：tag】


## Docker 挂载
docker run -d -v 主机PATH：容器PaTH -p 主机PORT：容器PORT

docker run --name=mynginx -d --restart=always -v /html:/usr/share/nginx/html:ro

// RO  只读 容器内部不能更改。RW 读写


## Docker CP

docker cp id:/etc/nginx/nginx.conf /data
docker cp /data/nginx.conf id:/etc/nginx/nginx.conf 


docker build -t yys:v1 .  //.当前目录

docker tag image_name YOUR_DOCKERHUB_NAME/image_name

```