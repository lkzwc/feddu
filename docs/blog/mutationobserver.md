---
sidebar: false
---
# MutationObserver的应用

## For What？

> 依据 MDN 的解释，MutationObserver 主要是用来监听 dom 变化的

<!-- truncate -->
## 应用

```
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [mu, setMu] = useState({});

  useEffect(() => {
    const temmu = new MutationObserver(function (arr, obser) {
      arr.forEach((item) => {
        switch (item.type) {
          case 'attributes':
            console.log('属性改变了', item);
            document.getElementById('me').style.background="red"
            temmu.disconnect();
            break;
          case 'childList':
            console.log('child改变了');
            break;
        }
      });
    });
    temmu.observe(document.getElementById('me'), {
      childList: true,
      attributes: true,
    });
    return () => {
      temmu.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <button id="me">点击呀ddd</button>
    </div>
  );
}

export default App;

```

本示例当中，当用户去修改 button 属性的时候，比如通过 f12 去修改，我们会将其颜色修改为红色。那么实践中有什么用呢？比如水印哈哈，一直白嫖，用户 F12 修改了，可以自动再改回
