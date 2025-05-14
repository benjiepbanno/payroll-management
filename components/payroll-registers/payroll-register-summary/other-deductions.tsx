import { DeductionDetails } from "@/lib/payroll-registers/types";
import { formatAmount } from "@/lib/payroll-registers/utils";

type Props = {
  deduction_details: DeductionDetails[];
};

export default function PayrollRegisterSummaryPeriodOtherDeductions({
  deduction_details,
}: Props) {
  return (
    <div className="col-span-5">
      {deduction_details.map((deduction) => (
        <div className="flex justify-between" key={deduction.code}>
          <span>{deduction.code_name}</span>
          <span>{formatAmount(deduction.personal)}</span>
        </div>
      ))}
    </div>
  );
}
