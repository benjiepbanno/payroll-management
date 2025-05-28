"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useToggleComponentStore } from "@/store/carded-payrolls/toggle-component-store";
import { useUserAuthorizationStore } from "@/store/user-authorization-store";
import { ModuleAccess } from "@/lib/modules";

import PageHeader from "@/components/page-header";
import ParamsForm from "@/components/carded-payrolls/params-form";
import ViewDetailsCard from "@/components/carded-payrolls/view-details-card";
import DataTableCard from "@/components/carded-payrolls/data-table-card";

export default function Page() {
  const router = useRouter();
  const { user_authorization } = useUserAuthorizationStore();
  const { value } = useToggleComponentStore();

  const access: ModuleAccess = user_authorization.body;

  useEffect(() => {
    if (access.carded_payrolls_access === 0) {
      router.replace("/"); // Redirect to base path
    }
  }, [access.carded_payrolls_access, router]);

  // Optionally prevent rendering until redirect logic has time to run
  if (access.carded_payrolls_access === 0) {
    return null;
  }

  return (
    <div className="p-16 space-y-16">
      <PageHeader title="Carded Payrolls" />

      <ParamsForm />

      {value ? <ViewDetailsCard /> : <DataTableCard />}
    </div>
  );
}
