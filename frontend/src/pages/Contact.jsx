import { useState, useEffect } from "react";
import { Mail, Instagram } from "lucide-react";

const SERVICE_ID = "service_ap17ges";
const TEMPLATE_ID = "template_yo6lq11";
const PUBLIC_KEY = "VOfwnWDndJt_i6AKw";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [note, setNote] = useState("");
  const [noteColor, setNoteColor] = useState("var(--t3)");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (window.emailjs && PUBLIC_KEY && PUBLIC_KEY !== "your_emailjs_public_key") {
      try { window.emailjs.init(PUBLIC_KEY); } catch (e) {}
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setNote("Please fill in all fields.");
      setNoteColor("var(--rust)");
      return;
    }

    setSending(true);
    setNote("Sending your message...");
    setNoteColor("var(--t3)");

    if (!window.emailjs || PUBLIC_KEY === "your_emailjs_public_key") {
      setTimeout(() => {
        setNote("Thanks! We'll be in touch within 48 hours.");
        setNoteColor("var(--emerald)");
        setForm({ name: "", email: "", message: "" });
        setSending(false);
      }, 800);
      return;
    }

    window.emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form)
      .then(() => {
        setNote("Thanks! We'll be in touch within 48 hours.");
        setNoteColor("var(--emerald)");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setNote("Couldn't send right now. Email thecramfinance@gmail.com directly.");
        setNoteColor("var(--rust)");
      })
      .finally(() => setSending(false));
  };

  return (
    <main data-testid="page-contact" style={{ padding: "140px 0 100px" }}>
      <section className="container">
        <span className="eyebrow">Contact</span>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", marginTop: 22, marginBottom: 18, lineHeight: 0.98 }}>
          Get in <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>touch</em>.
        </h1>
        <p style={{ fontSize: 18, color: "var(--t2)", maxWidth: 600, marginBottom: 48 }}>
          Questions, feedback, or partnership inquiries — we read everything.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64 }} className="contact-grid">
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ fontSize: 26, marginBottom: 4 }}>Send a message</h2>

            <Field label="Name" id="name">
              <input
                id="name"
                data-testid="contact-input-name"
                className="input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" id="email">
              <input
                id="email"
                data-testid="contact-input-email"
                className="input"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Message" id="msg">
              <textarea
                id="msg"
                data-testid="contact-input-message"
                className="input input--ta"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's on your mind?"
              />
            </Field>

            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <button
                type="submit"
                data-testid="contact-submit"
                className="btn btn--primary"
                disabled={sending}
                style={{ opacity: sending ? 0.7 : 1 }}
              >
                {sending ? "Sending..." : "Send message"}
              </button>
              <span data-testid="contact-note" style={{ color: noteColor, fontSize: 14 }}>{note}</span>
            </div>
          </form>

          <div>
            <h2 style={{ fontSize: 26, marginBottom: 12 }}>Or find us here</h2>
            <p style={{ color: "var(--t2)", marginBottom: 28, fontSize: 15 }}>
              We're a small team. Response time is usually within 48 hours.
            </p>

            <a
              href="mailto:thecramfinance@gmail.com"
              className="card-base"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", marginBottom: 12 }}
              data-testid="contact-email-link"
            >
              <div>
                <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--t3)" }}>
                  Email
                </div>
                <div style={{ fontWeight: 500, marginTop: 4 }}>thecramfinance@gmail.com</div>
              </div>
              <Mail size={20} color="var(--emerald)" />
            </a>

            <a
              href="https://www.instagram.com/cramfinance"
              target="_blank"
              rel="noopener noreferrer"
              className="card-base"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", marginBottom: 12 }}
              data-testid="contact-instagram-link"
            >
              <div>
                <div className="font-mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--t3)" }}>
                  Instagram
                </div>
                <div style={{ fontWeight: 500, marginTop: 4 }}>@cramfinance</div>
              </div>
              <Instagram size={20} color="var(--emerald)" />
            </a>
          </div>
        </div>
        <style>{`@media (max-width: 800px){ .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
      </section>
    </main>
  );
}

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono" style={{ display: "block", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--t3)", marginBottom: 8 }}>
        {label}
      </label>
      {children}
    </div>
  );
}
