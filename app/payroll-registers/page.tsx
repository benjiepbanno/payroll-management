"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUserAuthorizationStore } from "@/store/user-authorization-store";
import { ModuleAccess } from "@/lib/modules";

import PageHeader from "@/components/page-header";
import SearchForm from "@/components/payroll-registers/search-form";
import SearchResult from "@/components/payroll-registers/search-result";

import { Separator } from "@/components/ui/separator";



export default function Page() {
  const router = useRouter();
  const { user_authorization } = useUserAuthorizationStore();

  const access: ModuleAccess = user_authorization.body;

  useEffect(() => {
    if (access.payroll_registers_access === 0) {
      router.replace("/"); // Redirect to base path
    }
  }, [access.payroll_registers_access, router]);

  // Optionally prevent rendering until redirect logic has time to run
  if (access.payroll_registers_access === 0) {
    return null;
  }

  return (
    <div className="p-16 space-y-16">
      <PageHeader title="Payroll Registers" />

      <SearchForm />

      <Separator />

      <SearchResult />
    </div>
  );
}
