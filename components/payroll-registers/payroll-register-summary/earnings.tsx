import { EarningDetails } from "@/lib/payroll-registers/types";

type Props = {
  earning_details: EarningDetails[];
}


export default function PayrollRegisterSummaryPeriodEarnings({ earning_details }: Props) {

  console.log(
    "PayrollRegisterSummaryPeriodEarnings component mounted, earning details:",
    earning_details
  );
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

function formatAmount(amount: number): string {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}