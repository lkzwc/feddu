import React, { useState } from 'react';

interface PasswordProtectorProps {
  children: React.ReactNode;
  password: string;
}

const PasswordProtector: React.FC<PasswordProtectorProps> = ({ children, password }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 检查本地存储中是否已有认证
  React.useEffect(() => {
    const storedAuth = localStorage.getItem('contentAuthenticated');
    if (storedAuth === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 模拟验证延迟，增加真实感
    setTimeout(() => {
      if (inputPassword === password) {
        setAuthenticated(true);
        localStorage.setItem('contentAuthenticated', 'true');
      } else {
        setError('密码不正确，请重试');
        setInputPassword('');
        setTimeout(() => setError(''), 3000);
      }
      setIsLoading(false);
    }, 800);
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="lx-gate">
      <div className="lx-gate-card">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
          <svg width="40" height="40" viewBox="0 0 46 46" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="44" height="44" rx="2.2" fill="var(--lx-accent)" />
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
        </div>

        <div className="lx-kicker" style={{ justifyContent: "center" }}>
          Protected / 受保护内容
        </div>

        <h2
          style={{
            fontFamily: "var(--lx-serif)",
            fontSize: 30,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "14px 0 10px",
            color: "var(--lx-ink)",
          }}
        >
          这页需要一把钥匙
        </h2>

        <p style={{ fontSize: 13, color: "var(--lx-ink-3)", marginBottom: 26 }}>
          输入访问密码后继续
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="· · · · · ·"
            autoFocus
            disabled={isLoading}
          />

          {error && (
            <div
              className="animate-shake"
              style={{
                marginTop: 16,
                fontFamily: "var(--lx-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                color: "var(--lx-accent)",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !inputPassword.trim()}
            className="lx-btn"
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: 22,
              ...(isLoading || !inputPassword.trim()
                ? {
                    background: "transparent",
                    color: "var(--lx-ink-3)",
                    borderColor: "var(--lx-rule-strong)",
                    boxShadow: "none",
                    cursor: "not-allowed",
                  }
                : null),
            }}
          >
            {isLoading ? "验证中…" : "解锁"}
          </button>
        </form>

        <div style={{ marginTop: 26, display: "flex", justifyContent: "space-between" }}>
          <a
            href="/"
            style={{
              fontFamily: "var(--lx-mono)",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--lx-ink-3)",
            }}
          >
            ← 返回首页
          </a>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("contentAuthenticated");
              setError("");
              setInputPassword("");
            }}
            style={{
              fontFamily: "var(--lx-mono)",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--lx-ink-3)",
              background: "none",
              border: 0,
              cursor: "pointer",
            }}
          >
            清除缓存
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtector;
