import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X } from "lucide-react";
import { glossary } from "../data/glossary";

/**
 * Inline glossary card for list pages.
 * - Eyebrow + title + short intro
 * - Pill chips of every term (clickable)
 * - Click a term → smoothly expands a panel with the full definition
 * - Click again or X → collapses
 */
export default function Glossary({ section, headline }) {
  const terms = glossary[section] || [];
  const [active, setActive] = useState(null);

  const current = active != null ? terms[active] : null;

  return (
    <section
      data-testid={`glossary-${section}`}
      className="card-base"
      style={{
        padding: "clamp(24px, 3vw, 36px)",
        marginBottom: 36,
        background: "linear-gradient(135deg, var(--bg-elev) 0%, var(--emerald-soft) 220%)",
        borderColor: "rgba(15, 107, 79, 0.18)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap", marginBottom: 18 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", minWidth: 0, flex: "1 1 280px" }}>
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "var(--emerald-deep)",
              color: "var(--gold)",
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
          >
            <BookOpen size={20} />
          </span>
          <div>
            <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--emerald)" }}>
              Glossary · {terms.length} terms
            </span>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(22px, 2.4vw, 30px)", marginTop: 6, marginBottom: 0, lineHeight: 1.15 }}>
              {headline}
            </h3>
          </div>
        </div>
      </div>

      <p style={{ color: "var(--t2)", fontSize: 14.5, marginBottom: 18, marginTop: 0, maxWidth: 640 }}>
        Tap any term to see what it means. No finance degree required.
      </p>

      {/* Chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {terms.map((t, i) => {
          const isActive = active === i;
          return (
            <button
              key={t.term}
              data-testid={`glossary-term-${t.term.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setActive(isActive ? null : i)}
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: 13.5,
                fontWeight: 500,
                padding: "8px 14px",
                borderRadius: 999,
                border: `1px solid ${isActive ? "var(--emerald)" : "var(--line-strong)"}`,
                background: isActive ? "var(--emerald-deep)" : "var(--bg-elev)",
                color: isActive ? "var(--gold)" : "var(--t1)",
                cursor: "pointer",
                transition: "all 0.18s var(--ease)",
                whiteSpace: "nowrap",
                boxShadow: isActive ? "0 6px 14px -6px rgba(6, 43, 33, 0.4)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "var(--emerald)";
                  e.currentTarget.style.color = "var(--emerald-deep)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "var(--line-strong)";
                  e.currentTarget.style.color = "var(--t1)";
                }
              }}
            >
              {t.term}
            </button>
          );
        })}
      </div>

      {/* Definition panel */}
      <AnimatePresence initial={false}>
        {current && (
          <motion.div
            key={current.term}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 22 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                background: "var(--ink-deep)",
                color: "var(--t-on-dark)",
                borderRadius: 18,
                padding: "22px 24px",
                position: "relative",
              }}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close definition"
                data-testid="glossary-close"
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(244, 241, 232, 0.08)",
                  color: "var(--t-on-dark-2)",
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                  transition: "all 0.15s var(--ease)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(244, 241, 232, 0.18)"; e.currentTarget.style.color = "var(--t-on-dark)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(244, 241, 232, 0.08)"; e.currentTarget.style.color = "var(--t-on-dark-2)"; }}
              >
                <X size={14} />
              </button>

              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8, paddingRight: 36, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 26, color: "var(--gold)", lineHeight: 1.15 }}>
                  {current.term}
                </span>
                <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--t-on-dark-2)" }}>
                  {current.short}
                </span>
              </div>
              <p style={{ color: "var(--t-on-dark)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                {current.def}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
