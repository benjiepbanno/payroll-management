"use client";

import PageHeader from "@/components/page-header";
import SearchForm from "@/components/employee-details/search-form";
import AccountingCard from "@/components/employee-details/accounting-card";
import HumanResourceCard from "@/components/employee-details/human-resource-card";

import { useSearchParamsStore } from "@/store/employee-details/search-params-store";

export default function Page() {
  const { search_params } = useSearchParamsStore();

  return (
    <div className="h-svh space-y-16">
      <PageHeader title="Employee Details"/>

      <SearchForm />

      <div className="grid grid-cols-2 gap-8">
        {search_params.primary === "accounting" ? (
          <>
            <AccountingCard description="Primary" />
            <HumanResourceCard description="Secondary" />
          </>
        ) : (
          <>
            <HumanResourceCard description="Primary" />
            <AccountingCard description="Secondary" />
          </>
        )}
      </div>
    </div>
  );
}
