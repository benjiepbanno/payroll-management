import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useEarningsDeductionsHeadersParamsStore } from "@/store/carded-payrolls/params-store";
import { usePayrollsDeletionStore } from "@/store/carded-payrolls/payrolls-deletion-store";
import { useEarningsDeductionsHeadersStore } from "@/store/carded-payrolls/earnings-deductions-headers-store";
import { useToggleComponentStore } from "@/store/carded-payrolls/toggle-component-store";
import { useUserDetailsStore } from "@/store/user-details-store";


const formSchema = z.object({
  user: z.string().min(1, "Required"),
  remarks: z.string().min(1, "Required"),
});

export default function RemarksForm() {
  const { earnings_deductions_headers_params } =
    useEarningsDeductionsHeadersParamsStore();
  const {
    payrolls_deletion,
    updatePayrollsDeletionStatus,
    deleteAndUpdatePayrollsDeletion,
  } = usePayrollsDeletionStore();
  const { fetchAndSetEarningsDeductionsHeaders } =
    useEarningsDeductionsHeadersStore();
    
  const { setValue } = useToggleComponentStore();
  const {user_details} = useUserDetailsStore()

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: user_details.userName,
      remarks: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setDone(false);
    setLoading(true);
    updatePayrollsDeletionStatus("pending");

    if (
      earnings_deductions_headers_params.appointment_status &&
      earnings_deductions_headers_params.year &&
      earnings_deductions_headers_params.payroll_type &&
      earnings_deductions_headers_params.advno &&
      earnings_deductions_headers_params.fund
    ) {
      await Promise.all(
        payrolls_deletion.map(({ period, carded_by, carded_date }) =>
          deleteAndUpdatePayrollsDeletion({
            appointment_status:
              earnings_deductions_headers_params.appointment_status ?? "",
            year: earnings_deductions_headers_params.year ?? 0,
            payroll_type: earnings_deductions_headers_params.payroll_type ?? "",
            period: period,
            advno: earnings_deductions_headers_params.advno ?? "",
            carded_by: carded_by,
            carded_date: carded_date,
            fund: earnings_deductions_headers_params.fund ?? "",
            user: data.user,
            remarks: data.remarks,
          })
        )
      );
    }

    setLoading(false);
    setDone(true);
  }

  function refreshDashboard() {
    if (done) {
      if (
        earnings_deductions_headers_params.appointment_status &&
        earnings_deductions_headers_params.year &&
        earnings_deductions_headers_params.payroll_type &&
        earnings_deductions_headers_params.advno &&
        earnings_deductions_headers_params.fund
      ) {
        fetchAndSetEarningsDeductionsHeaders({
          appointment_status:
            earnings_deductions_headers_params.appointment_status,
          year: earnings_deductions_headers_params.year,
          payroll_type: earnings_deductions_headers_params.payroll_type,
          advno: earnings_deductions_headers_params.advno,
          fund: earnings_deductions_headers_params.fund,
        });
      }
      setValue(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User</FormLabel>
                <FormControl>
                  <Input {...field} className="max-h-[150px]" disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <Textarea {...field} className="max-h-[150px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button
                type="button"
                variant="secondary"
                disabled={loading}
                onClick={refreshDashboard}
              >
                Close
              </Button>
            </AlertDialogCancel>
            <Button
              type="submit"
              variant="destructive"
              disabled={loading || done}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </div>
      </form>
    </Form>
  );
}
