# docker学习
容器化部署技术

## dockerFile

Dockerfile 最基本的docker配置文件
```
FROM node:gallium-slim

WORKDIR /code-server #工作目录

ADD . /code-server  #将代码拷贝到工作目录

RUN npm install 

EXPOSE 3000

CMD npm start
```

> 执行docker build -t demo . 即可打包出iamge -t 名称 打包路径

```
docker pa -a #查看所有的容器
docker rm $(docker ps -a) #删除容器
docker stop id #停止容器
```

根据该镜像运行容器
```
# 如果需要在后台运行则添加 -d 选项
# --rm: 当容器停止运行时，自动删除容器
# -p: 3000:3000，将容器中的 3000 端口映射到宿主机的 3000 端口，左侧端口为宿主机端口，右侧为容器端口
$ docker run --rm -p 3000:3000 simple-app
```
## docker-compose

docker-compose是一种提效的配置工具，可以直接替代docker的镜像编译以及运行的过程
配置文件为docker-compose.yaml
```
version: "3"
services:
  app:
    # build: 从当前路径构建镜像
    build: .  #从哪里开始构建
    ports:
      - 3000:3000
# 替代了之前构建 运行的步骤
# 1.build image 2.docker run => docker-compose up --build
```

![image](https://user-images.githubusercontent.com/84896877/216293883-a12ea375-23ed-4ca4-aed9-9b6aba5d3b85.png)


## 镜像推送

名称规则： username/repositoryName
```
docker tag imagename imagename:2.0

docker tag demo liuketh/app:uat
docker push liuketh/app:uat
```

