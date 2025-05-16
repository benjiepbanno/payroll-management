"use client";


import PayrollRegisterSummaryHeader from "./header";
import PayrollRegisterSummaryTableHeaders from "./table-headers";
import PayrollRegisterSummaryPeriod from "./period";

import { PayrollRegisterDetails, PeriodDetails } from "@/lib/payroll-registers/types";
import { usePayrollRegisterStore } from "@/store/payroll-registers/payroll-register-store";

export default function PayrollRegisterSummary() {
  const { payroll_register } = usePayrollRegisterStore();

  const data: PayrollRegisterDetails = payroll_register.body;

  return (
    <div className="space-y-2">
      <PayrollRegisterSummaryHeader />
      <PayrollRegisterSummaryTableHeaders />
      {data.periods.map((period_details: PeriodDetails) => (
        <PayrollRegisterSummaryPeriod
          key={period_details.period}
          period_details={period_details}
        />
      ))}
    </div>
  );
}
