# 重排重绘以及绘制的关键路径

## 关键路径

Dom:下载 byte=>字符串=>AST=>Token=>Node=>Dom
CSS DOM：解析 CSS 文件
RenderDom: DOM + CSSDOM
layout:计算每一个元素在视扣的确切位置和大小
paint:将渲染树的每个节点转化成屏幕上的实际像素，通常也称之为绘制或者珊格化

## 重绘： repaint

> 元素样式发生变化、位置没有发生变化获取节点的像素背景，外观

## 重排： relayout（reflow）

> 元素位置发生变化，获取节点几何信息（位置、大小）,（文字字体、大小、排版、position、float、display）

## 总结：

- 都会影响动画和交互，时间很短，
- 重排必定造成重绘
- 动画加上 transform
- 使用 css 动画
- 硬件加速 transfrom3D
