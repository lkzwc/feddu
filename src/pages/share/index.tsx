import React from "react";
import Layout from "@theme/Layout";
import { Comment } from "../../components/Global/Comment";

function Classify(props) {
  const classify = [
    {
      name: "工具",
      items: [
        {
          name: "cdn",
          url: "https://cdnjs.com/libraries/font-awesome",
          desc: "简单的图标库，通过引入CDN样式以及使用简单的<i>即可实现",
        },
        {
          name: "gif",
          desc: "GIF 图片搜索",
          url: "https://gifdb.com/",
        },
        {
          name: "gif",
          desc: "提供CDN链接，速度快",
          url: "https://dribbble.com/",
        },
      ],
    },
  ];
  return (
    <div style={{ margin: "30px" }}>
      {classify.map((item) => (
        <div>
          <span
            style={{
              writingMode: "vertical-rl",
              borderBlock: "5px dashed blue",
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              border: "2px solid",
              margin: "20px",
            }}
          >
            {item?.items.map((one) => (
              <a
                href={one.url}
                style={{ marginLeft: "10px", marginTop: "-20px" }}
              >
                {one.name}
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
      <Comment path={"/"} serverURL={"https://lkzwc-comment.netlify.app/.netlify/functions/comment"}/>
    </Layout>
  );
}

export default Share;
