import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X } from "lucide-react";
import { glossary } from "../data/glossary";

/**
 * Floating Glossary — a small bottom-right button on list pages.
 * Clicking it slides in a side drawer with chips + definitions.
 * Completely out of the reading flow unless someone needs it.
 */
export default function Glossary({ section }) {
  const terms = glossary[section] || [];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const current = active != null ? terms[active] : null;

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Floating trigger */}
      <button
        data-testid={`glossary-trigger-${section}`}
        onClick={() => setOpen(true)}
        aria-label="Open glossary"
        style={{
          position: "fixed",
          right: 22,
          bottom: 22,
          zIndex: 80,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 18px",
          borderRadius: 999,
          border: "1px solid rgba(255, 209, 102, 0.4)",
          background: "var(--ink-deep)",
          color: "var(--gold)",
          fontFamily: "Outfit, sans-serif",
          fontSize: 13.5,
          fontWeight: 500,
          letterSpacing: "-0.005em",
          cursor: "pointer",
          boxShadow: "0 14px 30px -10px rgba(6, 43, 33, 0.55), 0 0 0 1px rgba(244, 241, 232, 0.03)",
          transition: "all 0.18s var(--ease)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 22px 40px -12px rgba(6, 43, 33, 0.65), 0 0 0 1px rgba(255, 209, 102, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 14px 30px -10px rgba(6, 43, 33, 0.55), 0 0 0 1px rgba(244, 241, 232, 0.03)";
        }}
      >
        <BookOpen size={15} />
        <span>Glossary</span>
        <span
          className="font-mono"
          style={{
            fontSize: 10.5,
            color: "var(--t-on-dark-2)",
            padding: "2px 7px",
            borderRadius: 999,
            background: "rgba(244, 241, 232, 0.07)",
          }}
        >
          {terms.length}
        </span>
      </button>

      {/* Backdrop + drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(6, 23, 20, 0.4)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                zIndex: 110,
              }}
            />

            <motion.aside
              key="drawer"
              data-testid={`glossary-drawer-${section}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(440px, 100%)",
                background: "var(--bg-elev)",
                borderLeft: "1px solid var(--line)",
                boxShadow: "-30px 0 60px -20px rgba(6, 43, 33, 0.25)",
                zIndex: 115,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "26px 28px 18px",
                  borderBottom: "1px solid var(--line)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  flexShrink: 0,
                }}
              >
                <div>
                  <span
                    className="font-mono"
                    style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--emerald)" }}
                  >
                    Glossary · {terms.length} terms
                  </span>
                  <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 26, marginTop: 6, marginBottom: 0, lineHeight: 1.15 }}>
                    Quick definitions.
                  </h3>
                </div>
                <button
                  data-testid="glossary-drawer-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close glossary"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid var(--line)",
                    background: "var(--bg)",
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div style={{ flex: 1, overflowY: "auto", padding: "22px 28px 32px" }}>
                <p style={{ color: "var(--t2)", fontSize: 14, marginBottom: 18, marginTop: 0 }}>
                  Tap any term for a plain-English definition.
                </p>

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
                          fontSize: 13,
                          fontWeight: 500,
                          padding: "7px 13px",
                          borderRadius: 999,
                          border: `1px solid ${isActive ? "var(--emerald)" : "var(--line-strong)"}`,
                          background: isActive ? "var(--emerald-deep)" : "var(--bg)",
                          color: isActive ? "var(--gold)" : "var(--t1)",
                          cursor: "pointer",
                          transition: "all 0.18s var(--ease)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.term}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence initial={false}>
                  {current && (
                    <motion.div
                      key={current.term}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          background: "var(--ink-deep)",
                          color: "var(--t-on-dark)",
                          borderRadius: 16,
                          padding: "20px 22px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "Fraunces, serif", fontSize: 24, color: "var(--gold)", lineHeight: 1.15 }}>
                            {current.term}
                          </span>
                          <span
                            className="font-mono"
                            style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--t-on-dark-2)" }}
                          >
                            {current.short}
                          </span>
                        </div>
                        <p style={{ color: "var(--t-on-dark)", fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>
                          {current.def}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
