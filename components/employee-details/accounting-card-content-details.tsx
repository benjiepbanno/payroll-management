import { CardContent } from "@/components/ui/card";
import EmployeeDetailsLineCard from "./employee-details-line-card";
import { AccountingEmployeeDetails } from "@/lib/employee-details/types";
import {
  formatAmount,
  formatDate,
  getAppointmentStatus,
} from "@/lib/employee-details/utils";

type Props = {
  employeeDetails: AccountingEmployeeDetails;
};

export default function AccountingCardContentDetails({
  employeeDetails,
}: Props) {
  return (
    <CardContent>
      <EmployeeDetailsLineCard
        title="Employee Number"
        value={employeeDetails.empno}
      />

      <EmployeeDetailsLineCard
        title="Name"
        value={`${employeeDetails.lastname}, ${employeeDetails.firstname} ${employeeDetails.middlename}`}
      />

      <EmployeeDetailsLineCard
        title="Birth Date"
        value={formatDate(employeeDetails.dob)}
      />

      <EmployeeDetailsLineCard title="Sex" value={employeeDetails.gender} />

      <EmployeeDetailsLineCard
        title="Address"
        value={employeeDetails.address}
      />

      <EmployeeDetailsLineCard title="TIN" value={employeeDetails.agency_tin} />

      <EmployeeDetailsLineCard
        title="GSIS"
        value={employeeDetails.agency_gsis}
      />

      <EmployeeDetailsLineCard
        title="Pag-ibig"
        value={employeeDetails.agency_pagibig}
      />

      <EmployeeDetailsLineCard
        title="PhilHealth"
        value={employeeDetails.agency_philhealth}
      />

      <EmployeeDetailsLineCard title="SSS" value={employeeDetails.agency_sss} />

      <EmployeeDetailsLineCard
        title="Appointment Status"
        value={getAppointmentStatus(employeeDetails.appt) || ""}
      />

      <EmployeeDetailsLineCard
        title="Rate"
        value={formatAmount(employeeDetails.rate)}
      />

      <EmployeeDetailsLineCard
        title="Date Hired"
        value={formatDate(employeeDetails.date_hired)}
      />

      <EmployeeDetailsLineCard
        title="Date Retired"
        value={formatDate(employeeDetails.date_retired)}
      />

      <EmployeeDetailsLineCard title="Office" value={employeeDetails.office} />

      <EmployeeDetailsLineCard
        title="Charges"
        value={employeeDetails.charges}
      />

      <EmployeeDetailsLineCard
        title="Account Code"
        value={employeeDetails.account}
      />
    </CardContent>
  );
}
