import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X } from "lucide-react";
import { glossary } from "../data/glossary";

/**
 * Compact, opt-in glossary.
 * Default state: small "Terms to know" button (top-right of heading row).
 * Click → expands the full glossary card inline below the heading.
 * Click any term → smooth definition panel opens inside the card.
 */
export default function Glossary({ section }) {
  const terms = glossary[section] || [];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const current = active != null ? terms[active] : null;

  return (
    <div data-testid={`glossary-${section}`} style={{ width: "100%" }}>
      {/* Trigger row — flush right */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: open ? 18 : 32 }}>
        <button
          data-testid={`glossary-trigger-${section}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 16px 10px 14px",
            borderRadius: 999,
            border: `1px solid ${open ? "var(--emerald)" : "var(--line-strong)"}`,
            background: open ? "var(--emerald-deep)" : "var(--bg-elev)",
            color: open ? "var(--gold)" : "var(--t1)",
            fontFamily: "Outfit, sans-serif",
            fontSize: 13.5,
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s var(--ease)",
            boxShadow: open ? "0 10px 24px -10px rgba(6, 43, 33, 0.4)" : "var(--shadow-sm)",
          }}
          onMouseEnter={(e) => {
            if (!open) e.currentTarget.style.borderColor = "var(--emerald)";
          }}
          onMouseLeave={(e) => {
            if (!open) e.currentTarget.style.borderColor = "var(--line-strong)";
          }}
        >
          <BookOpen size={15} />
          <span>{open ? "Hide terms" : "Terms to know"}</span>
          <span
            className="font-mono"
            style={{
              fontSize: 10.5,
              padding: "2px 7px",
              borderRadius: 999,
              background: open ? "rgba(244, 241, 232, 0.1)" : "var(--emerald-soft)",
              color: open ? "var(--gold)" : "var(--emerald)",
              letterSpacing: "0.05em",
            }}
          >
            {terms.length}
          </span>
        </button>
      </div>

      {/* Expandable card */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            key="glossary-panel"
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="card-base"
              style={{
                padding: "clamp(24px, 3vw, 36px)",
                background: "linear-gradient(135deg, var(--bg-elev) 0%, var(--emerald-soft) 220%)",
                borderColor: "rgba(15, 107, 79, 0.18)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap", marginBottom: 18 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", minWidth: 0 }}>
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
                    <span
                      className="font-mono"
                      style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--emerald)" }}
                    >
                      Key terms · {terms.length}
                    </span>
                    <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(22px, 2.4vw, 28px)", marginTop: 6, marginBottom: 0, lineHeight: 1.15 }}>
                      The lingo, decoded.
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close key terms"
                  data-testid="glossary-close"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid var(--line)",
                    background: "var(--bg-elev)",
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    color: "var(--t2)",
                  }}
                >
                  <X size={15} />
                </button>
              </div>

              <p style={{ color: "var(--t2)", fontSize: 14.5, marginBottom: 18, marginTop: 0, maxWidth: 620 }}>
                Tap any term for a plain-English definition. No finance degree required.
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
                        data-testid="glossary-def-close"
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
                        }}
                      >
                        <X size={14} />
                      </button>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8, paddingRight: 36, flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "Fraunces, serif", fontSize: 26, color: "var(--gold)", lineHeight: 1.15 }}>
                          {current.term}
                        </span>
                        <span
                          className="font-mono"
                          style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--t-on-dark-2)" }}
                        >
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
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
