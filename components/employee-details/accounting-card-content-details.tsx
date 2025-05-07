import { CardContent } from "@/components/ui/card";
import EmployeeDetailsLineCard from "./employee-details-line-card";

type Props = {
  employeeDetails: {
    empno: string;
    lastname: string;
    firstname: string;
    middlename: string;
    dob: string;
    gender: string;
    address: string;
    agency_tin: string;
    agency_gsis: string;
    agency_pagibig: string;
    agency_philhealth: string;
    agency_sss: string;
    appt: string;
    rate: string;
    date_hired: string;
    date_retired: string;
    office: string;
    charges: string;
    account: string;
  };
};

export default function AccountingCardContentDetails({
  employeeDetails,
}: Props) {
  function getAppointmentStatus(appt: string | undefined) {
    if (!appt) return appt;

    switch (appt.trim().toUpperCase()) {
      case "P":
        return "Plantilla";
      case "J":
        return "Job Order";
      case "C":
        return "Contract of Service";
      default:
        return appt;
    }
  }

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

      <EmployeeDetailsLineCard title="Birth Date" value={employeeDetails.dob} />

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

      <EmployeeDetailsLineCard title="Rate" value={employeeDetails.rate} />

      <EmployeeDetailsLineCard
        title="Date Hired"
        value={employeeDetails.date_hired}
      />

      <EmployeeDetailsLineCard
        title="Date Retired"
        value={employeeDetails.date_retired}
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
