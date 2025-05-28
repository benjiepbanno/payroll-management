"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSearchParamsStore } from "@/store/employee-details/search-params-store";
import { useUserAuthorizationStore } from "@/store/user-authorization-store";
import { ModuleAccess } from "@/lib/modules";

import PageHeader from "@/components/page-header";
import SearchForm from "@/components/employee-details/search-form";
import AccountingCard from "@/components/employee-details/accounting-card";
import HumanResourceCard from "@/components/employee-details/human-resource-card";

export default function Page() {
  const router = useRouter();
  const { user_authorization } = useUserAuthorizationStore();
  const { search_params } = useSearchParamsStore();

  const access: ModuleAccess = user_authorization.body;

  useEffect(() => {
    if (access.employee_details_access === 0) {
      router.replace("/"); // Redirect to base path
    }
  }, [access.employee_details_access, router]);

  // Optionally prevent rendering until redirect logic has time to run
  if (access.employee_details_access === 0) {
    return null;
  }

  return (
    <div className="p-16 space-y-16">
      <PageHeader title="Employee Details" />

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
