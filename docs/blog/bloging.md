# Shadowsocks搭建以及加速

## 服务器选购
网上的很多，比如Vultr等等 ，千挑万选，选择一个性价比最好的，价格适中
![image](https://github.com/lkzwc/feddu/assets/84896877/75be2a9a-c24f-47c6-a4d7-873a289d99c5)
[服务器选购](https://my.racknerd.com/aff.php?aff=10447)

## 基础扫盲
直接选择去看官网即可

[Shadowsocks基础知识](https://shadowsocks.org/doc/deploying.html)

## 服务器
连接到服务器之后，安装Docker,根据自己的服务器类型选择最合适的安装，参考[详见](https://docs.docker.com/engine/install/centos/)


## 运行环境
### docker-compose.yml
```
shadowsocks:
  image: shadowsocks/shadowsocks-libev
  ports:
    - "8388:8388"
  environment:
    - METHOD=aes-256-gcm
    - PASSWORD=9MLSpPmNt
  restart: always
```
### 启动容器
```
docker-compose up -d
```

## 加速
加速方案有多种，其中最好的是Kcptun，但是由于我系统不支持，就只能选择其他的了
```
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"
chmod +x tcp.sh
bash tcp.sh
```