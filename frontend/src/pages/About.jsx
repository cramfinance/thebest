import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <main data-testid="page-about" style={{ padding: "140px 0 100px" }}>
      <section className="container">
        <span className="eyebrow">About</span>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)", marginTop: 22, marginBottom: 22, lineHeight: 0.98, maxWidth: 1000 }}>
          Built for students who don't have time to figure out <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>banking</em>.
        </h1>
        <p style={{ fontSize: 19, color: "var(--t2)", maxWidth: 720, marginBottom: 48 }}>
          Opening a bank account for the first time shouldn't take three hours of Googling and Reddit threads. That's why CRAM Finance exists.
        </p>
      </section>

      <section className="container" style={{ marginTop: 60 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">
          <div>
            <h2 style={{ fontSize: 36, marginBottom: 16 }}>Why we built this</h2>
            <p style={{ fontSize: 16, color: "var(--t2)", marginBottom: 16, lineHeight: 1.7 }}>
              When you start college, nobody teaches you which bank to choose, which fees to avoid, or which budgeting
              app actually sticks. You're left guessing — usually with whoever shows up at a campus tabling event.
            </p>
            <p style={{ fontSize: 16, color: "var(--t2)", lineHeight: 1.7 }}>
              CRAM Finance cuts through that. We compare the options, explain what matters, and tell you what to pick — in
              plain English, with no upsell.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Pillar n="01" t="No fluff" d="Only what's relevant to your situation as a student. Nothing more." />
            <Pillar n="02" t="Student-first" d="Every recommendation is filtered through a real student's needs and budget." />
            <Pillar n="03" t="Always free" d="No paywalls or subscriptions. CRAM Finance is free to use, forever." />
          </div>
        </div>
        <style>{`@media (max-width: 800px){ .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      <section className="container" style={{ marginTop: 80, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link to="/accounts" className="btn btn--primary">Compare bank accounts <ArrowRight size={15} className="arrow" /></Link>
        <Link to="/apps" className="btn btn--ghost">Money apps</Link>
      </section>
    </main>
  );
}

function Pillar({ n, t, d }) {
  return (
    <div className="card-base" style={{ padding: 28, display: "flex", gap: 20, alignItems: "flex-start" }}>
      <span
        style={{
          fontFamily: "Fraunces, serif",
          fontStyle: "italic",
          fontSize: 36,
          color: "var(--emerald)",
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        {n}
      </span>
      <div>
        <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{t}</h3>
        <p style={{ fontSize: 14.5, color: "var(--t2)", margin: 0, lineHeight: 1.6 }}>{d}</p>
      </div>
    </div>
  );
}
