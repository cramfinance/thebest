import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductRow from "../components/ProductRow";
import TabBar from "../components/TabBar";
import { apps } from "../data/products";

export default function Apps() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("tab") === "finance" ? "finance" : "budgeting";
  const [tab, setTab] = useState(initial);

  const onChange = (id) => {
    setTab(id);
    setParams({ tab: id });
  };

  const list = tab === "budgeting" ? apps.budgeting : apps.finance;

  return (
    <main data-testid="page-apps" style={{ padding: "140px 0 100px" }}>
      <section className="container">
        <span className="eyebrow">App selection</span>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", marginTop: 22, marginBottom: 18, lineHeight: 0.98 }}>
          The best <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>money apps</em> for students.
        </h1>
        <p style={{ fontSize: 18, color: "var(--t2)", maxWidth: 640 }}>
          We've tested the most popular apps. Here's what's actually worth your time — and what's marketing fluff.
        </p>

        <TabBar
          testIdPrefix="apps-tab"
          active={tab}
          onChange={onChange}
          tabs={[
            { id: "budgeting", label: "Budgeting Apps", desc: "Manual tracking & active spending control" },
            { id: "finance", label: "Finance Apps", desc: "Overall wealth, tracking & credit monitoring" },
          ]}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {list.map((p, i) => (
            <ProductRow key={p.slug} product={p} index={i} sectionPath="/apps" />
          ))}
        </div>
      </section>
    </main>
  );
}
