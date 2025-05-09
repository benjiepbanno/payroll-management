import { Separator } from "../ui/separator";
import PayrollRegisterSummaryHeader from "./payroll-register-summary-header";
import PayrollRegisterSummaryTableHeaders from "./payroll-register-summary-table-headers";

export default function PayrollRegisterSummary() {
  return (
    <div className="bg-sky-100">
      <PayrollRegisterSummaryHeader />
      <br />
      <PayrollRegisterSummaryTableHeaders />
      
    </div>
  );
}
