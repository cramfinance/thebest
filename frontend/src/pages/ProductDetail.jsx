import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, X, ArrowUpRight } from "lucide-react";
import { getProduct } from "../data/products";
import { getAffiliate } from "../data/affiliates";
import LiveApy from "../components/LiveApy";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProduct(slug);
  const { pathname } = useLocation();

  if (!product) {
    return (
      <main data-testid="page-product-detail-404" style={{ padding: "160px 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: 48, marginBottom: 18 }}>Product not found</h1>
          <p style={{ color: "var(--t2)", marginBottom: 32 }}>We couldn't find that product. It may have moved.</p>
          <Link to="/" className="btn btn--primary">Back to home</Link>
        </div>
      </main>
    );
  }

  const isAccount = product.section === "accounts";
  const affiliate = getAffiliate(product.slug, `Visit ${product.issuer}`);

  return (
    <main data-testid={`page-product-${slug}`} style={{ padding: "120px 0 100px" }}>
      <div className="container" style={{ marginBottom: 24 }}>
        <button
          onClick={() => navigate(-1)}
          data-testid="back-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "transparent",
            border: "none",
            color: "var(--t2)",
            cursor: "pointer",
            fontSize: 14,
            padding: 0,
          }}
        >
          <ArrowLeft size={15} /> Back
        </button>
      </div>

      {/* HERO */}
      <section className="container">
        <div
          style={{
            background: `linear-gradient(135deg, ${product.hue}15 0%, var(--bg-elev) 60%)`,
            border: "1px solid var(--line)",
            borderRadius: 32,
            padding: "clamp(36px, 5vw, 64px)",
            position: "relative",
            overflow: "hidden",
          }}
          className="noise-overlay"
        >
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -80,
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: `radial-gradient(closest-side, ${product.hue}30, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "center" }} className="detail-hero">
            <div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                <span className="tag tag--soft">{product.kind}</span>
                {product.tags?.map((t, i) => (
                  <span key={i} className="tag tag--emerald">{t}</span>
                ))}
              </div>
              <h1 style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 0.98, marginBottom: 18 }}>
                {product.name}
              </h1>
              <p style={{ fontSize: 19, color: "var(--t2)", maxWidth: 600, marginBottom: 28 }}>{product.tagline}</p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="#"
                  className="btn btn--primary"
                  data-testid="detail-cta-apply"
                  onClick={(e) => e.preventDefault()}
                >
                  Visit {product.issuer} <ArrowUpRight size={15} />
                </a>
                <Link
                  to={
                    product.section === "accounts"
                      ? `/accounts?tab=${product.tab}`
                      : product.section === "apps"
                      ? `/apps?tab=${product.tab}`
                      : "/cards"
                  }
                  className="btn btn--ghost"
                  data-testid="detail-cta-back-list"
                >
                  See all {product.kind.toLowerCase()}s
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div
              style={{
                background: "var(--ink-deep)",
                color: "var(--t-on-dark)",
                borderRadius: 24,
                padding: 28,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--t-on-dark-2)", marginBottom: 16 }}>
                At a glance
              </div>
              {Object.entries(product.stats).map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(244, 241, 232, 0.1)",
                    fontSize: 14.5,
                  }}
                >
                  <span style={{ color: "var(--t-on-dark-2)", textTransform: "capitalize" }}>{k}</span>
                  <span className="font-mono" style={{ color: "var(--gold)", fontWeight: 500 }}>{v}</span>
                </div>
              ))}
              <div
                style={{
                  marginTop: 18,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(244, 241, 232, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--t-on-dark-2)" }}>
                  Match score
                </span>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 44, color: "var(--gold)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                  {product.score}
                  <span style={{ fontSize: 16, color: "var(--t-on-dark-2)" }}>/100</span>
                </span>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .detail-hero { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Pull quote: who it's for */}
      <section className="container" style={{ marginTop: 80 }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow">Who it's for</span>
          <p
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.2,
              marginTop: 22,
              color: "var(--t1)",
              letterSpacing: "-0.015em",
            }}
          >
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>"</em>
            {product.who}
            <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>"</em>
          </p>
        </div>
      </section>

      {/* Bento: Pros / Cons */}
      <section className="container" style={{ marginTop: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="proscons-grid">
          <div className="card-base" style={{ padding: 36 }}>
            <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--emerald)", marginBottom: 16 }}>
              The case for
            </div>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 32, marginBottom: 24 }}>What we like</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {product.pros.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 15.5, color: "var(--t2)" }}>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 8,
                      background: "var(--emerald-soft)",
                      color: "var(--emerald)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-base" style={{ padding: 36, background: "var(--bg-warm)" }}>
            <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rust)", marginBottom: 16 }}>
              The case against
            </div>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 32, marginBottom: 24 }}>Watch out for</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {product.cons.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 15.5, color: "var(--t2)" }}>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 8,
                      background: "rgba(194, 65, 12, 0.12)",
                      color: "var(--rust)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <X size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <style>{`@media (max-width: 800px){ .proscons-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Live APY widget if relevant */}
      {isAccount && (
        <section className="container" style={{ marginTop: 80 }}>
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <p
              className="font-mono"
              style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--t3)", marginBottom: 20, textAlign: "center" }}
            >
              How it stacks up · live
            </p>
            <LiveApy />
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="container" style={{ marginTop: 96 }}>
        <div
          className="card-base"
          style={{
            padding: "clamp(36px, 5vw, 56px)",
            textAlign: "center",
            background: "var(--bg-elev)",
          }}
        >
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 14 }}>
            Compare with the rest.
          </h2>
          <p style={{ color: "var(--t2)", maxWidth: 540, margin: "0 auto 28px", fontSize: 16 }}>
            {product.name} is one of our top picks — but the right account depends on you. See how it stacks against
            others.
          </p>
          <Link to="/compare" className="btn btn--primary" data-testid="detail-cta-compare">
            Open the comparison <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
