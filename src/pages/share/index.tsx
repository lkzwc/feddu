import React from "react";
import Layout from "@theme/Layout";

function Classify(props) {
  const classify = [
    {
      name: "工具",
      items: [
        {
          name: "cdn",
          url: "https://cdnjs.com/libraries/font-awesome",
        },
        {
          name: "cdn",
          url: "https://cdnjs.com/libraries/font-awesome",
        },
        {
          name:'gif'
          url: 'https://gifdb.com/'
        }
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
    </Layout>
  );
}

export default Share;
