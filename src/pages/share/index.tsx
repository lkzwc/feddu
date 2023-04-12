import React from "react";
import Layout from "@theme/Layout";
import { Comment } from "../../components/Global/Comment";
function Classify(props) {
  const classify = [
    {
      name: "工具",
      items: [
        {
          name: "图标库",
          url: "https://cdnjs.com/libraries/font-awesome",
          desc: "简单的图标库，通过引入CDN样式以及使用简单的<i>即可实现",
        },
        {
          name: "gif",
          desc: "GIF 图片搜索",
          url: "https://gifdb.com/",
        },
        {
          name: "Gif CDN",
          desc: "提供CDN链接，速度快",
          url: "https://dribbble.com/",
        },
        {
          name: "What Character",
          desc: "字符表情",
          url: "http://www.amp-what.com/",
        },
        {
          name: "Image compress and tansfer",
          desc: "图片压缩",
          url: "https://anywebp.com/",
        },
      ],
    },
    {
      name: "大神博客",
      items: [
        {
          name: "前端进阶题-山月",
          url: "https://q.shanyue.tech/",
        },
        {
          name: "前端源码-若川",
          url: "https://lxchuan12.gitee.io/",
        },
      ],
    },
  ];
  return (
    <div>
      {classify.map((item) => (
        <div style={{ margin: "30px" }}>
          <span
            style={{
              borderBlock: "5px dashed blue",
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              border: "1px solid",
              margin: "20px",
            }}
          >
            {item?.items.map((one) => (
              <a
                href={one.url}
                style={{ marginLeft: "10px", marginTop: "-20px" }}
              >
                {one.name} |
              </a>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

function Share(props) {
  return (
    <Layout>
      <Classify />
    </Layout>
  );
}

export default Share;
