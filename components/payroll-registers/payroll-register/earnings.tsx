import { EarningDetails } from "@/lib/payroll-registers/types";

type Props = {
  earning_details: EarningDetails[];
};

export default function PayrollRegisterPeriodEmployeeEarnings({
  earning_details,
}: Props) {
  return (
    <div className="col-span-5">
      {earning_details.map((earning) => (
        <div className="flex justify-between" key={earning.type}>
          <span>{earning.code_name}</span>
          <span>{earning.amount}</span>
        </div>
      ))}
    </div>
  );
}
