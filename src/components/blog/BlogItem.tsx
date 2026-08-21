import React from "react";

interface BlogItemProps {
  item: {
    title: string;
    routePath: string;
    frontmatter?: Record<string, any>;
    lastUpdatedTime?: string;
    displayDate?: string;
  };
  isLast?: boolean;
}

export function BlogItem({ item, isLast }: BlogItemProps) {
  const { title, routePath, displayDate } = item;

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      return `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    } catch {
      return "";
    }
  };

  const formattedDate = formatDate(displayDate);

  return (
    <a
      href={`${routePath}.html`}
      className="group flex items-stretch"
    >
      {/* 左侧时间线 */}
      <div className="flex flex-col items-center shrink-0 w-16">
        {/* 日期 */}
        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-3">
          {formattedDate}
        </div>
        {/* 时间点 */}
        <div className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-400 dark:bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/40 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 group-hover:ring-blue-200 dark:group-hover:ring-blue-800 transition-all" />
        {/* 向下连接线 */}
        {!isLast && (
          <div className="flex-1 w-px bg-gray-200 dark:bg-gray-700 mt-1" />
        )}
      </div>

      {/* 右侧内容 */}
      <div className="flex-1 min-w-0 py-3 pr-4 border-b border-gray-100 dark:border-gray-800 group-last:border-b-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <svg
            className="shrink-0 w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </a>
  );
}
