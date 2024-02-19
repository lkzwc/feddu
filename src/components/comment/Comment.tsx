import React from "react";
import Giscus from "@giscus/react";
import { usePathUtils } from "rspress/theme";
import { usePageData } from "rspress/runtime";

export default function Comment() {
  const info = usePageData()
  return (
    <div>
     {
       info?.page?.routePath !== '/blog/' && <Giscus
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
     }
    </div>
  );
}
