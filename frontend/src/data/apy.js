// Simulated live APY data — gently fluctuates client-side to feel real.
export const apyFeed = [
  { name: "SoFi Savings", base: 4.60, hue: "#00A6FB" },
  { name: "Synchrony HYS", base: 4.65, hue: "#FFC600" },
  { name: "Ally Online Savings", base: 4.20, hue: "#5C1F87" },
  { name: "Varo Savings", base: 5.00, hue: "#7F39DB" },
  { name: "Marcus by GS", base: 4.40, hue: "#FF6F00" },
  { name: "Discover Online Savings", base: 4.10, hue: "#FF6600" },
];

export function jitter(base) {
  // ±0.03% noise, two decimals
  const n = base + (Math.random() - 0.5) * 0.06;
  return Math.max(0.1, n).toFixed(2);
}
