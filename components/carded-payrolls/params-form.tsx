"use client";

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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import { useToggleComponentStore } from "@/store/carded-payrolls/toggle-component-store";
import { useEarningsDeductionsHeadersParamsStore } from "@/store/carded-payrolls/params-store";
import { useEarningsDeductionsHeadersStore } from "@/store/carded-payrolls/earnings-deductions-headers-store";

const formSchema = z.object({
  appointment_status: z.string().min(1, "Required"),
  year: z.string().min(4, "Enter valid year"),
  payroll_type: z.string().min(1, "Required"),
  advno: z.string().min(1, "Required"),
  fund: z.string().min(1, "Required"),
});

export default function ParamsForm() {
  const { value, toggleValue } = useToggleComponentStore();
  const { earnings_deductions_headers_params, setParams } =
    useEarningsDeductionsHeadersParamsStore();
  const { isLoading } = useEarningsDeductionsHeadersStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appointment_status:
        earnings_deductions_headers_params.appointment_status || "",
      year: earnings_deductions_headers_params.year?.toString() || "",
      payroll_type: earnings_deductions_headers_params.payroll_type || "",
      advno: earnings_deductions_headers_params.advno || "",
      fund: earnings_deductions_headers_params.fund || "",
    },
  });

  async function onSubmit(values: any) {
    if (value) toggleValue();
    // console.log("Params Form: ", values);
    setParams(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-end"
      >
        {/* Appointment Status */}
        <FormField
          control={form.control}
          name="appointment_status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appointment Status</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plantilla">Plantilla</SelectItem>
                    <SelectItem value="jocos">JOCOS</SelectItem>
                    <SelectItem value="non-office">Non-Office</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Year */}
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  placeholder="Enter year"
                  className="w-[200px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Payroll Type */}
        <FormField
          control={form.control}
          name="payroll_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payroll Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select payroll type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="special">Special</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ADV Number */}
        <FormField
          control={form.control}
          name="advno"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ADV Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter adv number"
                  className="w-[200px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fund */}
        <FormField
          control={form.control}
          name="fund"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fund Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select fund type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GF">General Fund</SelectItem>
                    <SelectItem value="SEF">Special Education Fund</SelectItem>
                    <SelectItem value="TF">Trust Fund</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-32" disabled={isLoading}>
          <Search />
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </form>
    </Form>
  );
}
