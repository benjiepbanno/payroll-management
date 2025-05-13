import { DeductionDetails } from "@/lib/payroll-registers/types";

type Props = {
  deduction_details: DeductionDetails[];
}


export default function PayrollRegisterPeriodEmployeeOtherDeductions({ deduction_details }: Props) {
  return (
    <div className="col-span-5">
      {deduction_details.map((deduction) => (
        <div className="flex justify-between" key={deduction.code}>
          <span>{deduction.code_name}</span>
          <span>{deduction.personal}</span>
        </div>
      ))}
    </div>
  );
}
