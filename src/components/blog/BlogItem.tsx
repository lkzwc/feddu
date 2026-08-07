import React from "react";

interface BlogItemProps {
  item: {
    title: string;
    routePath: string;
    frontmatter?: Record<string, any>;
    lastUpdatedTime?: string;
    displayDate?: string;
  };
  index: number;
  total: number;
}

const tagColors = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-pink-500 to-pink-600",
  "from-green-500 to-green-600",
  "from-orange-500 to-orange-600",
  "from-teal-500 to-teal-600",
];

export function BlogItem({ item, index }: BlogItemProps) {
  const { title, routePath, frontmatter, displayDate } = item;

  // 提取简短描述（从 frontmatter description 或标题推断）
  const description =
    (frontmatter?.description as string) ||
    (frontmatter?.summary as string) ||
    "";

  // 格式化日期
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(d.getDate()).padStart(2, "0")}`;
    } catch {
      return dateStr;
    }
  };

  const formattedDate = formatDate(displayDate);

  // 提取月份和日
  const monthDay = (() => {
    if (!displayDate) return "";
    try {
      const d = new Date(displayDate);
      return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(
        d.getDate()
      ).padStart(2, "0")}`;
    } catch {
      return "";
    }
  })();

  const tagColor = tagColors[index % tagColors.length];

  return (
    <div className="relative flex items-start group">
      {/* 左侧时间节点 */}
      <div className="absolute left-4 sm:left-1/2 flex flex-col items-center sm:-translate-x-1/2">
        {/* 节点圆点 */}
        <div
          className={`w-3 h-3 rounded-full bg-gradient-to-br ${tagColor} border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-125 transition-transform duration-300 z-10`}
        />
        {/* 连接线（向下） */}
        <div className="w-0.5 flex-1 bg-gray-200 dark:bg-gray-700 mt-1 group-last:hidden" />
      </div>

      {/* 卡片内容 */}
      <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] flex-1 sm:flex-none">
        <a
          href={`${routePath}.html`}
          className="block group/card"
        >
          <article className="relative bg-white dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
            {/* 顶部彩色条 */}
            <div className={`h-1 bg-gradient-to-r ${tagColor}`} />

            <div className="p-5">
              {/* 日期标签 */}
              {monthDay && (
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gradient-to-r ${tagColor} text-white shadow-sm`}>
                    {monthDay}
                  </span>
                  {formattedDate && (
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {formattedDate}
                    </span>
                  )}
                </div>
              )}

              {/* 标题 */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors duration-200 mb-2 line-clamp-2">
                {title}
              </h3>

              {/* 描述 */}
              {description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                  {description}
                </p>
              )}

              {/* 底部操作栏 */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover/card:gap-2 transition-all duration-200">
                  <span>阅读全文</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/card:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>

                {/* 箭头指示器（移动端） */}
                <svg
                  className="w-5 h-5 text-gray-300 dark:text-gray-600 sm:hidden group-hover/card:text-blue-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  );
}
