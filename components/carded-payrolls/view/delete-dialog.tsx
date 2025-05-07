import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

import DetailsCard from "../delete/details-card";
import RemarksForm from "../delete/remarks-form";

import { useEarningsDeductionsHeadersParamsStore } from "@/store/carded-payrolls/params-store";
import { useEarningsDeductionsHeadersPropsStore } from "@/store/carded-payrolls/props-store";
import { usePayrollsDeletionStore } from "@/store/carded-payrolls/payrolls-deletion-store";
import { useEarningsMandatoryDeductionsStore } from "@/store/carded-payrolls/earnings-mandatory-deductions-store";
import { useEarningsDeductionsStore } from "@/store/carded-payrolls/earnings-deductions-store";
import { useOtherDeductionsStore } from "@/store/carded-payrolls/other-deductions-store";
import { useRemittancesStore } from "@/store/carded-payrolls/remittances-store";

export function DeleteDialog() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const { earnings_deductions_headers_props } =
    useEarningsDeductionsHeadersPropsStore();
  const { setPayrollsDeletion } = usePayrollsDeletionStore();

  const earnings_mandatory_deductions_store =
    useEarningsMandatoryDeductionsStore();
  const earnings_deductions_store = useEarningsDeductionsStore();
  const other_deductions_store = useOtherDeductionsStore();
  const remittances_store = useRemittancesStore();

  function isLoading() {
    if (earnings_deductions_headers_params.payroll_type === "regular") {
      return (
        earnings_mandatory_deductions_store.isLoading ||
        other_deductions_store.isLoading ||
        remittances_store.isLoading
      );
    } else {
      return earnings_deductions_store.isLoading || remittances_store.isLoading;
    }
  }

  function initializePayrollsDeletion() {
    const props_list = [
      {
        status: "selected",
        period: earnings_deductions_headers_props.period ?? 0,
        carded_by: earnings_deductions_headers_props.carded_by ?? "",
        carded_date: earnings_deductions_headers_props.carded_date ?? "",
      },
    ];
    setPayrollsDeletion(props_list);
    console.log("Props List:", props_list);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          disabled={isLoading()}
          onClick={initializePayrollsDeletion}
        >
          <Trash2 />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You are going to delete <strong>1</strong> selected item(s) with the
            following details:
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4">
          <DetailsCard />
          <RemarksForm />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
