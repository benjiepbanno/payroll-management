import { Button } from "@/components/ui/button";
import { HumanResourceEmployeeDetails } from "@/lib/employee-details/types";
import { ChevronRight } from "lucide-react";

type Props = {
  employeeDetails: HumanResourceEmployeeDetails
  setIsHeaderSelected: (value: boolean) => void;
  setEmployeeDetails: (value: HumanResourceEmployeeDetails) => void;
};

export default function HumanResourceCardContentHeader({
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
          <strong>{employeeDetails.employeeNumber}</strong>
        </div>
        <div>
          {employeeDetails.employee.lastName},{" "}
          {employeeDetails.employee.firstName}{" "}
          {employeeDetails.employee.middleName}
        </div>
      </div>
      <Button onClick={selectHeader} variant="outline" size="icon">
        <ChevronRight />
      </Button>
    </div>
  );
}
