# 性能优化
## 打包前

## 打包后
### 资源优化
* gzip
* preload
* 延迟加载
* cdn
* 服务端渲染
* http缓存
* http2启用
* webp


### 渲染性能
* 减少重绘重排
* 懒加载
* web worker
* 虚拟dom
* JS 动画转CSS

### 代码
* Tree Shaking
* 懒加载 预加载
* pnpm
* webpack本地cache优化


> Script脚本的Async和defer都是延迟执行脚本，他们都是在HTML解析的时候一部去下载脚本，区别在于Async实在下载完立即执行，defer是在下载之后HTML文档完全解析之后执行