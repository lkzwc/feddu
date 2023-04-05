import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BlogPostItem from "./BlogPostItem";

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
      {items.map(({ content: infos }) => (
        <BlogPostItem
          key={infos.metadata.permalink}
          frontMatter={infos.frontMatter}
          assets={infos.assets}
          metadata={infos.metadata}
          truncated={infos.metadata.truncated}
        />
      ))}
    </Layout>
  );
}
