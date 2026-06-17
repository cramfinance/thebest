import { Link } from "react-router-dom";

const content = {
  disclosure: {
    eyebrow: "Disclosure",
    title: "Affiliate disclosure and how we stay honest.",
    intro: "Some links on CRAM Finance may earn us a commission — at no extra cost to you. Our recommendations come from student value first.",
    sections: [
      { h: "How we make money", p: "CRAM Finance earns affiliate income when readers click certain links and sign up. That income keeps the site running — it does not affect our rankings or which products we recommend." },
      { h: "What we prioritize", p: "We focus on the accounts and apps that serve students best: low fees, easy access, useful perks, and clear terms." },
      { h: "Why you can trust it", p: "We do not accept paid placements for products students shouldn't use. If it's on this site, it passed our student-friendly criteria." },
    ],
    cta: { to: "/", label: "Back to home →" },
  },
  privacy: {
    eyebrow: "Privacy policy",
    title: "Your privacy matters.",
    intro: "We don't sell your data. Here's how we handle the information we collect.",
    sections: [
      { h: "What we collect", p: "Only the minimum needed to run the site: anonymous analytics and any contact form submissions you choose to send." },
      { h: "How we use it", p: "Analytics help us understand what students need so we can improve the site. Contact submissions are used only to reply to you." },
      { h: "Your choices", p: "You can use browser privacy controls, ad blockers, or Do Not Track settings to opt out of analytics any time." },
    ],
    cta: { to: "/contact", label: "Contact us →" },
  },
  terms: {
    eyebrow: "Terms",
    title: "Terms of use for CRAM Finance.",
    intro: "This site is for informational purposes only. We are not offering personalized financial advice.",
    sections: [
      { h: "Use of this site", p: "CRAM Finance provides educational information about student bank accounts, budgeting apps, and finance tools. Always verify details with the provider before opening an account." },
      { h: "Not financial advice", p: "Nothing on this site is financial advice. For personalized guidance, consult a licensed financial professional." },
      { h: "Updates", p: "We may update these terms and our content over time. Check back periodically for the latest information." },
    ],
    cta: { to: "/disclosure", label: "Read disclosure →" },
  },
};

export default function Legal({ kind }) {
  const c = content[kind];
  if (!c) return null;
  return (
    <main data-testid={`page-${kind}`} style={{ padding: "140px 0 100px" }}>
      <section className="container-narrow">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1 style={{ fontSize: "clamp(40px, 5vw, 64px)", marginTop: 22, marginBottom: 22, lineHeight: 1.02 }}>{c.title}</h1>
        <p style={{ fontSize: 18, color: "var(--t2)", marginBottom: 40 }}>{c.intro}</p>

        {c.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 26, marginBottom: 10 }}>{s.h}</h2>
            <p style={{ color: "var(--t2)", fontSize: 16, lineHeight: 1.7 }}>{s.p}</p>
          </div>
        ))}

        <Link to={c.cta.to} className="btn btn--ghost" style={{ marginTop: 24 }} data-testid={`${kind}-cta`}>
          {c.cta.label}
        </Link>
      </section>
    </main>
  );
}
