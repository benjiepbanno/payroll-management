import { CardContent } from "@/components/ui/card";
import EmployeeDetailsLineCard from "./employee-details-line-card";
import { HumanResourceEmployeeDetails } from "@/lib/employee-details/types";
import { formatAmount, formatDate } from "@/lib/employee-details/utils";

type Props = {
  employeeDetails: HumanResourceEmployeeDetails;
};

export default function HumanResourceCardContentDetails({
  employeeDetails,
}: Props) {
  return (
    <CardContent>
      <EmployeeDetailsLineCard
        title="Employee Number"
        value={employeeDetails.employeeNumber}
      />

      <EmployeeDetailsLineCard
        title="Name"
        value={`${employeeDetails.employee.lastName}, ${employeeDetails.employee.firstName} ${employeeDetails.employee.middleName}`}
      />

      <EmployeeDetailsLineCard
        title="Birth Date"
        value={formatDate(employeeDetails.birthDate)}
      />

      <EmployeeDetailsLineCard title="Sex" value={employeeDetails.sex} />

      <EmployeeDetailsLineCard
        title="Employment Type"
        value={employeeDetails.currentAppointment.employmentType}
      />

      <EmployeeDetailsLineCard
        title="Office"
        value={employeeDetails.currentAppointment.officeName}
      />

      <EmployeeDetailsLineCard
        title="Position"
        value={employeeDetails.currentAppointment.position}
      />

      <EmployeeDetailsLineCard
        title="Program Code"
        value={employeeDetails.currentAppointment.programCode}
      />

      <EmployeeDetailsLineCard
        title="Program"
        value={employeeDetails.currentAppointment.program}
      />

      {employeeDetails.currentAppointment.employmentType !== "Plantilla" && (
        <EmployeeDetailsLineCard
          title="Expense Code"
          value={employeeDetails.currentAppointment.expenseCode}
        />
      )}

      <EmployeeDetailsLineCard
        title="Division"
        value={employeeDetails.currentAppointment.division}
      />

      {employeeDetails.currentAppointment.employmentType === "Plantilla" ? (
        <>
          <EmployeeDetailsLineCard
            title="Annual Salary"
            value={formatAmount(
              employeeDetails.currentEmployment.actualSalaryAnnual
            )}
          />

          <EmployeeDetailsLineCard
            title="Monthly Salary"
            value={formatAmount(
              employeeDetails.currentEmployment.actualSalaryMonthly
            )}
          />

          <EmployeeDetailsLineCard
            title="Appointment Status"
            value={employeeDetails.currentEmployment.statusAppointment}
          />

          <EmployeeDetailsLineCard
            title="Appointment Remarks"
            value={employeeDetails.currentEmployment.remarksAppointment}
          />

          <EmployeeDetailsLineCard
            title="Appointment Date"
            value={employeeDetails.originalAppointmentDate}
          />
        </>
      ) : (
        <>
          <EmployeeDetailsLineCard
            title="Date From"
            value={formatDate(employeeDetails.currentEmployment.dateFrom)}
          />

          <EmployeeDetailsLineCard
            title="Date To"
            value={formatDate(employeeDetails.currentEmployment.dateTo)}
          />

          <EmployeeDetailsLineCard
            title="Rate"
            value={formatAmount(employeeDetails.currentEmployment.rate)}
          />

          <EmployeeDetailsLineCard
            title="PhilHealth"
            value={employeeDetails.philHealth}
          />
        </>
      )}
    </CardContent>
  );
}
