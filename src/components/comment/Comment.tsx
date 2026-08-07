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
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            发表评论
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            使用 GitHub 账号登录后即可评论
          </p>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
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
