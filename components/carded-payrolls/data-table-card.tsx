"use client";

import { useEffect } from "react";

import { columns } from "@/components/carded-payrolls/data-table/earnings-deductions-headers/columns";
import { DataTable } from "@/components/carded-payrolls/data-table/earnings-deductions-headers/data-table";

import { useEarningsDeductionsHeadersParamsStore } from "@/store/carded-payrolls/params-store";
import { useEarningsDeductionsHeadersStore } from "@/store/carded-payrolls/earnings-deductions-headers-store";

import DataTableSkeleton from "./data-table/data-table-skeleton";

export default function DataTableCard() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const {
    earnings_deductions_headers,
    isLoading,
    error,
    fetchAndSetEarningsDeductionsHeaders,
  } = useEarningsDeductionsHeadersStore();

  useEffect(() => {
    if (
      earnings_deductions_headers_params.appointment_status &&
      earnings_deductions_headers_params.year &&
      earnings_deductions_headers_params.payroll_type &&
      earnings_deductions_headers_params.advno &&
      earnings_deductions_headers_params.fund
    ) {
      fetchAndSetEarningsDeductionsHeaders({
        appointment_status:
          earnings_deductions_headers_params.appointment_status,
        year: earnings_deductions_headers_params.year,
        payroll_type: earnings_deductions_headers_params.payroll_type,
        advno: earnings_deductions_headers_params.advno,
        fund: earnings_deductions_headers_params.fund,
      });
    }
  }, [earnings_deductions_headers_params]);

  const data = earnings_deductions_headers.body;

  return (
    <>
      {isLoading ? (
        <DataTableSkeleton />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <DataTable columns={columns} data={data ?? []} />
      )}
    </>
  );
}
