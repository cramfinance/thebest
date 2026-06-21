import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProductRow from "../components/ProductRow";
import TabBar from "../components/TabBar";
import Glossary from "../components/Glossary";
import { accounts } from "../data/products";

export default function Accounts() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("tab") === "savings" ? "savings" : "checking";
  const [tab, setTab] = useState(initial);

  const onChange = (id) => {
    setTab(id);
    setParams({ tab: id });
  };

  const list = tab === "checking" ? accounts.checking : accounts.savings;

  return (
    <main data-testid="page-accounts" style={{ padding: "140px 0 100px" }}>
      <section className="container">
        <span className="eyebrow">Bank accounts</span>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", marginTop: 22, marginBottom: 18, lineHeight: 0.98 }}>
          The best student <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>bank accounts</em> in 2025.
        </h1>
        <p style={{ fontSize: 18, color: "var(--t2)", maxWidth: 640 }}>
          We compared fees, ATM access, sign-up bonuses and student perks. Here's what actually stands out.
        </p>

        <Glossary section="accounts" headline="Before you compare — know the lingo." />

        <TabBar
          testIdPrefix="accounts-tab"
          active={tab}
          onChange={onChange}
          tabs={[
            { id: "checking", label: "Checking Accounts", desc: "Spending, deposits & ATM access" },
            { id: "savings", label: "Savings Accounts", desc: "Emergency funds & high interest" },
          ]}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {list.map((p, i) => (
            <ProductRow key={p.slug} product={p} index={i} sectionPath="/accounts" />
          ))}
        </div>

        <p style={{ marginTop: 36, textAlign: "center", fontSize: 13.5, color: "var(--t3)" }}>
          APYs and bonuses subject to change. Always check the issuer's terms before opening an account.
        </p>
      </section>
    </main>
  );
}
