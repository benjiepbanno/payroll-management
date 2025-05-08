"use client";

import { useState, useEffect } from "react";

import { useSearchParamsStore } from "@/store/employee-details/search-params-store";
import { useAccountingStore } from "@/store/employee-details/accounting-store";

import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import AccountingCardContentDetails from "./accounting-card-content-details";
import AccountingCardContentHeader from "./accounting-card-content-header";
import { AccountingEmployeeDetails } from "@/lib/employee-details/types";

export default function AccountingCardContent() {
  const { search_params } = useSearchParamsStore();
  const { accounting, is_loading, error, fetchAndSetAccounting } =
    useAccountingStore();

  const data = accounting.body;
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [employeeDetails, setEmployeeDetails] =
    useState<AccountingEmployeeDetails | null>(null);

  useEffect(() => {
    if (search_params.primary && search_params.search_by) {
      fetchAndSetAccounting({
        primary: search_params.primary,
        search_by: search_params.search_by,
        employee_number: search_params.employee_number ?? "",
        last_name: search_params.last_name ?? "",
        first_name: search_params.first_name ?? "",
        middle_name: search_params.middle_name ?? "",
      });
      setIsHeaderSelected(false);
    }
  }, [search_params, fetchAndSetAccounting]);

  useEffect(() => {
    if (data.length === 1) {
      setIsHeaderSelected(true);
      setEmployeeDetails(data[0]);
    }
  }, [data]);

  if (is_loading) {
    return (
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
      </CardContent>
    );
  }

  if (error) {
    return (
      <CardContent>
        <p style={{ color: "red" }}>{error}</p>
      </CardContent>
    );
  }

  if (!data.length) {
    return (
      <CardContent>
        <p>No employee data found.</p>
      </CardContent>
    );
  }

  if (isHeaderSelected) {
    return <AccountingCardContentDetails employeeDetails={employeeDetails!} />;
  }

  return (
    <CardContent>
      <div className="space-y-4">
        {data.map((employeeDetails: AccountingEmployeeDetails) => (
          <AccountingCardContentHeader
            key={employeeDetails.empno}
            employeeDetails={employeeDetails}
            setIsHeaderSelected={setIsHeaderSelected}
            setEmployeeDetails={setEmployeeDetails}
          />
        ))}
      </div>
    </CardContent>
  );
}
