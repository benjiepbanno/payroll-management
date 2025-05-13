import { EmployeeSummary } from "@/lib/payroll-registers/types";

type Props = {
  employee_summary: EmployeeSummary;
};

export default function PayrollRegisterPeriodEmployeeSummary({
  employee_summary,
}: Props) {
  return (
    <div className="col-span-7">
      <div className="flex justify-between">
        <span>Gross Earnings</span>
        <span>{formatAmount(employee_summary.gross_earnings)}</span>
      </div>
      <div className="flex justify-between">
        <span>Other Deductions</span>
        <span>{formatAmount(employee_summary.other_deductions)}</span>
      </div>
      <div className="flex justify-between">
        <span>Statutory Deductions - Personal Share</span>
        <span>
          {formatAmount(employee_summary.statutory_deductions_personal)}
        </span>
      </div>
      <div className="flex justify-between">
        <span>Statutory Deductions - Government Share</span>
        <span>{formatAmount(employee_summary.statutory_deductions_govt)}</span>
      </div>
      <div className="grid grid-cols-7 gap-x-2">
        <div className="col-span-5 font-bold text-right">Net Pay</div>
        <div className="col-span-2 text-right">
          {formatAmount(employee_summary.net_pay)}
        </div>
      </div>
    </div>
  );
}

function formatAmount(amount: number): string {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
