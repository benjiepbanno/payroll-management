export function formatPeriod(period: string): string {
  if (!/^\d{6}$/.test(period)) return "Invalid period";

  const year = period.slice(0, 4);
  const month = period.slice(4, 6);

  const monthNumber = parseInt(month, 10);
  if (monthNumber < 1 || monthNumber > 12) return "Invalid period";

  const date = new Date(Number(year), monthNumber - 1); // month is 0-indexed
  return `${date.toLocaleString("default", { month: "long" })} ${year}`;
}

export function formatAmount(amount: number): string {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
