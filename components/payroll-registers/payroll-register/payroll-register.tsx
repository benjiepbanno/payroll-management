"use client";

import { usePeriodsStore } from "@/store/payroll-registers/periods-store";

import PayrollRegisterHeader from "./header";
import PayrollRegisterTableHeaders from "./table-headers";
import PayrollRegisterPeriod from "./period";
import { PeriodDetails } from "@/lib/payroll-registers/types";

export default function PayrollRegister() {
  const { periods } = usePeriodsStore();

  const data = periods.body;
  console.log("PayrollRegister component mounted, periods data:", data);

  return (
    <div className="space-y-2">
      <PayrollRegisterHeader />
      <PayrollRegisterTableHeaders />
      {data.map((period_details: PeriodDetails) => (
        <PayrollRegisterPeriod
          key={period_details.period}
          period_details={period_details}
        />
      ))}
    </div>
  );
}
