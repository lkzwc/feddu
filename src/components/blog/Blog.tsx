import React from "react";
import { usePageData } from "rspress/runtime";
import { BlogItem } from "./BlogItem";

export default function Blog() {
  const info = usePageData();
  console.log("info", info);
  return (
    <div>
      <div className="grid divide-y divide-gray-400">
        <div></div>
        <div className="flex flex-wrap justify-center p-8">
          {info?.siteData?.pages
            ?.filter(
              (item) => item.routePath.includes("/blog/") && item.routePath !== '/blog/'
            )
            .map((item) => (
              <BlogItem item={item} key={item.routePath} />
            ))}
        </div>
      </div>
    </div>
  );
}
