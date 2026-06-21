// Glossary terms — keyed by section ("accounts" | "apps" | "cards")
// Edit definitions here to update across the site.

export const glossary = {
  accounts: [
    {
      term: "APY",
      short: "Annual Percentage Yield",
      def: "How much your money earns sitting in an account over a year, including compounding interest. A 4.50% APY on $1,000 earns you about $45 in a year — assuming the rate doesn't change. Higher = better for savings accounts.",
    },
    {
      term: "Direct deposit",
      short: "Paycheck auto-sent to your account",
      def: "When your employer or school sends your paycheck (or refund) electronically straight into your bank account. Many banks waive monthly fees, give early access to funds, or unlock higher APYs if you set this up.",
    },
    {
      term: "Overdraft",
      short: "Spending more than you have",
      def: "When you try to spend more money than is in your account. Some banks let the transaction go through but charge a $30–35 overdraft fee. Modern banks (SoFi, Capital One 360) skip the fee entirely or offer overdraft protection.",
    },
    {
      term: "FDIC insured",
      short: "Your money is protected up to $250K",
      def: "The Federal Deposit Insurance Corporation guarantees your deposits — up to $250,000 per account — if the bank itself fails. Every bank we recommend is FDIC insured. Always check before depositing.",
    },
    {
      term: "ATM network",
      short: "Where you can pull out cash fee-free",
      def: "The set of ATMs you can use without a fee. Big banks (Chase, BofA) have their own networks. Online banks often partner with Allpoint or MoneyPass — networks with 55,000–70,000 ATMs nationwide.",
    },
    {
      term: "Sign-up bonus",
      short: "Free money for opening an account",
      def: "A one-time cash bonus banks pay when you open a new account and meet certain conditions — usually setting up direct deposit within 60–90 days. Bonuses range from $50 to $300+.",
    },
    {
      term: "Minimum balance",
      short: "Lowest amount you can hold to avoid fees",
      def: "The floor your account balance must stay above to dodge a monthly maintenance fee. The best student accounts have a $0 minimum — meaning you can be broke and still keep the account free.",
    },
    {
      term: "Mobile deposit",
      short: "Deposit a check by taking a photo",
      def: "Snap a picture of a check in your bank's app, and it deposits to your account in 1–2 business days. Lifesaver for refund checks, birthday money from grandma, or work that pays by paper check.",
    },
  ],

  apps: [
    {
      term: "Zero-based budgeting",
      short: "Every dollar gets a job",
      def: "A budgeting method where you assign every dollar of income to a specific category (rent, groceries, savings, etc.) until you reach $0 unassigned. YNAB popularized this — it forces intentional spending instead of guessing.",
    },
    {
      term: "Envelope system",
      short: "Cash-style budgeting, digitized",
      def: "An old-school method where you split your money into 'envelopes' for each spending category — when an envelope is empty, you stop spending in that category. Goodbudget brings this to your phone with virtual envelopes.",
    },
    {
      term: "In My Pocket",
      short: 'PocketGuard\'s "safe to spend" number',
      def: "PocketGuard's signature feature — it subtracts your bills, savings goals, and monthly obligations from your balance to show what you can actually spend today without screwing up your budget.",
    },
    {
      term: "Auto-categorization",
      short: "The app sorts your spending for you",
      def: "Apps automatically label transactions ('Chipotle' → food, 'Lyft' → transport). Saves you time, but accuracy varies — you'll always need to manually fix some categories, especially for Venmo or weird merchant names.",
    },
    {
      term: "Net worth",
      short: "What you own minus what you owe",
      def: "Add up everything you own (cash, investments, car value) and subtract everything you owe (student loans, credit card debt). Empower and Mint show this so you can track your overall financial trajectory.",
    },
    {
      term: "Subscription tracker",
      short: "Finds recurring charges you forgot about",
      def: "Apps like Rocket Money scan your transactions for recurring monthly charges — Netflix, Hulu, that gym membership from 2023. They surface what you're paying so you can cancel what you don't use.",
    },
    {
      term: "Round-ups",
      short: "Auto-save spare change",
      def: "Round each purchase up to the nearest dollar and stash the difference in savings. A $4.30 coffee becomes a $5 charge with $0.70 going to savings. Painless way to save without thinking.",
    },
  ],

  cards: [
    {
      term: "APR",
      short: "Annual Percentage Rate",
      def: "The interest rate the card charges if you carry a balance month-to-month. Student card APRs are typically 19–29%. If you pay your full balance every month, APR doesn't matter — interest only kicks in on unpaid balances.",
    },
    {
      term: "Credit score",
      short: "A number rating your credit health",
      def: "A 300–850 score (FICO is most common) showing how trustworthy you look to lenders. Built from payment history, debt amount, and credit age. Student cards help you build this from scratch.",
    },
    {
      term: "Credit limit",
      short: "Max you can spend on the card",
      def: "The ceiling your issuer sets on your spending. Student cards usually start at $500–$1,500. Stay under 30% of your limit (so under $300 on a $1,000 limit) to keep your credit score healthy.",
    },
    {
      term: "Cash back",
      short: "Money returned on what you spend",
      def: "A percentage of each purchase comes back to you. 1.5% cash back means $1.50 back for every $100 spent. Flat-rate cards give the same % on everything; rotating-category cards give 5% on specific categories that change quarterly.",
    },
    {
      term: "Rotating categories",
      short: "5% bonus categories that change",
      def: "Some cards (like Discover it Student) give 5% back on different categories each quarter — gas one quarter, restaurants the next. You usually need to 'activate' the category each quarter to earn the bonus, capped at $1,500 in spending.",
    },
    {
      term: "Annual fee",
      short: "Yearly cost to keep the card open",
      def: "What the card costs you every year just to exist in your wallet. Every student card we recommend has a $0 annual fee — there's no reason to pay one as a beginner.",
    },
    {
      term: "Foreign transaction fee",
      short: "Charge for spending in another country",
      def: "A 1–3% fee tacked on every purchase made outside the US. Critical to check if you're studying abroad or traveling. Capital One and BofA Travel Rewards Student cards skip this fee entirely.",
    },
    {
      term: "Credit utilization",
      short: "% of your limit you're using",
      def: "How much of your credit limit you're using at any time. $200 spent on a $1,000 limit = 20% utilization. Keeping this under 30% is one of the easiest ways to maintain a healthy credit score.",
    },
    {
      term: "Hard inquiry",
      short: "Credit check that may ding your score",
      def: "When you apply for a card, the issuer pulls your credit report. This temporarily lowers your score by ~5 points and stays on your report for 2 years. Don't apply for multiple cards in a short window.",
    },
    {
      term: "Grace period",
      short: "Time to pay without interest",
      def: "The window between your statement date and payment due date (usually 21–25 days) where you can pay your balance in full and owe zero interest. Always pay before this window closes.",
    },
  ],
};
