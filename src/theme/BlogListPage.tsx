import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogPostItem from "./BlogPostItem";
import { Comment } from "../components/Global/Comment";

export default function BlogListPage(props) {
  const { metadata, items } = props;

  console.log("====================================");
  console.log("items", items, metadata);
  console.log("====================================");
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
          display: "flex",
          margin: "30px 100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {items.map(({ content }) => (
          <article
            style={{ width: "300px", margin: "10px" }}
            key={content?.frontMatter?.title}
          >
            <img
              // src={withBaseUrl(assets.image, { absolute: true })}
              src="https://mdn.github.io/css-examples/css-cookbook/balloons.jpg"
              alt="Hot air balloons"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            <div>
              <BlogPostItem data={content} />
            </div>
            <header>
              <h3>{content?.frontMatter?.title}</h3>
            </header>
            <footer>{content?.metadata?.description}</footer>
            <a href={content?.metadata?.permalink}>阅读原文</a>
          </article>
        ))}
      </div>
    </Layout>
  );
}
