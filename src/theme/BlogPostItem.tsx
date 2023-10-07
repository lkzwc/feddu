// import BlogPostItem from "@theme-original/BlogPostItem";
import React from "react";
import clsx from "clsx";
// import {useBlogPost} from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import type { Props } from "@theme/BlogPostItem";

export default function BlogPostItem(props): JSX.Element {
  // const {
  //   children: {
  //     type: { metadata },
  //   },
  // } = props;
  // console.log("propos", props);

  const { children } = props;

  return (
    <>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </>
  );
}
