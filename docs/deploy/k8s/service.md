---
title: Service of k8s
authors:
  - lkzwc
  - name: lkzwc
    title: lkzwc
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
tags: [hello, docusaurus-v2]
description: k8s中的service
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

## Service
 > 将一组POD通过一个IP暴露出来

 ![image](https://github.com/lkzwc/fe-ddu/assets/84896877/d048d706-3c46-4fb3-b2d5-00c3fe327b21)



 ## ClusterIP 
 ```
 kubectl expose deploy my-dep --port=8000 --target-port=80 //暴露mydep 创建的pod

// 两种方式
serviceIP:8000
service域名：8000  服务名.所在名称空间.svc
 ```

 ## NodePort

```
 kubectl expose deploy my-dep --port=8000 --target-port=80  --type=NodePort
```
![image](https://github.com/lkzwc/fe-ddu/assets/84896877/9940e9f0-0dbe-40ee-b5d9-02688ec0d741)

 > 节点端口 ，集群外部访问

 ## Ingress

![image](https://github.com/lkzwc/fe-ddu/assets/84896877/fa745381-5475-4c0b-849e-f76a8fb25eba)
### Ingress 路由配置文件

主要是进行路由的配置
```
apiVersion: extensions/v1beta1  
kind: Ingress         
metadata:
  name: nginx-app-ingress  
  namespace: test 
  annotations:
spec:
  ingressClassName: nginx
  rules:                        
  - host: test.k8s.com       
    http:                  
      paths:             
      - path: /              
        backend:            
          serviceName: nginx-app-svc  
          servicePort: 80
```

### Ingress Controller

如图中的Ingress-nginx. 主要是对流量进行分发
