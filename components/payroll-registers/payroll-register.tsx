import { Separator } from "../ui/separator";
import PayrollRegisterTableHeaders from "./payroll-register-table-headers";
import PayrollRegisterHeader from "./payroll-register-header";

export default function PayrollRegister() {
  return (
    <div className="bg-sky-100">
      <PayrollRegisterHeader />
      <br />
      <PayrollRegisterTableHeaders />

    </div>
  );
}
