"use client";

import { useEffect } from "react";

import { TabsContent } from "@/components/ui/tabs";
import DataTableSkeleton from "../data-table/data-table-skeleton";

import { columns as special_earnings_deductions_columns } from "@/components/carded-payrolls/data-table/special-earnings-deductions/columns";
import { DataTable as SpecialEarningsDeductionsDataTable } from "@/components/carded-payrolls/data-table/special-earnings-deductions/data-table";

import { columns as remittances_columns } from "@/components/carded-payrolls/data-table/remittances/columns";
import { DataTable as RemittancesDataTable } from "@/components/carded-payrolls/data-table/remittances/data-table";

import { useEarningsDeductionsHeadersParamsStore } from "@/store/carded-payrolls/params-store";
import { useEarningsDeductionsHeadersPropsStore } from "@/store/carded-payrolls/props-store";
import { useEarningsDeductionsStore } from "@/store/carded-payrolls/earnings-deductions-store";
import { useRemittancesStore } from "@/store/carded-payrolls/remittances-store";

export function EarningsDeductionsTabsContent() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const { earnings_deductions_headers_props } =
    useEarningsDeductionsHeadersPropsStore();
  const {
    earnings_deductions,
    isLoading,
    error,
    fetchAndSetEarningsDeductions,
  } = useEarningsDeductionsStore();

  useEffect(() => {
    if (
      earnings_deductions_headers_params.appointment_status &&
      earnings_deductions_headers_params.year &&
      earnings_deductions_headers_props.period &&
      earnings_deductions_headers_params.advno &&
      earnings_deductions_headers_props.carded_date &&
      earnings_deductions_headers_props.fund
    ) {
      fetchAndSetEarningsDeductions({
        appointment_status:
          earnings_deductions_headers_params.appointment_status,
        year: earnings_deductions_headers_params.year,
        period: earnings_deductions_headers_props.period,
        advno: earnings_deductions_headers_params.advno,
        carded_date: earnings_deductions_headers_props.carded_date,
        fund: earnings_deductions_headers_props.fund,
      });
    }
  }, [earnings_deductions_headers_props, earnings_deductions_headers_params, fetchAndSetEarningsDeductions]);

  const data = earnings_deductions.body;

  return (
    <TabsContent value="ed">
      {isLoading ? (
        <DataTableSkeleton />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <SpecialEarningsDeductionsDataTable
          columns={special_earnings_deductions_columns}
          data={data ?? []}
        />
      )}
    </TabsContent>
  );
}

export function RemittancesTabsContent() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const { earnings_deductions_headers_props } =
    useEarningsDeductionsHeadersPropsStore();
  const { remittances, isLoading, error, fetchAndSetRemittances } =
    useRemittancesStore();

  useEffect(() => {
    if (
      earnings_deductions_headers_params.appointment_status &&
      earnings_deductions_headers_params.year &&
      earnings_deductions_headers_props.period &&
      earnings_deductions_headers_params.advno
    ) {
      fetchAndSetRemittances({
        appointment_status:
          earnings_deductions_headers_params.appointment_status,
        year: earnings_deductions_headers_params.year,
        period: earnings_deductions_headers_props.period,
        advno: earnings_deductions_headers_params.advno,
      });
    }
  }, [earnings_deductions_headers_props, earnings_deductions_headers_params, fetchAndSetRemittances]);

  const data = remittances.body;

  if (isLoading) {
    return (
      <TabsContent value="r">
        <DataTableSkeleton />
      </TabsContent>
    );
  }

  if (error) {
    return (
      <TabsContent value="r">
        <p style={{ color: "red" }}>{error}</p>
      </TabsContent>
    );
  }

  return (
    <TabsContent value="r">
      <RemittancesDataTable columns={remittances_columns} data={data ?? []} />
    </TabsContent>
  );
}
