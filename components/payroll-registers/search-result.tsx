"use client";

import { useEffect } from "react";

import { useSearchParamsStore } from "@/store/payroll-registers/search-params-store";
import { usePeriodsStore } from "@/store/payroll-registers/periods-store";

import PayrollRegister from "./payroll-register/payroll-register";
import PayrollRegisterSummary from "./payroll-register-summary/payroll-register-summary";

export default function SearchResult() {
  const { search_params } = useSearchParamsStore();
  const { periods, is_loading, error, fetchAndSetPeriods } = usePeriodsStore();

  useEffect(() => {
    if (
      search_params.fiscal_year &&
      search_params.fund &&
      search_params.advno &&
      search_params.tracking_number
    ) {
      fetchAndSetPeriods({
        fiscal_year: search_params.fiscal_year,
        fund: search_params.fund,
        advno: search_params.advno,
        tracking_number: search_params.tracking_number,
      });
    }
  }, [search_params, fetchAndSetPeriods]);

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

  if (periods.body.length === 0) {
    return (
      <div className="flex justify-center items-center h-150">
        <p style={{ color: "red" }}>No record found.</p>
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
