---
slug: /dockerup
title: Docker高级
tags:
  - label: docker高级
    permalink: docker
---

## 高级指令

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

docker-compse up //编译启动容器组
docker system prune //删除缓存
```
