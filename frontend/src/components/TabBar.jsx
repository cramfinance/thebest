export default function TabBar({ tabs, active, onChange, testIdPrefix = "tab" }) {
  return (
    <div
      data-testid={`${testIdPrefix}-bar`}
      style={{
        display: "inline-flex",
        gap: 6,
        padding: 5,
        borderRadius: 999,
        background: "var(--bg-warm)",
        border: "1px solid var(--line)",
        marginBottom: 40,
      }}
      className="tabbar-wrap"
    >
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            data-testid={`${testIdPrefix}-${t.id}`}
            onClick={() => onChange(t.id)}
            style={{
              height: "auto",
              padding: "10px 22px",
              borderRadius: 999,
              border: "none",
              background: isActive ? "var(--bg-elev)" : "transparent",
              color: isActive ? "var(--t1)" : "var(--t2)",
              boxShadow: isActive ? "var(--shadow-sm)" : "none",
              fontFamily: "Outfit, sans-serif",
              fontSize: 14,
              fontWeight: isActive ? 600 : 500,
              cursor: "pointer",
              transition: "all 0.2s var(--ease)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: 1.3,
            }}
          >
            <span>{t.label}</span>
            {t.desc && (
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 400,
                  color: isActive ? "var(--emerald)" : "var(--t3)",
                  marginTop: 2,
                  textTransform: "none",
                  letterSpacing: 0,
                }}
              >
                {t.desc}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
