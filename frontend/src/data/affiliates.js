// CRAM Finance — Affiliate Link Registry
// -----------------------------------------------------------------------------
// EDIT THIS FILE to update where every "Visit {issuer}" / "View app" / "Compare cards"
// button points to. Keys are product slugs (must match /app/frontend/src/data/products.js).
//
// When you have your real affiliate link for a product, just swap the URL below.
// Each entry has:
//   url:   where the CTA button sends users
//   label: (optional) overrides the default "Visit {Issuer}" button text
// -----------------------------------------------------------------------------

export const affiliateLinks = {
  // ── Checking accounts ─────────────────────────────────────────────
  "chase-college-checking": {
    url: "https://www.chase.com/personal/checking/college-checking",
  },
  "sofi-checking-savings": {
    url: "https://www.sofi.com/banking/",
  },
  "capital-one-360": {
    url: "https://www.capitalone.com/bank/checking-accounts/online-checking-account/",
  },
  "discover-cashback-debit": {
    url: "https://www.discover.com/online-banking/checking-account/",
  },
  "bofa-student-banking": {
    url: "https://www.bankofamerica.com/deposits/checking/student-banking/",
  },

  // ── Savings accounts ──────────────────────────────────────────────
  "sofi-savings": {
    url: "https://www.sofi.com/banking/savings/",
  },
  "ally-online-savings": {
    url: "https://www.ally.com/bank/online-savings-account/",
  },
  "synchrony-hys": {
    url: "https://www.synchronybank.com/banking/high-yield-savings/",
  },
  "varo-savings": {
    url: "https://www.varomoney.com/save/",
  },
  "apple-bank-smartstart": {
    url: "https://www.applebank.com/personal/savings/smartstart-savings/",
  },

  // ── Budgeting apps ────────────────────────────────────────────────
  "ynab": {
    url: "https://www.ynab.com/referral/?ref=cramfinance",
    label: "Try YNAB free",
  },
  "pocketguard": {
    url: "https://pocketguard.com/",
    label: "Try PocketGuard",
  },
  "goodbudget": {
    url: "https://goodbudget.com/",
    label: "Try Goodbudget",
  },

  // ── Finance apps ──────────────────────────────────────────────────
  "empower": {
    url: "https://www.empower.com/",
    label: "Try Empower",
  },
  "credit-karma": {
    url: "https://www.creditkarma.com/",
    label: "Open Credit Karma",
  },
  "rocket-money": {
    url: "https://www.rocketmoney.com/",
    label: "Try Rocket Money",
  },
  "oportun-set-save": {
    url: "https://oportun.com/save/",
    label: "Try Oportun Set & Save",
  },
  "cleo": {
    url: "https://www.meetcleo.com/",
    label: "Try Cleo",
  },

  // ── Student credit cards ──────────────────────────────────────────
  "discover-it-student-cash-back": {
    url: "https://www.discover.com/credit-cards/cash-back/it-student-card.html",
    label: "Apply for Discover it Student",
  },
  "chase-freedom-rise": {
    url: "https://creditcards.chase.com/cash-back-credit-cards/freedom/rise",
    label: "Apply for Freedom Rise",
  },
  "capital-one-quicksilver-student": {
    url: "https://www.capitalone.com/credit-cards/quicksilver-student/",
    label: "Apply for Quicksilver Student",
  },
  "capital-one-savor-student": {
    url: "https://www.capitalone.com/credit-cards/savorone-student-cash-rewards/",
    label: "Apply for Savor Student",
  },
  "bofa-travel-rewards-student": {
    url: "https://www.bankofamerica.com/credit-cards/products/travel-rewards-students-credit-card/",
    label: "Apply for BofA Travel Rewards",
  },
};

/**
 * Get the affiliate link + button label for a product slug.
 * Falls back to "#" with a default label if no entry exists yet.
 */
export function getAffiliate(slug, fallbackLabel = "Learn more") {
  const entry = affiliateLinks[slug];
  if (!entry) return { url: "#", label: fallbackLabel, configured: false };
  return { url: entry.url, label: entry.label || fallbackLabel, configured: true };
}
