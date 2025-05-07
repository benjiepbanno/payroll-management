import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type Props = {
  employeeDetails: {
    empno: string;
    lastname: string;
    firstname: string;
    middlename: string;
  };
  setIsHeaderSelected: (value: boolean) => void;
  setEmployeeDetails: (value: any) => void;
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
