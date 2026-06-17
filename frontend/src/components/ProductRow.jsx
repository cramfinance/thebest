import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProductRow({ product, index, sectionPath }) {
  const stats = Object.entries(product.stats).slice(0, 3);
  return (
    <Link
      to={`${sectionPath}/${product.slug}`}
      data-testid={`product-row-${product.slug}`}
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 28,
        alignItems: "center",
        padding: "28px",
        borderRadius: 28,
        background: index === 0 ? "linear-gradient(135deg, #fffdf7 0%, var(--emerald-soft) 130%)" : "var(--bg-elev)",
        border: `1px solid ${index === 0 ? "rgba(15, 107, 79, 0.25)" : "var(--line)"}`,
        transition: "all 0.3s var(--ease)",
        position: "relative",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
        e.currentTarget.style.borderColor = "var(--line-strong)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = index === 0 ? "rgba(15, 107, 79, 0.25)" : "var(--line)";
      }}
      className="product-row"
    >
      {/* Rank numeral */}
      <div
        style={{
          fontFamily: "Fraunces, serif",
          fontStyle: "italic",
          fontSize: 64,
          lineHeight: 0.9,
          color: index === 0 ? "var(--emerald)" : "var(--line-strong)",
          width: 80,
          textAlign: "center",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
          <h3
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "var(--t1)",
            }}
          >
            {product.name}
          </h3>
          {product.tags?.map((t, i) => (
            <span key={i} className={`tag ${i === 0 ? "tag--emerald" : "tag--outline"}`}>
              {t}
            </span>
          ))}
        </div>
        <p style={{ color: "var(--t2)", fontSize: 15, marginBottom: 14, marginTop: 0 }}>{product.tagline}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px" }}>
          {product.bullets.map((b, i) => (
            <span
              key={i}
              style={{
                position: "relative",
                paddingLeft: 18,
                fontSize: 13.5,
                color: "var(--t3)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 7,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--emerald-2)",
                }}
              />
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--t3)" }}>
            Match score
          </span>
          <span
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: 36,
              color: index === 0 ? "var(--emerald)" : "var(--t1)",
              lineHeight: 1,
              marginTop: 4,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {product.score}
            <span style={{ fontSize: 16, color: "var(--t3)" }}>/100</span>
          </span>
        </div>
        <span
          className="btn btn--sm btn--ghost"
          style={{ pointerEvents: "none" }}
        >
          See details <ArrowUpRight size={14} />
        </span>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .product-row { grid-template-columns: 64px 1fr !important; gap: 16px !important; padding: 20px !important; }
          .product-row > div:nth-child(1) { font-size: 44px !important; width: 64px !important; }
          .product-row > div:nth-child(3) { grid-column: 1 / -1 !important; flex-direction: row !important; justify-content: space-between !important; align-items: center !important; }
        }
      `}</style>
    </Link>
  );
}
