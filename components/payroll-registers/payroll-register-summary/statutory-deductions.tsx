import { DeductionDetails } from "@/lib/payroll-registers/types";
import { formatAmount } from "@/lib/payroll-registers/utils";

type Props = {
  deduction_details: DeductionDetails[];
};

export default function PayrollRegisterSummaryPeriodStatutoryDeductions({
  deduction_details,
}: Props) {
  return (
    <div className="col-span-7">
      {deduction_details.map((deduction) => (
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
