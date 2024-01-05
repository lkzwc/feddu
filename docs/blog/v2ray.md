---
sidebar: false
---
# V2Ray使用教程

## 扫盲

* V2Ray是ProjectV的一个核心工具，ProjectV是一个包含一系列构建特定网络环境的工具
* V2Ray相比Shadowsocks更加强大

## 使用教程
* 下载
```
curl -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh
```

* 安装
```
bash install-release.sh
```

* 其他
```
systemctl status v2ray
systemctl enabled v2ray
systemctl --zone=public --list-ports
firewall-cmd --add-port=10000/tcp --permanent
```

## 伪装
[参考](https://v2xtls.org/v2ray%e9%ab%98%e7%ba%a7%e6%8a%80%e5%b7%a7%ef%bc%9a%e6%b5%81%e9%87%8f%e4%bc%aa%e8%a3%85/)
