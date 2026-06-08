import React from "react";
import Giscus from "@giscus/react";
import { useLocation } from "react-router-dom";

export default function Comment() {
  const location = useLocation();
  const currentPath = location.pathname;

  // 博客列表页不显示评论
  if (currentPath === '/blog/' || currentPath === '/blog') {
    return null;
  }

  return (
    <div>
      <Giscus
        key={currentPath}
        id="comments"
        repo="lkzwc/feddu"
        repoId="R_kgDOHUkdvQ"
        category="Announcements"
        categoryId="DIC_kwDOHUkdvc4CYeiv"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
