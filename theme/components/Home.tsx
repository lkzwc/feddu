import React, { useMemo } from "react";
import { usePageData } from "rspress/runtime";
import {
  Arrow,
  ArrowUpRight,
  Clock,
  Marquee,
  MemphisShapes,
  Reveal,
  Seal,
  SectionHead,
  Sticker,
} from "./bits";

const CATEGORIES: Record<string, string> = {
  basic: "Basic",
  chrome: "浏览器",
  design: "设计模式",
  docker: "Docker",
  engineering: "工程化",
  k8s: "K8s",
  react: "React",
  vue: "Vue",
  "source-read": "源码阅读",
  "source-realize": "源码实现",
};

function fmtDate(input?: string) {
  if (!input) return "";
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return "";
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
}

export default function Home() {
  const { siteData } = usePageData();
  const pages = (siteData?.pages || []) as any[];

  const { notes, posts, cats, latest } = useMemo(() => {
    const notes = pages.filter(
      (p) =>
        p.routePath.startsWith("/note/") &&
        p.routePath !== "/note/" &&
        p.routePath !== "/note"
    );
    const posts = pages
      .filter(
        (p) =>
          p.routePath.startsWith("/blog/") &&
          p.routePath !== "/blog/" &&
          p.routePath !== "/blog"
      )
      .map((p) => ({
        ...p,
        _date: p.frontmatter?.date || p.lastUpdatedTime || "",
      }))
      .sort((a, b) => +new Date(b._date || 0) - +new Date(a._date || 0));

    const counter: Record<string, number> = {};
    notes.forEach((p) => {
      const seg = p.routePath.split("/")[2];
      if (seg) counter[seg] = (counter[seg] || 0) + 1;
    });
    const cats = Object.keys(CATEGORIES)
      .filter((k) => counter[k])
      .map((k) => ({ key: k, label: CATEGORIES[k], count: counter[k] }));

    return { notes, posts, cats, latest: posts.slice(0, 4) };
  }, [pages]);

  return (
    <div className="lx-home" id="top">
      {/* ---------------------------------------------------------- HERO */}
      <section className="lx-hero">
        <div className="lx-wrap">
          <MemphisShapes />
          <div className="lx-hero-grid">
            <div className="lx-hero-left">
              <Sticker />
              <div className="lx-kicker">
                Frontend engineer · since 2017 · 中国
              </div>

              <div className="lx-hero-head">
                <h1 className="lx-display">
                  相信代码
                  <br />
                  能<em className="lx-mark">改变</em>世界
                </h1>
              </div>

              <p className="lx-lede">
                我是 lkzwc，一名前端工程师。写代码，也读源码；做业务，也写笔记。
                这个站点是我公开的笔记本 —— 学习笔记、技术博客、书架，还有一页简历。
              </p>

              <div className="lx-actions">
                <a className="lx-btn" href="/note/">
                  翻翻笔记 <Arrow />
                </a>
                <a className="lx-btn lx-btn--ghost" href="/blog/">
                  读点长的
                </a>
                <a className="lx-btn lx-btn--ghost" href="/resume">
                  一页简历
                </a>
              </div>

              <div
                className="lx-kicker"
                style={{ letterSpacing: "0.16em", marginTop: 26 }}
              >
                {notes.length} 篇笔记 · {posts.length} 篇博客 · 1 本书
              </div>
            </div>

            {/* -------------------------------------------------- status */}
            <div className="lx-status-wrap">
            <aside className="lx-card lx-card--status">
              <div className="lx-status-top">
                <span>
                  <i className="lx-dot" />
                  Now
                </span>
                <span>Asia / Shanghai</span>
              </div>

              <Clock withDate />

              <div className="lx-status-meta">
                <div className="lx-status-row">
                  <dt>正在</dt>
                  <dd>整理《高性价比人生指南》</dd>
                </div>
                <div className="lx-status-row">
                  <dt>收录</dt>
                  <dd>
                    {notes.length} 笔记 / {posts.length} 博客
                  </dd>
                </div>
                <div className="lx-status-row">
                  <dt>状态</dt>
                  <dd>开放交流</dd>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  marginTop: 18,
                  paddingTop: 14,
                  borderTop: "1px solid var(--lx-rule)",
                  fontFamily: "var(--lx-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--lx-ink-3)",
                }}
              >
                <a href="https://github.com/lkzwc" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="/read/">书架</a>
                <a href="/resume">简历</a>
                <span style={{ marginLeft: "auto" }}>
                  <Seal size={30} />
                </span>
              </div>
            </aside>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- MARQUEE */}
      <Marquee
        items={[
          <b key="a">学习笔记</b>,
          "JavaScript / 浏览器 / 设计模式",
          <b key="b">技术博客</b>,
          "React / Vue / 源码",
          <b key="c">书架</b>,
          "Docker / K8s / 工程化",
          <b key="d">一页简历</b>,
          "Write · Build · Repeat",
        ]}
      />

      {/* ---------------------------------------------------------- INDEX */}
      <section className="lx-section">
        <div className="lx-wrap">
          <span className="lx-ghost" aria-hidden="true">01</span>
          <span className="lx-rail" aria-hidden="true">Index — 目录</span>
          <Reveal>
            <SectionHead
              label="Index / 目录"
              title={
                <>
                  五个抽屉，
                  <br />
                  装着我在做的事
                </>
              }
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="lx-bento">
              <a className="lx-tile lx-tile--wide" href="/note/">
                <div className="lx-tile-arrow">
                  <ArrowUpRight />
                </div>
                <div className="lx-tile-num">01 — 学习笔记</div>
                <div>
                  <h3 className="lx-tile-title">
                    {notes.length}
                    <span>篇</span>
                  </h3>
                  <p className="lx-tile-desc">
                    从 JavaScript 基础到浏览器原理、设计模式、React 与
                    Vue 源码。按主题分好，随时回来翻。
                  </p>
                </div>
                <div className="lx-chips">
                  {cats.map((c) => (
                    <span className="lx-chip" key={c.key}>
                      {c.label} {c.count}
                    </span>
                  ))}
                </div>
              </a>

              <a className="lx-tile lx-tile--half" href="/blog/">
                <div className="lx-tile-arrow">
                  <ArrowUpRight />
                </div>
                <div className="lx-tile-num">02 — 技术博客</div>
                <div>
                  <h3 className="lx-tile-title">
                    {posts.length}
                    <span>篇</span>
                  </h3>
                  <p className="lx-tile-desc">
                    更完整的长文：类型系统、SSR、微服务、微信登录。
                  </p>
                </div>
                <div
                  style={{
                    fontFamily: "var(--lx-mono)",
                    fontSize: 10.5,
                    color: "var(--mem-indigo)",
                    opacity: 0.7,
                    letterSpacing: "0.08em",
                  }}
                >
                  LATEST ↗ {latest[0]?.title || "—"}
                </div>
              </a>

              <a className="lx-tile lx-tile--third" href="/read/">
                <div className="lx-tile-arrow">
                  <ArrowUpRight />
                </div>
                <div className="lx-tile-num">03 — 书架</div>
                <div>
                  <h3 className="lx-tile-title">
                    1<span>本</span>
                  </h3>
                  <p className="lx-tile-desc">
                    《高性价比人生指南》—— 612 条按性价比排序的人生建议。
                  </p>
                </div>
              </a>

              <a className="lx-tile lx-tile--third" href="/resume">
                <div className="lx-tile-arrow">
                  <ArrowUpRight />
                </div>
                <div className="lx-tile-num">04 — 简历</div>
                <div>
                  <h3 className="lx-tile-title">
                    9<span>年</span>
                  </h3>
                  <p className="lx-tile-desc">
                    从轨道交通软件到菜鸟网络，一条偏工程化的成长线。
                  </p>
                </div>
              </a>

              <a className="lx-tile lx-tile--third" href="https://github.com/lkzwc" target="_blank" rel="noreferrer">
                <div className="lx-tile-arrow">
                  <ArrowUpRight />
                </div>
                <div className="lx-tile-num">05 — 别处</div>
                <div>
                  <h3 className="lx-tile-title">
                    GitHub<span>↗</span>
                  </h3>
                  <p className="lx-tile-desc">
                    开源、Side project，以及一些没写完的想法。
                  </p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- WRITING */}
      {latest.length > 0 && (
        <section className="lx-section" style={{ paddingTop: 0 }}>
          <div className="lx-wrap">
            <span className="lx-ghost" aria-hidden="true">02</span>
            <span className="lx-rail" aria-hidden="true">Writing — 写作</span>
            <Reveal>
              <SectionHead
                label="Writing / 最近在写"
                title="写给未来的自己"
                link="/blog/"
                linkText="全部文章"
              />
            </Reveal>

            <Reveal delay={60}>
              <div className="lx-index">
                {latest.map((post, i) => (
                  <a
                    className="lx-index-item"
                    href={post.routePath}
                    key={post.routePath}
                  >
                    <span className="lx-index-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="lx-index-title">{post.title}</span>
                    <span className="lx-index-date">{fmtDate(post._date)}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------- ABOUT */}
      <section className="lx-section" style={{ paddingTop: 0 }}>
        <div className="lx-wrap">
          <span className="lx-rail" aria-hidden="true">About — 关于</span>
          <Reveal>
            <div className="lx-about">
              <div>
                <div className="lx-kicker" style={{ marginBottom: 16 }}>
                  About / 关于
                </div>
                <p className="lx-quote">
                  GitHub 的常客，React 的忠实粉丝，Vue3 的偏爱者，
                  K8S 的爱好者，Go 的暗恋者。
                </p>
                <div className="lx-actions" style={{ marginTop: 26 }}>
                  <a className="lx-btn" href="/resume">
                    看看完整简历 <Arrow />
                  </a>
                </div>
              </div>

              <dl className="lx-facts">
                <div className="lx-fact">
                  <dt>入行</dt>
                  <dd>
                    2017<small>年</small>
                  </dd>
                </div>
                <div className="lx-fact">
                  <dt>笔记</dt>
                  <dd>
                    {notes.length}
                    <small>篇</small>
                  </dd>
                </div>
                <div className="lx-fact">
                  <dt>博客</dt>
                  <dd>
                    {posts.length}
                    <small>篇</small>
                  </dd>
                </div>
                <div className="lx-fact">
                  <dt>主题</dt>
                  <dd>
                    {cats.length}
                    <small>类</small>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
