import { Badge } from "@/components/ui/badge";
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
        {check_details.number && check_details.date && check_details.amount ? (
          <>
            <span>Chck#: {check_details.number} </span>
            <span>Dated: {check_details.date} </span>
            <span>({formatAmount(check_details.amount)})</span>
          </>
        ) : (
          <Badge variant="destructive">not found</Badge>
        )}
      </div>

      <div className="text-sm">
        <span className="font-bold">Claimant: </span>
        {claimant ? (
          <>{claimant}</>
        ) : (
          <Badge variant="destructive">not found</Badge>
        )}
      </div>

      <div className="text-sm">
        <span className="font-bold">Reference Number:</span> {reference_number}
      </div>
    </div>
  );
}
