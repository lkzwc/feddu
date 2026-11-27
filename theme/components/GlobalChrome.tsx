import React, { useEffect, useRef } from "react";
import { usePageData } from "rspress/runtime";

export default function GlobalChrome() {
  const barRef = useRef<HTMLDivElement>(null);
  const { page } = usePageData();

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
    <div
      className="lx-progress"
      ref={barRef}
      aria-hidden="true"
      style={{ width: "100%", opacity: 0, transform: "scaleX(0)" }}
    />
  );
}
