# Docker优化

## DockerFile时间优化
> 在Dockerfile 文件中，对于ADD指令来讲，如果添加文件的checksum没有发生改变，则可以利用构建缓存

```
FROM node:14-alpine as builder
 
WORKDIR /code
 
# 单独分离 package.json，是为了安装依赖可最大限度利用缓存
ADD package.json yarn.lock /code/
# 此时，yarn 可以利用缓存，如果 yarn.lock 内容没有变化，则不会重新依赖安装
RUN yarn
 
ADD . /code
RUN npm run build
 
CMD npx serve -s build
EXPOSE 3000
```

## 安装速度
PNPM

## 体积优化

* 编译使用NodeJS 
* 运行通过Nginx