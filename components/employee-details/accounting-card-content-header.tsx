import { Button } from "@/components/ui/button";
import { AccountingEmployeeDetails } from "@/lib/employee-details/types";
import { ChevronRight } from "lucide-react";

type Props = {
  employeeDetails: AccountingEmployeeDetails;
  setIsHeaderSelected: (value: boolean) => void;
  setEmployeeDetails: (value: AccountingEmployeeDetails) => void;
};

export default function AccountingCardContentHeader({
  employeeDetails,
  setIsHeaderSelected,
  setEmployeeDetails,
}: Props) {
  function selectHeader() {
    setIsHeaderSelected(true);
    setEmployeeDetails(employeeDetails);
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <div>
          <strong>{employeeDetails.empno}</strong>
        </div>
        <div>
          {employeeDetails.lastname}, {employeeDetails.firstname}{" "}
          {employeeDetails.middlename}
        </div>
      </div>
      <Button onClick={selectHeader} variant="outline" size="icon">
        <ChevronRight />
      </Button>
    </div>
  );
}
