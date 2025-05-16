"use client";

import { useEffect } from "react";

import { useSearchParamsStore } from "@/store/payroll-registers/search-params-store";
import { usePeriodsStore } from "@/store/payroll-registers/periods-store";

import PayrollRegister from "./payroll-register/payroll-register";
import PayrollRegisterSummary from "./payroll-register-summary/payroll-register-summary";
import { usePayrollRegisterStore } from "@/store/payroll-registers/payroll-register-store";

export default function SearchResult() {
  const { search_params } = useSearchParamsStore();
  const { payroll_register, is_loading, error, fetchAndSetPayrollRegister } =
    usePayrollRegisterStore();

  useEffect(() => {
    if (
      search_params.fiscal_year &&
      search_params.fund &&
      search_params.advno &&
      search_params.tracking_number
    ) {
      fetchAndSetPayrollRegister({
        fiscal_year: search_params.fiscal_year,
        fund: search_params.fund,
        advno: search_params.advno,
        tracking_number: search_params.tracking_number,
      });
    }
  }, [search_params, fetchAndSetPayrollRegister]);

  if (is_loading) {
    return (
      <div className="flex justify-center h-150">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-150">
        <span style={{ color: "red" }}>{error}</span>
      </div>
    );
  }

  if (Object.keys(payroll_register.body).length === 0) {
    return (
      <div className="flex justify-center items-center h-150">
        <p style={{ color: "red" }}>No payroll register found.</p>
      </div>
    );
  }

  return (
    <>
      <PayrollRegister />
      <PayrollRegisterSummary />
    </>
  );
}
