import { EmployeeDetails } from "@/lib/payroll-registers/types";
import PayrollRegisterPeriodEmployeeEarnings from "./earnings";
import PayrollRegisterPeriodEmployeeOtherDeductions from "./other-deductions";
import PayrollRegisterPeriodEmployeeStatutoryDeductions from "./statutory-deductions";
import PayrollRegisterPeriodEmployeeSummary from "./employee-summary";

type Props = {
  employee_index: number;
  employee_details: EmployeeDetails;
};

export default function PayrollRegisterPeriodEmployee({
  employee_index,
  employee_details,
}: Props) {
  console.log(
    "PayrollRegisterPeriodEmployee component mounted, employee details:",
    employee_details
  );

  return (
    <div className="grid grid-cols-30 gap-x-2 text-sm border">
      <div className="text-center">{employee_index + 1}</div>
      <div className="col-span-2">{employee_details.employee_number}</div>
      <div className="col-span-3">{employee_details.employee_name}</div>

      <PayrollRegisterPeriodEmployeeEarnings earning_details={employee_details.earnings} />

      <PayrollRegisterPeriodEmployeeOtherDeductions deduction_details={employee_details.other_deductions} />

      <PayrollRegisterPeriodEmployeeStatutoryDeductions statutory_deductions={employee_details.statutory_deductions} />

      <PayrollRegisterPeriodEmployeeSummary employee_summary={employee_details.employee_summary} />
    </div>
  );
}
