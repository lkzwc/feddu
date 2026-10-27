import React, { useEffect, useRef } from "react";
import { usePageData } from "rspress/runtime";

/**
 * 全局装饰层：纸纹、跟随光标、阅读进度线。
 * 通过 Layout 的 top 插槽注入，不参与任何布局。
 */
export default function GlobalChrome() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const { page } = usePageData();

  /* 光标 */
  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let raf = 0;
    let started = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px)`;
      if (!started) {
        started = true;
        ring.style.opacity = "0.35";
        dot.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hot = t?.closest?.(
        "a, button, [role='button'], input, textarea, summary, .lx-tile, .lx-index-item"
      );
      ring.classList.toggle("is-hover", !!hot);
    };

    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      ring.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* 阅读进度 */
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 40 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${p})`;
      bar.style.opacity = p > 0.005 ? "1" : "0";
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [page?.routePath]);

  return (
    <>
      <div className="lx-grain" aria-hidden="true" />
      <div
        className="lx-progress"
        ref={barRef}
        aria-hidden="true"
        style={{ width: "100%", opacity: 0, transform: "scaleX(0)" }}
      />
      <div
        className="lx-cursor"
        ref={ringRef}
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
      <div
        className="lx-cursor-dot"
        ref={dotRef}
        aria-hidden="true"
        style={{ opacity: 0 }}
      />
    </>
  );
}
