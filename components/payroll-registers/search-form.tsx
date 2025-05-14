"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
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

import { getClientIpAction } from "@/actions/payroll-registers-actions";
import { useSearchParamsStore } from "@/store/payroll-registers/search-params-store";

const formSchema = z.object({
  fiscal_year: z.string().min(4, "Enter valid year").max(4, "Enter valid year"),
  fund: z.string().min(1, "Required"),
  advno: z.string().min(1, "Required"),
  tracking_number: z.string().min(1, "Required"),
});

export default function SearchForm() {
  const { search_params, setSearchParams } = useSearchParamsStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fiscal_year: search_params.fiscal_year ||"",
      fund: search_params.fund || "",
      advno: search_params.advno || "",
      tracking_number: search_params.tracking_number || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSearchParams(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-end"
      >
        <FormField
          control={form.control}
          name="fiscal_year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fiscal Year</FormLabel>
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

        <FormField
          control={form.control}
          name="tracking_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tracking Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter tracking number"
                  className="w-[200px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-32">
          <Search />
          Search
        </Button>
      </form>
    </Form>
  );
}
