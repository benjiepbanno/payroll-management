"use client";

import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import {Spinner} from "@heroui/spinner";

import { useSearchParamsStore } from "@/store/payroll-registers/search-params-store";
import { usePeriodsStore } from "@/store/payroll-registers/periods-store";

import PayrollRegister from "./payroll-register";
import PayrollRegisterSummary from "./payroll-register-summary";

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
      <div className="flex flex-col gap-2 items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <p style={{ color: "red" }}>{error}</p>
      </>
    );
  }

  return (
    <>
      <PayrollRegister />

      <PayrollRegisterSummary />
    </>
  );
}
