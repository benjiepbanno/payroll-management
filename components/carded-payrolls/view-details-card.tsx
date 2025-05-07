import { useToggleComponentStore } from "@/store/carded-payrolls/toggle-component-store";
import { useEarningsDeductionsHeadersParamsStore } from "@/store/carded-payrolls/params-store";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import { DeleteDialog } from "./view/delete-dialog";
import HeaderCard from "./view/header-card";
import { RegularTabs, SpecialTabs } from "./view/tabs";

export default function ViewDetailsCard() {
  const { toggleValue } = useToggleComponentStore();
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();

  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <Button variant="secondary" onClick={toggleValue}>
          <ChevronLeft />
          Back
        </Button>

        <DeleteDialog />
      </div>

      <HeaderCard />

      {earnings_deductions_headers_params.payroll_type === "regular" ? (
        <RegularTabs />
      ) : (
        <SpecialTabs />
      )}
    </div>
  );
}
