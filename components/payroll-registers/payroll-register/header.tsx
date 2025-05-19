import { CheckDetails } from "@/lib/payroll-registers/types";
import { formatAmount } from "@/lib/payroll-registers/utils";

type Props = {
  check_details: CheckDetails;
  claimant: string;
  reference_number: string;
};

export default function PayrollRegisterHeader({
  check_details,
  claimant,
  reference_number,
}: Props) {
  return (
    <div className="">
      <div className="font-bold text-center">General Payroll Register</div>
      <div className="text-sm text-center">
        <span className="font-bold">Check Details </span>
        <span>Chck#: {check_details.number} </span>
        <span>Dated: {check_details.date} </span>
        <span>({formatAmount(check_details.amount)})</span>
      </div>

      <div className="text-sm">
        <span className="font-bold">Claimant:</span> {claimant}
      </div>
      <div className="text-sm">
        <span className="font-bold">Reference Number:</span> {reference_number}
      </div>
    </div>
  );
}
