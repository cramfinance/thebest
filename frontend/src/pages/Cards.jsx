import ProductRow from "../components/ProductRow";
import Glossary from "../components/Glossary";
import { cards } from "../data/products";

export default function Cards() {
  return (
    <main data-testid="page-cards" style={{ padding: "140px 0 100px" }}>
      <section className="container">
        <span className="eyebrow">Credit cards</span>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", marginTop: 22, marginBottom: 18, lineHeight: 0.98 }}>
          Top student and <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>starter credit cards</em>.
        </h1>
        <p style={{ fontSize: 18, color: "var(--t2)", maxWidth: 640, marginBottom: 48 }}>
          A strong student credit card builds credit, earns cash back, and unlocks college-friendly perks.
        </p>

        <Glossary section="cards" />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {cards.map((p, i) => (
            <ProductRow key={p.slug} product={p} index={i} sectionPath="/cards" />
          ))}
        </div>

        <p style={{ marginTop: 36, textAlign: "center", fontSize: 13.5, color: "var(--t3)" }}>
          Always compare rates, fees and eligibility before applying. Card offers may vary by state and school.
        </p>
      </section>
    </main>
  );
}
