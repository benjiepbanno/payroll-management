import { PeriodDetails } from "@/lib/payroll-registers/types";
import PayrollRegisterSummaryPeriodEarnings from "./earnings";
import PayrollRegisterSummaryPeriodOtherDeductions from "./other-deductions";
import PayrollRegisterSummaryPeriodStatutoryDeductions from "./statutory-deductions";
import PayrollRegisterSummaryPeriodSummary from "./period-summary";

type Props = {
  period_details: PeriodDetails;
};

export default function PayrollRegisterSummaryPeriod({
  period_details,
}: Props) {
  const formattedPeriod = formatPeriod(period_details.period);

  return (
    <div className="space-y-1">
      <div className="text-sm">
        <span className="font-bold">Period: </span>
        {formattedPeriod}
      </div>

      <div className="grid grid-cols-30 gap-x-2 p-1 text-sm border">
        <div className="col-start-2 col-span-5 text-center">
          {period_details.period_summary.number_of_employees}
        </div>

        <PayrollRegisterSummaryPeriodEarnings
          earning_details={period_details.period_summary.earnings}
        />

        <PayrollRegisterSummaryPeriodOtherDeductions
          deduction_details={period_details.period_summary.other_deductions}
        />

        <PayrollRegisterSummaryPeriodStatutoryDeductions
          deduction_details={period_details.period_summary.statutory_deductions}
        />

        <PayrollRegisterSummaryPeriodSummary
          period_summary={period_details.period_summary.summary}
        />
      </div>
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
