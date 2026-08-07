import React, { useMemo } from "react";
import { usePageData } from "rspress/runtime";
import { BlogItem } from "./BlogItem";

export default function Blog() {
  const info = usePageData();

  const blogPosts = useMemo(() => {
    const pages = info?.siteData?.pages || [];
    const posts = pages
      .filter(
        (item) =>
          item.routePath.startsWith("/blog/") &&
          item.routePath !== "/blog/" &&
          item.routePath !== "/blog"
      )
      .map((item) => {
        const frontmatterDate = item.frontmatter?.date as string | undefined;
        const lastUpdated = item.lastUpdatedTime;
        const dateStr = frontmatterDate || lastUpdated || "";
        const dateObj = dateStr ? new Date(dateStr) : new Date(0);
        return {
          ...item,
          sortDate: dateObj.getTime(),
          displayDate: dateStr,
        };
      })
      .sort((a, b) => b.sortDate - a.sortDate);

    return posts;
  }, [info?.siteData?.pages]);

  // 按年份分组
  const groupedByYear = useMemo(() => {
    const groups: Record<string, typeof blogPosts> = {};
    blogPosts.forEach((post) => {
      const year = post.displayDate
        ? new Date(post.displayDate).getFullYear().toString()
        : "其他";
      if (!groups[year]) groups[year] = [];
      groups[year].push(post);
    });
    return groups;
  }, [blogPosts]);

  const years = Object.keys(groupedByYear).sort((a, b) =>
    b === "其他" ? -1 : a === "其他" ? 1 : Number(b) - Number(a)
  );

  if (blogPosts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">暂无博客文章</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">敬请期待更多精彩内容...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* 头部 */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">技术博客</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            共 {blogPosts.length} 篇文章
          </p>
        </div>
      </div>

      {/* 按年份分组的列表 */}
      <div className="space-y-6">
        {years.map((year) => (
          <div key={year}>
            {/* 年份标题 */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {year}
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {groupedByYear[year].length} 篇
              </span>
            </div>

            {/* 文章列表 */}
            <div className="divide-y divide-gray-100 dark:divide-gray-800 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900/50">
              {groupedByYear[year].map((post) => (
                <BlogItem item={post} key={post.routePath} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
