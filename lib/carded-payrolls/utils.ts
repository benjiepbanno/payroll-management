export function formatAmount(amount: number): string {
  
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatAmountString(amount: string): string {
  const parsedAmount = parseFloat(amount);
  

  if (isNaN(parsedAmount)) {
    return amount;
  }

  return parsedAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}