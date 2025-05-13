"use client";

import { usePeriodsStore } from "@/store/payroll-registers/periods-store";

import PayrollRegisterSummaryHeader from "./header";
import PayrollRegisterSummaryTableHeaders from "./table-headers";
import PayrollRegisterSummaryPeriod from "./period";
import { PeriodDetails } from "@/lib/payroll-registers/types";

export default function PayrollRegisterSummary() {
  const { periods } = usePeriodsStore();

  const data = periods.body;

  return (
    <div className="space-y-2">
      <PayrollRegisterSummaryHeader />
      <PayrollRegisterSummaryTableHeaders />
      {data.map((period_details: PeriodDetails) => (
        <PayrollRegisterSummaryPeriod
          key={period_details.period}
          period_details={period_details}
        />
      ))}
    </div>
  );
}
