import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/accounts", label: "Accounts" },
  { to: "/apps", label: "Money apps" },
  { to: "/cards", label: "Credit cards" },
  { to: "/compare", label: "Compare" },
  { to: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      data-testid="nav-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 76,
        background: scrolled
          ? "rgba(245, 242, 234, 0.85)"
          : "rgba(245, 242, 234, 0.0)",
        backdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all 0.25s var(--ease)",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" data-testid="nav-logo" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: "var(--ink-deep)",
              color: "var(--gold)",
              display: "grid",
              placeItems: "center",
              fontFamily: "Fraunces, serif",
              fontStyle: "italic",
              fontSize: 22,
              fontWeight: 500,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            c
          </span>
          <span style={{ fontFamily: "Fraunces, serif", fontSize: 22, letterSpacing: "-0.01em", color: "var(--t1)" }}>
            cram<span style={{ color: "var(--emerald)" }}>.</span>finance
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="nav-links-desktop">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.to.slice(1)}`}
              style={({ isActive }) => ({
                fontSize: 14.5,
                padding: "9px 16px",
                borderRadius: 999,
                color: isActive ? "var(--emerald-deep)" : "var(--t2)",
                background: isActive ? "var(--emerald-soft)" : "transparent",
                fontWeight: isActive ? 500 : 400,
                transition: "all 0.15s var(--ease)",
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link
            to="/contact"
            data-testid="nav-cta-contact"
            className="btn btn--primary btn--sm nav-cta-desktop"
          >
            Get in touch
          </Link>
          <button
            data-testid="nav-burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="nav-burger"
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              border: "1px solid var(--line)",
              background: "var(--bg-elev)",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          style={{
            position: "absolute",
            top: 76,
            left: 0,
            right: 0,
            background: "var(--bg-elev)",
            borderBottom: "1px solid var(--line)",
            padding: "12px 16px 20px",
            boxShadow: "var(--shadow)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{ display: "block", padding: "14px 12px", borderBottom: "1px solid var(--line)", fontSize: 16 }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn--primary" style={{ marginTop: 14, width: "100%" }}>
            Get in touch
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
