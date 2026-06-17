import Marquee from "react-fast-marquee";

const banks = [
  "Chase", "SoFi", "Capital One", "Discover", "Bank of America",
  "Ally", "Synchrony", "Varo", "Apple Bank", "Marcus", "Wells Fargo", "Citi",
];

export default function BankMarquee() {
  return (
    <section
      data-testid="bank-marquee"
      style={{
        background: "var(--bg)",
        padding: "40px 0",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <p
        className="font-mono"
        style={{
          textAlign: "center",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--t3)",
          marginBottom: 20,
        }}
      >
        Compared, scored, ranked — never paid to recommend
      </p>
      <Marquee gradient gradientColor="#f5f2ea" gradientWidth={80} speed={42} pauseOnHover>
        {banks.map((b, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: 34,
              letterSpacing: "-0.02em",
              color: "var(--t2)",
              margin: "0 48px",
              fontStyle: i % 3 === 0 ? "italic" : "normal",
            }}
          >
            {b}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
