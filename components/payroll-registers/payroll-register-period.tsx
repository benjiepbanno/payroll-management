"use client";

import { useEffect } from "react";

import PayrollRegisterPeriodEmployee from "./payroll-register-period-employee";

type Props = {
  period: string;
};

export default function PayrollRegisterPeriod({ period }: Props) {
  useEffect(() => {
    console.log("PayrollRegisterPeriod component mounted, period:", period);
  }, [period]);

  const formattedPeriod = formatPeriod(period);

  return (
    <div>
      <div className="text-sm">
        <span className="font-bold">Period: </span>
        {formattedPeriod}
      </div>

      <PayrollRegisterPeriodEmployee />
    </div>
  );
}

function formatPeriod(period: string): string {
  if (!/^\d{6}$/.test(period)) return "Invalid period";

  const year = period.slice(0, 4);
  const month = period.slice(4, 6);

  const monthNumber = parseInt(month, 10);
  if (monthNumber < 1 || monthNumber > 12) return "Invalid period";

  const date = new Date(Number(year), monthNumber - 1); // month is 0-indexed
  return `${date.toLocaleString("default", { month: "long" })} ${year}`;
}
