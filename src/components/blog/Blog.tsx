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
        // 从 frontmatter 中提取日期
        const frontmatterDate = item.frontmatter?.date as string | undefined;
        const lastUpdated = item.lastUpdatedTime;
        // 优先使用 frontmatter 中的日期，否则使用最后更新时间
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
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          暂无博客文章
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          敬请期待更多精彩内容...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 头部 */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800/30 mb-4">
          <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
            {blogPosts.length} 篇文章
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          技术博客
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          记录学习过程中的思考与总结，分享前端开发的技术心得
        </p>
      </div>

      {/* 时间线 */}
      <div className="relative">
        {/* 中心轴线 */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent dark:from-blue-800/40 dark:via-purple-800/40 sm:-translate-x-1/2" />

        {years.map((year, yearIndex) => (
          <div key={year} className="mb-12 last:mb-0">
            {/* 年份标记 */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white dark:border-gray-900 shadow-lg sm:-translate-x-1/2" />
              <div className="ml-12 sm:ml-0 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold shadow-lg">
                {year}
              </div>
            </div>

            {/* 该年份的文章 */}
            <div className="space-y-6">
              {groupedByYear[year].map((post, index) => (
                <BlogItem
                  item={post}
                  key={post.routePath}
                  index={index}
                  total={groupedByYear[year].length}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
