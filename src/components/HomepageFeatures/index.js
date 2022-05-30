import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "FE-DDU",
    Svg: require("@site/static/img/study.svg").default,
    description: (
      <>
        个人学习打卡，工作日必打，大家可以一起参与进来，github地址大家直接首页点击就行
      </>
    ),
  },
  {
    title: "博客",
    Svg: require("@site/static/img/note.svg").default,
    description: <>用最少的笔记学习最完整的知识点</>,
  },
  {
    title: "大神",
    Svg: require("@site/static/img/other.svg").default,
    description: <>前端工具库、前端大神博客</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
