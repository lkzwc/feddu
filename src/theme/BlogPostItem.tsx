// import BlogPostItem from "@theme-original/BlogPostItem";
import React from "react";
import clsx from "clsx";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import type { Props } from "@theme/BlogPostItem";
import Comment from "../components/Comment";

export default function BlogPostItem(props): JSX.Element {
  const { children } = props;

  return (
    <>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
      <Comment />
    </>
  );
}
