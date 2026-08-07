import React from "react";

interface BlogItemProps {
  item: {
    title: string;
    routePath: string;
    frontmatter?: Record<string, any>;
    lastUpdatedTime?: string;
    displayDate?: string;
  };
}

export function BlogItem({ item }: BlogItemProps) {
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
      className="group flex items-center gap-4 px-4 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
    >
      {/* 日期 */}
      {formattedDate && (
        <div className="shrink-0 w-12 text-center">
          <div className="text-xs font-medium text-gray-400 dark:text-gray-500">
            {formattedDate}
          </div>
        </div>
      )}

      {/* 标题 */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
      </div>

      {/* 箭头 */}
      <svg
        className="shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </a>
  );
}
