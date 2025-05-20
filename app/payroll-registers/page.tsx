"use client"

import PageHeader from "@/components/page-header";
import SearchForm from "@/components/payroll-registers/search-form";
import SearchResult from "@/components/payroll-registers/search-result";

import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="p-16 space-y-16">
      <PageHeader title="Payroll Registers" />

      <SearchForm />

      <Separator />

      <SearchResult />
    </div>
  );
}
