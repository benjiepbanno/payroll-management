import { EmployeeDetails, PeriodDetails } from "@/lib/payroll-registers/types";
import PayrollRegisterPeriodEmployee from "./period-employee";

type Props = {
  period_details: PeriodDetails;
};

export default function PayrollRegisterPeriod({ period_details }: Props) {
  const formattedPeriod = formatPeriod(period_details.period);

  return (
    <div className="space-y-1">
      <div className="text-sm">
        <span className="font-bold">Period: </span>
        {formattedPeriod}
      </div>

      {period_details.employees.map(
        (employee: EmployeeDetails, index: number) => (
          <PayrollRegisterPeriodEmployee
            key={employee.employee_number}
            employee_index={index}
            employee_details={employee}
          />
        )
      )}
    </div>
  );
}

function formatPeriod(period: string): string {
  if (!/^\d{6}$/.test(period)) return "Invalid period";

  const year = period.slice(0, 4);
  const month = period.slice(4, 6);

  const monthNumber = parseInt(month, 10);
  if (monthNumber < 1 || monthNumber > 12) return "Invalid period";

  const date = new Date(Number(year), monthNumber - 1); // month is 0-indexed
  return `${date.toLocaleString("default", { month: "long" })} ${year}`;
}
