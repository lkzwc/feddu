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

/* -------------------------------------------------------------- Marquee */
export function Marquee({ items }: { items: React.ReactNode[] }) {
  const row = (
    <div className="lx-marquee-track">
      {[0, 1].map((k) => (
        <div key={k} style={{ display: "flex" }} aria-hidden={k === 1}>
          {items.map((it, i) => (
            <span className="lx-marquee-item" key={i}>
              {it}
              <i>✳</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
  return <div className="lx-marquee">{row}</div>;
}

/* ----------------------------------------------------------------- Seal */
export function Seal({ size = 44 }: { size?: number }) {
  return (
    <span className="lx-seal" aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 46 46" fill="none">
        <rect x="1" y="1" width="44" height="44" rx="2.2" fill="currentColor" />
        <text
          x="23"
          y="31.5"
          textAnchor="middle"
          fontFamily="'Instrument Serif','Songti SC',Georgia,serif"
          fontSize="20"
          fontStyle="italic"
          letterSpacing="-1"
          fill="var(--lx-paper)"
        >
          LK
        </text>
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------ Scribble */
export function Scribble({ width = 260 }: { width?: number }) {
  return (
    <svg
      className="lx-underline"
      viewBox="0 0 260 14"
      preserveAspectRatio="none"
      style={{ width }}
      aria-hidden="true"
    >
      <path d="M2 9.5C42 3.5 86 2.5 128 5.5c38 2.7 82 3.4 130 1.2" />
    </svg>
  );
}

/* --------------------------------------------------------- SectionHead */
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

/* ------------------------------------------------------------- Blobs */
export function Blobs() {
  return (
    <div className="lx-blobs" aria-hidden="true">
      <span className="lx-blob lx-blob--1" />
      <span className="lx-blob lx-blob--2" />
      <span className="lx-blob lx-blob--3" />
    </div>
  );
}

/* ---------------------------------------------------------- Sparkles */
export function Sparkle({
  size = 18,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className="lx-spark"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0l2.1 9.9L24 12l-9.9 2.1L12 24l-2.1-9.9L0 12l9.9-2.1z" />
    </svg>
  );
}

/* ----------------------------------------------------------- Sticker */
export function Sticker({
  text = "保持好奇 · KEEP BUILDING · ",
}: {
  text?: string;
}) {
  return (
    <div className="lx-sticker" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path
            id="lx-sticker-path"
            d="M60,60 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0"
          />
        </defs>
        <circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.28"
        />
        <text
          fill="currentColor"
          fontSize="9"
          fontFamily="var(--lx-mono)"
          textLength="256"
          lengthAdjust="spacing"
        >
          <textPath href="#lx-sticker-path">
            {text + text}
          </textPath>
        </text>
        <path
          d="M60 43l3.6 13.4L77 60l-13.4 3.6L60 77l-3.6-13.4L43 60l13.4-3.6z"
          fill="var(--lx-accent)"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------- Memphis shapes */
export function MemphisShapes() {
  return (
    <div className="lx-shapes" aria-hidden="true">
      <span className="lx-shape lx-shape--squiggle">
        <svg viewBox="0 0 132 44">
          <path
            d="M6 32c9-25 21-25 29 0s20 25 29 0 20-25 29 0c5 9 12 11 20 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="lx-shape lx-shape--star">
        <svg viewBox="0 0 54 54">
          <path
            d="M27 3l6.2 17.6L51 27l-17.8 6.4L27 51l-6.2-17.6L3 27l17.8-6.4z"
            fill="#FF5A5F"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="lx-shape lx-shape--plus">
        <svg viewBox="0 0 40 40">
          <path
            d="M20 5v30M5 20h30"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="lx-shape lx-shape--triangle">
        <svg viewBox="0 0 56 56">
          <path
            d="M28 6l24 44H4z"
            fill="#2E5BE6"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="lx-shape lx-shape--circle">
        <svg viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="26"
            fill="#FF8DB5"
            stroke="currentColor"
            strokeWidth="3.5"
          />
        </svg>
      </span>

      <span className="lx-shape lx-shape--zigzag">
        <svg viewBox="0 0 110 40">
          <path
            d="M4 32l17-24 17 24 17-24 17 24 17-24"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="lx-shape lx-shape--dots">
        <svg viewBox="0 0 62 62">
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <circle
                key={`${r}-${c}`}
                cx={10 + c * 21}
                cy={10 + r * 21}
                r="5"
                fill="#FFC93C"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            ))
          )}
        </svg>
      </span>


    </div>
  );
}
