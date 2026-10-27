import React from "react";

export interface BlogItemData {
  title: string;
  routePath: string;
  displayDate?: string;
  frontmatter?: Record<string, any>;
}

export function fmtDate(input?: string) {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return "";
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
}

export function BlogItem({
  item,
  index,
}: {
  item: BlogItemData;
  index: number;
}) {
  return (
    <a className="lx-index-item" href={item.routePath}>
      <span className="lx-index-num">{String(index + 1).padStart(2, "0")}</span>
      <span className="lx-index-title">{item.title}</span>
      <span className="lx-index-date">{fmtDate(item.displayDate)}</span>
    </a>
  );
}
