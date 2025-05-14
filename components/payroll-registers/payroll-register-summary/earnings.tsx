import { EarningDetails } from "@/lib/payroll-registers/types";
import { formatAmount } from "@/lib/payroll-registers/utils";

type Props = {
  earning_details: EarningDetails[];
}


export default function PayrollRegisterSummaryPeriodEarnings({ earning_details }: Props) {
  return (
    <div className="col-span-5">
      {earning_details.map((earning) => (
        <div className="flex justify-between" key={earning.type}>
          <span>{earning.code_name}</span>
          <span>{formatAmount(earning.amount)}</span>
        </div>
      ))}
    </div>
  )
}
