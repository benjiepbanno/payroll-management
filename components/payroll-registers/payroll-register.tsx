"use client";

import { usePeriodsStore } from "@/store/payroll-registers/periods-store";

import PayrollRegisterTableHeaders from "./payroll-register-table-headers";
import PayrollRegisterHeader from "./payroll-register-header";


export default function PayrollRegister() {
  const { periods } = usePeriodsStore();

  const data = periods.body;
  console.log("Periods Data: ", data);

  return (
    <div className="bg-sky-100">
      <PayrollRegisterHeader />
      <br />
      <PayrollRegisterTableHeaders />

    </div>
  );
}
