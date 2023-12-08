import React from "react";
import { usePageData } from "rspress/runtime";
import { BlogItem } from "./BlogItem";
import "../../../theme/output.css";

export default function Blog() {
  const info = usePageData();
  console.log("info", info);
  return (
    <div className="flex justify-center p-10 bg-pink-300">
      <div className="grid grid-cols-1 divide-y"></div>
      {info?.siteData?.pages
        ?.filter(
          (item) => item.routePath.includes("/blog/") && item?.title !== ""
        )
        .map((item) => (
          <BlogItem item={item} />
        ))}
    </div>
  );
}
