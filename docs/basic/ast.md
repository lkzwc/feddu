---
slug: /ast
title: AST-抽象语法树
---

## AST ——Abstract Syntax Tree 抽象语法树

## AST 是干什么用的呢？

主要目的是为了生成代码结构并进行转化为合适的语法,比如：

- ES6=>ES5
- LESS/SASS=> CSS
- TS =>JS
- JSX 转化

## 核心过程

1. code=>AST(解析)
2. AST=>AST（转化）
3. AST=>code（生成）

## AST 的生成

- 词法分析
  > 将代码转化为 Token 流，维护一个关于 token 的数组，其应用主要有代码检查、语法高亮、模板
- 语法分析
  > 将 token 转化为 AST

具体的转化可以看下https://github.com/jamiebuilds/the-super-tiny-compiler
