import React, { useEffect, useRef } from "react";
import Giscus from "@giscus/react";
import { useLocation } from "react-router-dom";
import { useDark } from "rspress/runtime";

export default function Comment() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isDark = useDark();

  // 博客列表页和首页不显示评论
  if (
    currentPath === '/blog/' ||
    currentPath === '/blog' ||
    currentPath === '/' ||
    currentPath === ''
  ) {
    return null;
  }

  const giscusTheme = isDark ? "dark" : "light";

  return (
    <div style={{ marginTop: 56, paddingTop: 28, borderTop: "1px solid var(--lx-rule)" }}>
      <div style={{ marginBottom: 18 }}>
        <div className="lx-kicker">Comments / 讨论</div>
        <h3
          style={{
            fontFamily: "var(--lx-serif)",
            fontSize: 22,
            margin: "10px 0 4px",
            color: "var(--lx-ink)",
          }}
        >
          说两句
        </h3>
        <p style={{ fontSize: 12.5, color: "var(--lx-ink-3)" }}>
          用 GitHub 账号登录后即可评论
        </p>
      </div>
      <div style={{ overflow: "hidden" }}>
        <Giscus
          key={`${currentPath}-${giscusTheme}`}
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
          theme={giscusTheme}
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </div>
  );
}
