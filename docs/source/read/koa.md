---
slug: /koa
title: koa
---
以上资源来自 https://www.yuque.com/ruochuan12/notice/p5  若川视野 源码共读计划，更多精彩，欢迎坐飞机查看！


首先我们说下洋葱圈模型，就是我们常见的洋葱，一层一层的剥开，顾名思义，koa就是这样，不得不说，若川大佬写的文章还是挺棒的。很细心，这个智者见智，我就不多说了


当然在这之前你要具备基础调试的技巧，clone源码之后，按照流程直接调试，第一次看完代码一脸懵逼，没有看懂，这个时候不要放弃，哪里看不懂哪里打断点，一步步来。其中i+1就是为了将其指向下一个
![image](https://user-images.githubusercontent.com/84896877/171217715-bc9554ae-4cc2-43c9-88f3-22accfccab50.png)

整体下来虽然理解上换是有点模糊，但是基本逻辑已经清楚，可能是对js高级技术的应用不够，当闭包、bind、递归这些结合到一起之后的却有点难理解，最终精华就在最后一行代码上，慢慢熟悉，慢慢理解，加油！

低配版本：
 ```
const [fn1, fn2, fn3] = stack;
const fnMiddleware = function(context){
    return Promise.resolve(
      fn1(context, function next(){
        return Promise.resolve(
          fn2(context, function next(){
              return Promise.resolve(
                  fn3(context, function next(){
                    return Promise.resolve();
                  })
              )
          })
        )
    })
  );
};
```

看完是不是豁然开朗，原来跟着大佬学习很简单呀！