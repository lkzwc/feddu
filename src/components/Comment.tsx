import React from "react";
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <div>
      <Giscus
        id="comments"
        repo="lkzwc/fe-ddu"
        repoId="R_kgDOHUkdvQ"
        category="Announcements"
        categoryId="DIC_kwDOHUkdvc4CYeiv"
        mapping="title"
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
