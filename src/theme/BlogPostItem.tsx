import React from "react";
// import Seo from "@theme/Seo";
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
      {/* <Seo {...{ keywords, image: assets.image }} /> */}
      <article>
        <header>
          <h2>A longer heading in this card</h2>
        </header>
        <img
          src={withBaseUrl(assets.image, { absolute: true })}
          alt="Hot air balloons"
        />
        <div>
          <p>
            In a curious work, published in Paris in 1863 by Delaville Dedreux,
            there is a suggestion for reaching the North Pole by an aerostat.
          </p>
        </div>
        <footer>I have a footer!</footer>
      </article>
    </div>
  );
}
