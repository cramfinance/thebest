import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Compare() {
  return (
    <main data-testid="page-compare" style={{ padding: "140px 0 100px" }}>
      <section
        style={{
          textAlign: "center",
          padding: "60px 24px 80px",
          background: "var(--ink-deep)",
          color: "var(--t-on-dark)",
          borderRadius: 32,
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
        className="noise-overlay"
      >
        <div
          style={{
            position: "absolute",
            inset: "auto auto -40% 50%",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(closest-side, rgba(255, 209, 102, 0.22), transparent 70%)",
            filter: "blur(12px)",
            transform: "translateX(-50%)",
          }}
        />
        <span className="tag tag--gold" style={{ marginBottom: 22 }}>Coming Soon</span>
        <h1
          className="shimmer"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 800,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            fontSize: "clamp(38px, 7vw, 86px)",
            lineHeight: 1,
            margin: "0 auto 22px",
            position: "relative",
            maxWidth: 880,
          }}
        >
          Complex Comparison Tool Coming Soon
        </h1>
        <p style={{ color: "var(--t-on-dark-2)", maxWidth: 600, margin: "0 auto", fontSize: 18, position: "relative" }}>
          But in the meantime, we've mapped out your quick entry guides below to help you jump right into the top picks.
        </p>
      </section>

      <section className="container" style={{ marginTop: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="compare-grid">
          <Card title="Best checking picks" desc="Compare fee-free student accounts, ATM access and sign-up perks for campus life." cta="Read the guide" to="/accounts?tab=checking" />
          <Card title="Best budgeting apps" desc="See which apps actually help students track spending, save automatically and stay on top of bills." cta="See apps" to="/apps?tab=budgeting" />
          <Card title="Best finance apps" desc="Beyond budgeting — compare apps for savings, bill splitting and student financial planning." cta="Explore apps" to="/apps?tab=finance" />
        </div>
      </section>

      <section className="container" style={{ marginTop: 100, maxWidth: 760 }}>
        <span className="eyebrow">How to choose</span>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: 22, marginBottom: 18 }}>
          Pick tools based on your <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>goals</em>, not the brand name.
        </h2>
        <p style={{ fontSize: 17, color: "var(--t2)", lineHeight: 1.6 }}>
          Checking accounts handle everyday spending. Savings build your emergency fund. Budgeting apps keep your
          semester on track. Credit cards only make sense if you can pay your balance on time.
        </p>
      </section>

      <style>{`@media (max-width: 900px){ .compare-grid { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  );
}

function Card({ title, desc, cta, to }) {
  return (
    <Link to={to} className="card-base" style={{ padding: 32, display: "block" }} data-testid={`compare-card-${to.replace(/\W+/g, "-")}`}>
      <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 28, marginBottom: 12 }}>{title}</h3>
      <p style={{ color: "var(--t2)", fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>{desc}</p>
      <span style={{ color: "var(--emerald)", fontWeight: 500, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
        {cta} <ArrowRight size={15} className="arrow" />
      </span>
    </Link>
  );
}
