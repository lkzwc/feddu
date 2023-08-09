
// import BlogPostItem from "@theme-original/BlogPostItem";
import React from 'react';
import clsx from 'clsx';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';

export default function BlogPostItem(props) {
  const containerClassName = useContainerClassName();
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
    views,
  } = props;

  const { date, permalink, tags, readingTime } = metadata;

  // activityId, oid 为 B 站评论相关
  const {
    slug: postId,
    author,
    title,
    image,
    activityId,
    oid,
    bvid,
  } = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, { absolute: true });

  // 是否为黑暗主题：
  const theme = useContext(ThemeContext);
  const { isDarkTheme } = theme;
  return (
    <BlogPostItemContainer className={clsx('margin-bottom--xl', className)}>
      <script src="https://giscus.app/client.js"
        data-repo="lkzwc/fe-ddu"
        data-repo-id="R_kgDOHUkdvQ"
        data-category="BLOG"
        data-category-id="DIC_kwDOHUkdvc4CYeix"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossOrigin="anonymous"
        async>
      </script>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}