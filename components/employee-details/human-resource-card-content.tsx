"use client";

import { useState, useEffect } from "react";

import { useSearchParamsStore } from "@/store/employee-details/search-params-store";
import { useHumanResourceStore } from "@/store/employee-details/human-resource-store";

import { CardContent } from "@/components/ui/card";
import HumanResourceCardContentHeader from "./human-resource-card-content-header";
import HumanResourceCardContentDetails from "./human-resource-card-content-details";
import { Skeleton } from "@/components/ui/skeleton";
import { HumanResourceEmployeeDetails } from "@/lib/employee-details/types";

export default function HumanResourceCardContent() {
  const { search_params } = useSearchParamsStore();
  const { human_resource, is_loading, error, fetchAndSetHumanResource } =
    useHumanResourceStore();

  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState<HumanResourceEmployeeDetails | null>(null);

  useEffect(() => {
    if (search_params.primary && search_params.search_by) {
      fetchAndSetHumanResource({
        primary: search_params.primary,
        search_by: search_params.search_by,
        employee_number: search_params.employee_number ?? "",
        last_name: search_params.last_name ?? "",
        first_name: search_params.first_name ?? "",
        middle_name: search_params.middle_name ?? "",
      });
      setIsHeaderSelected(false);
    }
  }, [search_params, fetchAndSetHumanResource]);

  const data = human_resource.body;
  // console.log("Human Resource Data: ", data);

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
    return (
      <HumanResourceCardContentDetails employeeDetails={employeeDetails!} />
    );
  }

  return (
    <CardContent>
      <div className="space-y-4">
        {data.map((employeeDetails: HumanResourceEmployeeDetails) => (
          <HumanResourceCardContentHeader
            key={employeeDetails.employeeNumber}
            employeeDetails={employeeDetails}
            setIsHeaderSelected={setIsHeaderSelected}
            setEmployeeDetails={setEmployeeDetails}
          />
        ))}
      </div>
    </CardContent>
  );
}
