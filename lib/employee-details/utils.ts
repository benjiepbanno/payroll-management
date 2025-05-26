export function formatDate(date: string): string {
  if (!date) {
    return date;
  }

  const parsedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  if (isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-US", options);
}

export function formatAmount(amount: string): string {
  const parsedAmount = parseFloat(amount);

  if (isNaN(parsedAmount)) {
    return amount;
  }

  return parsedAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getAppointmentStatus(appt: string | undefined) {
  if (!appt) return appt;

  switch (appt.trim().toUpperCase()) {
    case "P":
      return "Plantilla";
    case "J":
      return "Job Order";
    case "C":
      return "Contract of Service";
    default:
      return appt;
  }
}
