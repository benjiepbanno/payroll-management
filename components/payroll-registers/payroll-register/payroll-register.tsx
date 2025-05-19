"use client";

import PayrollRegisterHeader from "./header";
import PayrollRegisterTableHeaders from "./table-headers";
import PayrollRegisterPeriod from "./period";

import {
  PayrollRegisterDetails,
  PeriodDetails,
} from "@/lib/payroll-registers/types";
import { usePayrollRegisterStore } from "@/store/payroll-registers/payroll-register-store";

export default function PayrollRegister() {
  const { payroll_register } = usePayrollRegisterStore();

  const data: PayrollRegisterDetails = payroll_register.body;

  return (
    <div className="space-y-2">
      <PayrollRegisterHeader
        check_details={data.check_details}
        claimant={data.claimant}
        reference_number={data.reference_number}
      />
      
      <PayrollRegisterTableHeaders />

      {data.periods.map((period_details: PeriodDetails) => (
        <PayrollRegisterPeriod
          key={period_details.period}
          period_details={period_details}
        />
      ))}
    </div>
  );
}
