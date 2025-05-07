"use client";

import { useToggleComponentStore } from "@/store/carded-payrolls/toggle-component-store";

import PageHeader from "@/components/page-header";
import ParamsForm from "@/components/carded-payrolls/params-form";
import ViewDetailsCard from "@/components/carded-payrolls/view-details-card";
import DataTableCard from "@/components/carded-payrolls/data-table-card";

export default function Page() {
  const { value } = useToggleComponentStore();
  return (
    <div className="space-y-16">
      <PageHeader title="Carded Payrolls" />

      <ParamsForm />

      {value ? <ViewDetailsCard /> : <DataTableCard />}
    </div>
  );
}
