import React, { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------- Arrow */
export function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/* ---------------------------------------------------------------- Clock */
function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export function Clock({ withDate = false }: { withDate?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  // 用 UTC+8 手动换算，避免不同环境时区差异
  let time = "--:--:--";
  let date = "";
  if (now) {
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const d = new Date(utc + 8 * 3600000);
    time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    date = `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
  }

  return (
    <div>
      <div className="lx-clock" suppressHydrationWarning>
        {time}
        <small>UTC+8</small>
      </div>
      {withDate && (
        <div
          className="lx-kicker"
          style={{ marginTop: 8, letterSpacing: "0.14em" }}
          suppressHydrationWarning
        >
          {date || "—"}
        </div>
      )}
    </div>
  );
}

export function SectionHead({
  label,
  title,
  link,
  linkText,
}: {
  label: string;
  title: React.ReactNode;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="lx-section-head">
      <div>
        <div className="lx-kicker">{label}</div>
        <h2 className="lx-section-title">{title}</h2>
      </div>
      {link && (
        <a className="lx-section-link" href={link}>
          {linkText || "全部"} ↗
        </a>
      )}
    </div>
  );
}

/* -------------------------------------------------------- Scroll reveal */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  [key: string]: any;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 只在「首屏之外」才隐藏，避免首屏元素闪一下，也保证无 JS 时内容可见
    if (reduce || !("IntersectionObserver" in window)) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94) return;

    setHidden(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      {...rest}
      style={{
        ...(hidden
          ? {
              opacity: shown ? 1 : 0,
              transform: shown ? "none" : "translateY(14px)",
              transition: `opacity .75s cubic-bezier(.22,1,.36,1) ${delay}ms, transform .75s cubic-bezier(.22,1,.36,1) ${delay}ms`,
            }
          : null),
        ...(rest.style || {}),
      }}
    >
      {children}
    </Tag>
  );
}
