import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Comment } from "../components/Global/Comment";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@waline/client@v2/dist/waline.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ></link>
      <div
        className="container"
        style={{
          display: "grid",
          textAlign: "left",
          columnGap: "20px",
          gridTemplateColumns: "2fr 1fr",
          gridTemplateRows: "1fr 50px",
        }}
      >
        <div className="hero__subtitle">
          <i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>
          I'am a program developer who is enthusiastic about new technology and
          believe in code change the world!
          <div
            style={{
              display: "grid",
              width: "max-content",
              columnGap: "10px",
              gridTemplateColumns: "repeat(10,1fr)",
            }}
          >
            <i
              class="fa-brands fa-2x fa-vuejs"
              style={{ color: "#42B883" }}
            ></i>
            <i
              class="fa-brands fa-2x fa-react"
              style={{ color: "#149ECA" }}
            ></i>
            <i class="fa-brands fa-2x fa-less" style={{ color: "#f0de14" }}></i>
            <i class="fa-brands fa-2x fa-node" style={{ color: "#484a4b" }}></i>
            <i class="fa-brands fa-2x fa-docker"></i>
            <i
              class="fa-brands fa-2x fa-square-js"
              style={{ color: "#1053c6" }}
            ></i>
            <i class="fa-brands fa-2x fa-github"></i>
          </div>
        </div>

        {/* <img src="https://gifdb.com/images/high/animated-man-computer-coding-nae6mec378lsg1i3.webp" /> */}
        <div
          style={{
            gridRow: 1,
            gridColumn: 2,
          }}
        >
          <img
            width="500"
            height="300"
            src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/5387dc7e035b3efe9d94516044de66a4.gif"
          />
        </div>
        <div style={{ gridRow: 2, gridColumn: 1 / 15 }}>
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
