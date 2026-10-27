import React, { useMemo } from "react";
import { usePageData } from "rspress/runtime";
import { BlogItem } from "./BlogItem";

export default function Blog() {
  const info = usePageData();

  const posts = useMemo(() => {
    const pages = info?.siteData?.pages || [];
    return pages
      .filter(
        (item) =>
          item.routePath.startsWith("/blog/") &&
          item.routePath !== "/blog/" &&
          item.routePath !== "/blog"
      )
      .map((item) => {
        const dateStr =
          (item.frontmatter?.date as string) || item.lastUpdatedTime || "";
        return {
          ...item,
          sortDate: dateStr ? new Date(dateStr).getTime() : 0,
          displayDate: dateStr,
        };
      })
      .sort((a, b) => b.sortDate - a.sortDate);
  }, [info?.siteData?.pages]);

  const groups = useMemo(() => {
    const map: Record<string, typeof posts> = {};
    posts.forEach((p) => {
      const y = p.displayDate
        ? new Date(p.displayDate).getFullYear().toString()
        : "其他";
      (map[y] ||= []).push(p);
    });
    return Object.keys(map)
      .sort((a, b) => (a === "其他" ? 1 : b === "其他" ? -1 : Number(b) - Number(a)))
      .map((y) => ({ year: y, items: map[y] }));
  }, [posts]);

  return (
    <div className="lx-blog">
      <header className="lx-page-head">
        <div className="lx-kicker">Writing / 技术博客</div>
        <h1 className="lx-page-title">
          写点<em>长</em>的
        </h1>
        <p className="lx-lede" style={{ marginTop: 18 }}>
          短的在笔记里，长的放这里。都是些想清楚了才敢写下来的东西 ——
          关于类型、渲染、微服务，以及那些绕不过去的坑。
        </p>
        <div className="lx-kicker" style={{ marginTop: 24, letterSpacing: "0.16em" }}>
          {posts.length} 篇文章 · 按时间倒序
        </div>
      </header>

      {posts.length === 0 && (
        <p className="lx-lede" style={{ padding: "40px 0" }}>
          还没有文章。再等等。
        </p>
      )}

      {groups.map(({ year, items }) => (
        <section key={year} style={{ marginTop: 44 }}>
          <div className="lx-year">
            <span>{year}</span>
            <i />
            <em>{items.length} 篇</em>
          </div>
          <div className="lx-index">
            {items.map((post, i) => (
              <BlogItem item={post} index={i} key={post.routePath} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
