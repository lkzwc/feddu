import React from "react";
import { Clock } from "./bits";

export default function SiteFooter() {
  return (
    <footer className="lx-footer">
      <div className="lx-footer-inner">
        <div className="lx-footer-top">
          <div>
            <div className="lx-footer-h">一个前端的手写本</div>
            <p className="lx-footer-note">
              笔记、博客、书架与一页简历。内容还在长，设计也还在改。
              如果哪段文字帮到了你，那就够了。
            </p>
            <div style={{ marginTop: 12 }}>
              <Clock />
            </div>
          </div>

          <div>
            <div className="lx-footer-h">目录</div>
            <div className="lx-footer-links">
              <a href="/note/">学习笔记</a>
              <a href="/blog/">技术博客</a>
              <a href="/read/">看看书</a>
              <a href="/resume">在线简历</a>
            </div>
          </div>

          <div>
            <div className="lx-footer-h">别处</div>
            <div className="lx-footer-links">
              <a href="https://github.com/lkzwc" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://rspress.dev/zh/" target="_blank" rel="noreferrer">
                RSPress ↗
              </a>
              <a href="#top">回到顶部 ↑</a>
            </div>
          </div>
        </div>

        <div className="lx-footer-bottom">
          <a className="lx-wordmark" href="/" aria-label="FEDDU 首页">
            <span aria-hidden="true">&gt;</span> FEDDU
          </a>
          <span>© {new Date().getFullYear()} LKZWC</span>
          <span>Build · Write · Repeat</span>
        </div>
      </div>
    </footer>
  );
}
