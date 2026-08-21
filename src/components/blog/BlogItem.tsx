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
  index?: number;
}

export function BlogItem({ item, isLast, index = 0 }: BlogItemProps) {
  const { title, routePath, displayDate } = item;

  const parseDate = (dateStr?: string) => {
    if (!dateStr) return { month: "", day: "" };
    try {
      const d = new Date(dateStr);
      return {
        month: String(d.getMonth() + 1).padStart(2, "0"),
        day: String(d.getDate()).padStart(2, "0"),
      };
    } catch {
      return { month: "", day: "" };
    }
  };

  const { month, day } = parseDate(displayDate);

  const colors = [
    { dot: "bg-blue-500", glow: "shadow-blue-500/30", ring: "ring-blue-200 dark:ring-blue-900/50" },
    { dot: "bg-cyan-500", glow: "shadow-cyan-500/30", ring: "ring-cyan-200 dark:ring-cyan-900/50" },
    { dot: "bg-purple-500", glow: "shadow-purple-500/30", ring: "ring-purple-200 dark:ring-purple-900/50" },
    { dot: "bg-pink-500", glow: "shadow-pink-500/30", ring: "ring-pink-200 dark:ring-pink-900/50" },
    { dot: "bg-emerald-500", glow: "shadow-emerald-500/30", ring: "ring-emerald-200 dark:ring-emerald-900/50" },
    { dot: "bg-amber-500", glow: "shadow-amber-500/30", ring: "ring-amber-200 dark:ring-amber-900/50" },
  ];
  const color = colors[index % colors.length];

  return (
    <a href={`${routePath}.html`} className="group flex items-stretch relative">
      {/* 左侧时间线区域 */}
      <div className="flex flex-col items-center shrink-0 w-20 relative">
        {/* 日期 - 日/月横向排列 */}
        <div className="flex items-baseline gap-1 pt-3">
          <span className="text-base font-bold text-gray-700 dark:text-gray-300">
            {day}
          </span>
          <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500">
            {month}月
          </span>
        </div>

        {/* 时间点 */}
        <div className="relative mt-1">
          <div className={`w-3 h-3 rounded-full ${color.dot} ring-2 ${color.ring} shadow-lg ${color.glow} group-hover:scale-125 transition-transform duration-300`} />
        </div>

        {/* 向下连接线 */}
        {!isLast && (
          <div className="flex-1 w-px mt-2 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-gray-200 dark:to-gray-700/50" />
        )}
      </div>

      {/* 右侧内容 */}
      <div className={`flex-1 min-w-0 py-2.5 pr-4 ${!isLast ? "border-b border-gray-100 dark:border-gray-800/60" : ""}`}>
        <div className="flex items-center gap-2">
          <h3 className="text-[15px] font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          <svg className="shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>

      {/* Hover 背景 */}
      <div className="absolute inset-0 -mx-2 rounded-lg opacity-0 group-hover:opacity-100 bg-gray-50 dark:bg-gray-800/40 transition-opacity duration-200 pointer-events-none" />
    </a>
  );
}
