import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import LiveApy from "../components/LiveApy";
import BankMarquee from "../components/BankMarquee";
import { useState } from "react";

const faq = [
  { q: "Is CRAM Finance really free?", a: "Yes, completely. We earn through affiliate partnerships, which never affects our rankings or which products we recommend." },
  { q: "How do you choose what to recommend?", a: "We score accounts on fees, ATM access, student perks, mobile UX and ease of use — not on commission size." },
  { q: "Do I have to be a college student?", a: "Not at all. We focus on students, but anyone who wants a simple, honest comparison is welcome." },
  { q: "Will signing up affect my credit score?", a: "Opening a bank account is usually a soft inquiry. Credit cards may involve a hard pull — we'll flag this on every card we recommend." },
];

export default function Home() {
  return (
    <main data-testid="page-home">
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "140px 0 80px",
          overflow: "hidden",
        }}
        className="noise-overlay"
      >
        <div
          style={{
            position: "absolute",
            inset: "-20% -10% auto auto",
            width: 640,
            height: 640,
            background: "radial-gradient(closest-side, rgba(20, 163, 122, 0.25), transparent 70%)",
            filter: "blur(12px)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div className="hero-content">
            <span className="eyebrow">Student finance, simplified</span>
            <h1
              style={{
                fontSize: "clamp(46px, 6vw, 80px)",
                lineHeight: 0.98,
                margin: "26px 0 22px",
                letterSpacing: "-0.03em",
              }}
            >
              The right bank account,{" "}
              <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>in five minutes</em>.
            </h1>
            <p style={{ fontSize: 18.5, color: "var(--t2)", maxWidth: 560, marginBottom: 32, lineHeight: 1.55 }}>
              CRAM Finance compares the best student bank accounts, budgeting apps and credit cards — so you don't have
              to. No ads. No bias. Just clear answers.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
              <Link to="/accounts" className="btn btn--primary" data-testid="hero-cta-accounts">
                Compare bank accounts <ArrowRight size={16} className="arrow" />
              </Link>
              <Link to="/apps" className="btn btn--ghost" data-testid="hero-cta-apps">
                Explore money apps
              </Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 28, color: "var(--t3)", fontSize: 14 }}>
              <Stat label="monthly fees" value="$0" />
              <Stat label="products reviewed" value="40+" />
              <Stat label="free, always" value="100%" />
            </div>
          </div>

          {/* Right visual */}
          <div style={{ position: "relative", minHeight: 540 }} className="hero-visual">
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "min(360px, 100%)",
                transform: "rotate(2deg)",
              }}
            >
              <LiveApy />
            </div>

            {/* Editor's pick card */}
            <div
              style={{
                position: "absolute",
                left: -10,
                top: 250,
                width: 320,
                background: "var(--bg-elev)",
                border: "1px solid var(--line)",
                borderRadius: 28,
                padding: 24,
                boxShadow: "var(--shadow-lg)",
                transform: "rotate(-3deg)",
              }}
            >
              <span className="tag tag--gold">Editor's pick</span>
              <h3
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: 19,
                  fontWeight: 600,
                  marginTop: 14,
                  marginBottom: 16,
                }}
              >
                Chase College Checking
              </h3>
              <Row k="Monthly fee" v="$0" />
              <Row k="Sign-up bonus" v="$100" />
              <Row k="ATM network" v="16,000+" />
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="font-mono" style={{ fontSize: 11, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Match score
                </span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 30, color: "var(--emerald)" }}>96<span style={{ fontSize: 14, color: "var(--t3)" }}>/100</span></span>
              </div>
            </div>

            {/* small floating chip */}
            <div
              style={{
                position: "absolute",
                left: 240,
                bottom: 20,
                background: "var(--ink-deep)",
                color: "var(--t-on-dark)",
                padding: "10px 16px",
                borderRadius: 999,
                fontSize: 13,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "var(--shadow)",
              }}
            >
              <span className="live-dot" /> 3 new picks today
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1000px) {
            .hero-visual { display: none !important; }
            .hero-content { text-align: left; }
          }
        `}</style>
      </section>

      <BankMarquee />

      {/* WHY */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <span className="eyebrow">Why CRAM</span>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 54px)", marginTop: 20, marginBottom: 16 }}>
              Banking shouldn't be a <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>research project</em>.
            </h2>
            <p style={{ fontSize: 17, color: "var(--t2)" }}>
              Most students pick a bank because their parents use it, or because a $100 bonus caught their eye. We show
              you the real trade-offs — fees, ATM access, perks — in plain English.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
            className="pillars-grid"
          >
            <Pillar n="01" t="Real comparisons" d="Side-by-side breakdowns of the fees, perks and limits that actually matter to a student budget." />
            <Pillar n="02" t="Student-first picks" d="Every recommendation is filtered through the lens of campus life — no commission incentives." />
            <Pillar n="03" t="Always free" d='No paywalls, no subscriptions, no "premium tier." CRAM Finance is free to use, always.' />
          </div>
        </div>
        <style>{`@media (max-width: 800px){ .pillars-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* TOP PICKS */}
      <section style={{ padding: "80px 0", background: "var(--bg-warm)" }} className="noise-overlay">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
            <div style={{ maxWidth: 600 }}>
              <span className="eyebrow">Top picks this month</span>
              <h2 style={{ fontSize: "clamp(34px, 3.6vw, 50px)", marginTop: 20, marginBottom: 14 }}>
                The two accounts most students should start with.
              </h2>
              <p style={{ fontSize: 16, color: "var(--t2)" }}>
                We compared 40+ accounts on fees, ATM reach, sign-up bonuses, mobile UX and student perks. Two stood
                out as a near-universal fit.
              </p>
            </div>
            <Link to="/accounts" className="btn btn--ghost" data-testid="picks-cta-all">
              See all top accounts <ArrowRight size={15} className="arrow" />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="top-picks-grid">
            <PickCard
              slug="chase-college-checking"
              label="Editor's pick"
              name="Chase College Checking"
              detail="No monthly fee · $100 bonus · 16,000+ ATMs"
              tag="Best all-rounder"
            />
            <PickCard
              slug="sofi-checking-savings"
              label="Free & online"
              name="SoFi Checking & Savings"
              detail="No fees · 4.60% APY · Early payday"
              tag="Best digital pick"
              highlight
            />
          </div>
        </div>
        <style>{`@media (max-width: 800px){ .top-picks-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* STAT STRIP */}
      <section style={{ background: "var(--ink-deep)", color: "var(--t-on-dark)", padding: "0", overflow: "hidden" }} className="noise-overlay">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              padding: "0",
            }}
            className="stat-strip"
          >
            <StatCell big="$0" label="Monthly fees on every top pick we recommend." />
            <StatCell big={<><em style={{ fontStyle: "italic", color: "var(--emerald-2)" }}>5</em> min</>} label="Average time to find an account that fits your life." />
            <StatCell big="40+" label="Accounts, cards and apps reviewed by students, for students." last />
          </div>
        </div>
        <style>{`@media (max-width: 800px){ .stat-strip { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 0" }}>
        <div className="container-narrow">
          <span className="eyebrow">FAQ</span>
          <h2 style={{ fontSize: "clamp(34px, 3.6vw, 50px)", marginTop: 20, marginBottom: 36 }}>Quick answers.</h2>
          <Faq items={faq} />
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div
            className="noise-overlay"
            style={{
              background: "var(--ink-deep)",
              borderRadius: 32,
              padding: "clamp(48px, 7vw, 96px)",
              textAlign: "center",
              color: "var(--t-on-dark)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "auto auto -50% -10%",
                width: 480,
                height: 480,
                borderRadius: "50%",
                background: "radial-gradient(closest-side, rgba(20, 163, 122, 0.35), transparent)",
                filter: "blur(10px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-50% -10% auto auto",
                width: 380,
                height: 380,
                borderRadius: "50%",
                background: "radial-gradient(closest-side, rgba(255, 209, 102, 0.3), transparent)",
                filter: "blur(10px)",
              }}
            />
            <div style={{ position: "relative" }}>
              <span className="eyebrow" style={{ background: "rgba(244, 241, 232, 0.1)", color: "var(--gold)", borderColor: "rgba(255, 209, 102, 0.3)" }}>
                Ready when you are
              </span>
              <h2 style={{ fontSize: "clamp(34px, 5vw, 64px)", color: "var(--t-on-dark)", marginTop: 22, marginBottom: 14 }}>
                Find your account in <em style={{ fontStyle: "italic", color: "var(--gold)" }}>five minutes</em>.
              </h2>
              <p style={{ color: "var(--t-on-dark-2)", marginBottom: 32, fontSize: 17, maxWidth: 540, margin: "0 auto 32px" }}>
                No sign-up. No spam. Just clear picks for your campus life.
              </p>
              <Link to="/accounts" className="btn btn--gold" data-testid="bottom-cta">
                Compare accounts <ArrowRight size={16} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <span>
      <strong style={{ color: "var(--t1)", fontWeight: 600 }}>{value}</strong>{" "}
      <span className="font-mono" style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--t3)" }}>
        {label}
      </span>
    </span>
  );
}

function Row({ k, v }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "9px 0",
        borderTop: "1px solid var(--line)",
        fontSize: 14,
        color: "var(--t2)",
      }}
    >
      <span>{k}</span>
      <span className="font-mono" style={{ color: "var(--t1)", fontWeight: 500 }}>{v}</span>
    </div>
  );
}

function Pillar({ n, t, d }) {
  return (
    <div className="card-base" style={{ padding: 32 }}>
      <span
        className="font-mono"
        style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--emerald)", textTransform: "uppercase" }}
      >
        {n}
      </span>
      <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: 22, fontWeight: 600, margin: "16px 0 10px", color: "var(--t1)" }}>{t}</h3>
      <p style={{ fontSize: 15, color: "var(--t2)", margin: 0, lineHeight: 1.6 }}>{d}</p>
    </div>
  );
}

function PickCard({ slug, label, name, detail, tag, highlight }) {
  return (
    <Link
      to={`/accounts/${slug}`}
      data-testid={`top-pick-${slug}`}
      className="card-base"
      style={{
        padding: 32,
        display: "block",
        background: highlight ? "linear-gradient(135deg, #fffdf7 0%, var(--emerald-soft) 100%)" : "var(--bg-elev)",
      }}
    >
      <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--emerald)", textTransform: "uppercase" }}>
        {label}
      </span>
      <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 32, marginTop: 12, marginBottom: 10, color: "var(--t1)" }}>
        {name}
      </h3>
      <p style={{ color: "var(--t2)", marginBottom: 20, fontSize: 15 }}>{detail}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="tag tag--soft">{tag}</span>
        <ArrowUpRight size={20} color="var(--emerald)" />
      </div>
    </Link>
  );
}

function StatCell({ big, label, last }) {
  return (
    <div style={{ padding: "56px 32px", borderRight: last ? "none" : "1px solid rgba(244, 241, 232, 0.12)" }}>
      <div style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1, color: "var(--t-on-dark)", marginBottom: 14 }}>{big}</div>
      <div style={{ color: "var(--t-on-dark-2)", fontSize: 15, maxWidth: 280, lineHeight: 1.5 }}>{label}</div>
    </div>
  );
}

function Faq({ items }) {
  const [open, setOpen] = useState(-1);
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} style={{ borderTop: "1px solid var(--line)", ...(i === items.length - 1 ? { borderBottom: "1px solid var(--line)" } : {}) }}>
          <button
            data-testid={`faq-q-${i}`}
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "24px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: 18,
              fontWeight: 500,
              color: "var(--t1)",
            }}
          >
            <span>{it.q}</span>
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "var(--emerald-soft)",
                color: "var(--emerald)",
                display: "grid",
                placeItems: "center",
                fontSize: 18,
                transform: open === i ? "rotate(45deg)" : "rotate(0)",
                transition: "transform 0.25s var(--ease)",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? 220 : 0,
              overflow: "hidden",
              transition: "max-height 0.3s var(--ease), padding 0.25s var(--ease)",
              color: "var(--t2)",
              fontSize: 16,
              paddingBottom: open === i ? 24 : 0,
            }}
          >
            {it.a}
          </div>
        </div>
      ))}
    </div>
  );
}
