import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogPostItem from "./BlogPostItem";
import dayjs from "dayjs";
// import { Comment } from "../components/Global/Comment";

export default function BlogListPage(props) {
  const { metadata, items } = props;

  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <Layout
      title={title}
      description={blogDescription}
      // wrapperClassName={ThemeClassNames.wrapper.blogPages}
      // pageClassName={ThemeClassNames.page.blogListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: "blog_posts_list",
      }}
    >
      <div
        style={{
          margin: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {items.map(({ content }) => (
          <article
            style={{ width: "350px", margin: "10px", borderRadius: "10px" }}
            key={content?.frontMatter?.title}
          >
            <header
              style={{
                background: "#FEDDDD",
                height: "40px",
                padding: "5px",
              }}
            >
              <a href={content?.metadata?.permalink}>
                <h3>{content?.frontMatter?.title}</h3>
              </a>
            </header>
            <img
              // src={withBaseUrl(assets.image, { absolute: true })}
              src="https://mdn.github.io/css-examples/css-cookbook/balloons.jpg"
              alt="Hot air balloons"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "70%",
              }}
            />
            <div>
              <BlogPostItem data={content} />
            </div>

            <footer>{dayjs(content.metadata.date).format("YYYY/MM/DD")}</footer>
          </article>
        ))}
      </div>
    </Layout>
  );
}
