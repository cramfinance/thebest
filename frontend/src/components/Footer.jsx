import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="noise-overlay"
      style={{
        background: "var(--ink-deep)",
        color: "var(--t-on-dark-2)",
        padding: "80px 0 32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 2fr",
            gap: 64,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(244, 241, 232, 0.08)",
          }}
          className="footer-top"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <img
                src={`${process.env.PUBLIC_URL || ""}/cram-logo.png`}
                alt="CRAM Finance"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  objectFit: "cover",
                  display: "block",
                  background: "var(--t-on-dark)",
                }}
              />
              <span
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: 26,
                  color: "var(--t-on-dark)",
                  letterSpacing: "-0.01em",
                }}
              >
                CRAM <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Finance</span>
              </span>
            </div>
            <p style={{ color: "var(--t-on-dark-2)", maxWidth: 360, fontSize: 15, lineHeight: 1.6 }}>
              The honest comparison for student banking, money apps, and starter credit cards. No commission incentives,
              ever.
            </p>
            <p style={{ marginTop: 28, fontSize: 13, color: "rgba(168, 184, 180, 0.7)" }}>
              <span className="font-mono" style={{ letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Made for students
              </span>
              <br />in dorms, libraries, and 24-hour diners.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}
            className="footer-cols"
          >
            <FooterCol
              title="Compare"
              links={[
                { to: "/accounts", label: "Bank accounts" },
                { to: "/apps", label: "Money apps" },
                { to: "/cards", label: "Credit cards" },
                { to: "/compare", label: "Side-by-side" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { to: "/about", label: "About CRAM" },
                { to: "/contact", label: "Contact" },
                { to: "/disclosure", label: "Disclosure" },
              ]}
            />
            <FooterCol
              title="Legal"
              links={[
                { to: "/privacy", label: "Privacy" },
                { to: "/terms", label: "Terms" },
              ]}
            />
          </div>
        </div>

        <div
          style={{
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 13,
            color: "rgba(168, 184, 180, 0.7)",
          }}
        >
          <span>© {new Date().getFullYear()} CRAM Finance. Not financial advice — just honest comparison.</span>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="mailto:thecramfinance@gmail.com" aria-label="Email" data-testid="footer-mail">
              <Mail size={18} />
            </a>
            <a href="https://www.instagram.com/cramfinance" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-cols { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4
        className="font-mono"
        style={{
          color: "var(--t-on-dark)",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          marginBottom: 18,
          fontWeight: 500,
        }}
      >
        {title}
      </h4>
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          style={{
            display: "block",
            padding: "7px 0",
            color: "var(--t-on-dark-2)",
            fontSize: 14.5,
            transition: "color 0.15s var(--ease)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t-on-dark-2)")}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
