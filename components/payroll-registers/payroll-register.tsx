"use client";

import { usePeriodsStore } from "@/store/payroll-registers/periods-store";

import PayrollRegisterHeader from "./payroll-register-header";
import PayrollRegisterTableHeaders from "./payroll-register-table-headers";
import PayrollRegisterPeriod from "./payroll-register-period";

export default function PayrollRegister() {
  const { periods } = usePeriodsStore();

  const data = periods.body;

  return (
    <div className="space-y-2">
      <PayrollRegisterHeader />
      <PayrollRegisterTableHeaders />
      {data.map((period: string) => (
        <PayrollRegisterPeriod key={period} period={period} />
      ))}
    </div>
  );
}
