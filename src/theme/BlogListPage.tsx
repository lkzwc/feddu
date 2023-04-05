export default function BlogListPage(){
    const { metadata, items } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  
    return <Layout   title={title}
    description={blogDescription}
    wrapperClassName={ThemeClassNames.wrapper.blogPages}
    pageClassName={ThemeClassNames.page.blogListPage}
    searchMetadatas={{
      // assign unique search tag to exclude this page from search results!
      tag: "blog_posts_list",
    }}>>
        
    </Layout>
}