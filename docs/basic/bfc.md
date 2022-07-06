---
slug: /bfc
title: BFC
---

## 普通流

按照先后位置置上而下布局，默认布局

## 浮动

根据浮动方向偏移

## 绝对定位

整体脱离文档流，不会影响其兄弟元素

## BFC

BFC 属于普通流，是一个独立的区域，不会影响其他区域，其他区域也不会影响它，可以将它看做一种元素属性

触发：

- float 不是 none
- 绝对定位 position 为 absolute 或者 fixed
- dispaly 为 table\inline-block 等
- overflow 不为 visible
  应用：
- div 塌陷（marginTop\marginBottom 合并）
- 清除浮动
- 阻止被浮动元素覆盖
