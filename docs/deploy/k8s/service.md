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

 ```
 kubectl expose deploy my-dep --port=8000 --target-port=80. //暴露mydep 创建的pod
 ```