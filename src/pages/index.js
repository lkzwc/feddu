import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@waline/client@v2/dist/waline.css"
      /><div id="waline"></div>
      <script type="module">
        import {init} from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

        init({
          el: '#waline',
        serverURL: 'https://preeminent-druid-33b9d0.netlify.app/.netlify/functions/comment',
      })
      </script>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">流客&#128260;流浪的行者</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/readme"
          >
            Let`s study frontend together!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
