import { DeductionDetails } from "@/lib/payroll-registers/types";
import { formatAmount } from "@/lib/payroll-registers/utils";

type Props = {
  statutory_deductions: DeductionDetails[];
};

export default function PayrollRegisterPeriodEmployeeStatutoryDeductions({
  statutory_deductions,
}: Props) {
  return (
    <div className="col-span-7">
      {statutory_deductions.map((deduction) => (
        <div className="grid grid-cols-7 gap-x-2" key={deduction.code}>
          <div className="col-span-3">{deduction.code_name}</div>
          <div className="col-span-2 text-right">
            {formatAmount(deduction.personal)}
          </div>
          <div className="col-span-2 text-right">
            {formatAmount(deduction.govt)}
          </div>
        </div>
      ))}
    </div>
  );
}
