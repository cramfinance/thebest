import { useEffect, useState } from "react";
import { apyFeed, jitter } from "../data/apy";

export default function LiveApy() {
  const [rates, setRates] = useState(() => apyFeed.map((r) => ({ ...r, value: r.base.toFixed(2) })));

  useEffect(() => {
    const id = setInterval(() => {
      setRates((prev) =>
        prev.map((r) => ({
          ...r,
          value: jitter(r.base),
        }))
      );
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      data-testid="live-apy-widget"
      style={{
        background: "var(--ink-deep)",
        borderRadius: 28,
        padding: "26px 28px",
        color: "var(--t-on-dark)",
        boxShadow: "var(--shadow-lg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-40% -10% auto auto",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, rgba(255, 209, 102, 0.22), transparent 70%)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="live-dot" />
          <span
            className="font-mono"
            style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--t-on-dark-2)" }}
          >
            Live · High-Yield Savings
          </span>
        </div>
        <span className="font-mono" style={{ fontSize: 11, color: "rgba(168, 184, 180, 0.6)" }}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative" }}>
        {rates.map((r) => (
          <div
            key={r.name}
            style={{
              display: "grid",
              gridTemplateColumns: "12px 1fr auto",
              alignItems: "center",
              gap: 14,
              paddingBottom: 12,
              borderBottom: "1px solid rgba(244, 241, 232, 0.08)",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 3,
                background: r.hue,
                boxShadow: `0 0 14px ${r.hue}66`,
              }}
            />
            <span style={{ color: "var(--t-on-dark)", fontSize: 14.5 }}>{r.name}</span>
            <span
              className="font-mono"
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "var(--gold)",
                transition: "all 0.4s var(--ease)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {r.value}%
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 8, fontSize: 12, color: "rgba(168, 184, 180, 0.55)" }}>
        Simulated stream · refreshes every ~2s · APYs subject to change
      </div>
    </div>
  );
}
