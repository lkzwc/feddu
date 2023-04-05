import React from "react";
import Seo from "@theme/Seo";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

export default function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    assets,
    isBlogPostPage = false,
  } = props;
  const { date, formattedDate, permalink, tags, readingTime, title, authors } =
    metadata;
  const { keywords } = frontMatter;
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div>
      <Seo {...{ keywords, image: assets.image }} />
      <article>
        <meta
          itemProp="image"
          content={withBaseUrl(assets.image, { absolute: true })}
        />
      </article>
      {title}
    </div>
  );
}
