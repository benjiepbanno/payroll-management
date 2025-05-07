"use client";

import { useEffect } from "react";

import { TabsContent } from "@/components/ui/tabs";
import DataTableSkeleton from "../data-table/data-table-skeleton";

import { useEarningsDeductionsHeadersParamsStore } from "@/store/carded-payrolls/params-store";
import { useEarningsDeductionsHeadersPropsStore } from "@/store/carded-payrolls/props-store";
import { useEarningsMandatoryDeductionsStore } from "@/store/carded-payrolls/earnings-mandatory-deductions-store";
import { useOtherDeductionsStore } from "@/store/carded-payrolls/other-deductions-store";
import { useRemittancesStore } from "@/store/carded-payrolls/remittances-store";

import { columns as regular_earnings_mandatory_deductions_columns } from "@/components/carded-payrolls/data-table/regular-earnings-mandatory-deductions/columns";
import { DataTable as RegularEarningsMandatoryDeductionsDataTable } from "@/components/carded-payrolls/data-table/regular-earnings-mandatory-deductions/data-table";

import { columns as regular_other_deductions_columns } from "@/components/carded-payrolls/data-table/regular-other-deductions/columns";
import { DataTable as RegularOtherDeductionsDataTable } from "@/components/carded-payrolls/data-table/regular-other-deductions/data-table";

import { columns as remittances_columns } from "@/components/carded-payrolls/data-table/remittances/columns";
import { DataTable as RemittancesDataTable } from "@/components/carded-payrolls/data-table/remittances/data-table";

export function EarningsMandatoryDeductionsTabsContent() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const { earnings_deductions_headers_props } =
    useEarningsDeductionsHeadersPropsStore();
  const {
    earnings_mandatory_deductions,
    isLoading,
    error,
    fetchAndSetEarningsMandatoryDeductions,
  } = useEarningsMandatoryDeductionsStore();

  useEffect(() => {
    if (
      earnings_deductions_headers_params.appointment_status &&
      earnings_deductions_headers_params.year &&
      earnings_deductions_headers_props.period &&
      earnings_deductions_headers_params.advno &&
      earnings_deductions_headers_props.carded_date &&
      earnings_deductions_headers_props.fund
    ) {
      fetchAndSetEarningsMandatoryDeductions({
        appointment_status:
          earnings_deductions_headers_params.appointment_status,
        year: earnings_deductions_headers_params.year,
        period: earnings_deductions_headers_props.period,
        advno: earnings_deductions_headers_params.advno,
        carded_date: earnings_deductions_headers_props.carded_date,
        fund: earnings_deductions_headers_props.fund,
      });
    }
  }, [earnings_deductions_headers_props, earnings_deductions_headers_params, fetchAndSetEarningsMandatoryDeductions]);

  const data = earnings_mandatory_deductions.body;

  return (
    <TabsContent value="emd">
      {isLoading ? (
        <DataTableSkeleton />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <RegularEarningsMandatoryDeductionsDataTable
          columns={regular_earnings_mandatory_deductions_columns}
          data={data ?? []}
        />
      )}
    </TabsContent>
  );
}

export function OtherDeductionsTabsContent() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const { earnings_deductions_headers_props } =
    useEarningsDeductionsHeadersPropsStore();
  const { other_deductions, isLoading, error, fetchAndSetOtherDeductions } =
    useOtherDeductionsStore();

  useEffect(() => {
    if (
      earnings_deductions_headers_params.appointment_status &&
      earnings_deductions_headers_params.year &&
      earnings_deductions_headers_props.period &&
      earnings_deductions_headers_params.advno &&
      earnings_deductions_headers_props.carded_date
    ) {
      fetchAndSetOtherDeductions({
        appointment_status:
          earnings_deductions_headers_params.appointment_status,
        year: earnings_deductions_headers_params.year,
        period: earnings_deductions_headers_props.period,
        advno: earnings_deductions_headers_params.advno,
        carded_date: earnings_deductions_headers_props.carded_date,
      });
    }
  }, [earnings_deductions_headers_props, earnings_deductions_headers_params, fetchAndSetOtherDeductions]);

  const data = other_deductions.body;

  return (
    <TabsContent value="od">
      {isLoading ? (
        <DataTableSkeleton />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <RegularOtherDeductionsDataTable
          columns={regular_other_deductions_columns}
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
