"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useSearchParamsStore } from "@/store/employee-details/search-params-store";

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
import { Search } from "lucide-react";

const formSchema = z.object({
  primary: z.string().min(1, "Required"),
  search_by: z.string().min(1, "Required"),
  employee_number: z.string(),
  last_name: z.string(),
  first_name: z.string(),
  middle_name: z.string(),
});

export default function SearchForm() {
  const { search_params, setSearchParams } = useSearchParamsStore();
  const [isSearchByNumber, setIsSearchByNumber] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      primary: search_params.primary || "",
      search_by: search_params.search_by || "",
      employee_number: search_params.employee_number || "",
      last_name: search_params.last_name || "",
      first_name: search_params.first_name || "",
      middle_name: search_params.middle_name || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log("Search Form: ", values);
    setSearchParams(values);
  }

  function resetForm() {
    form.reset({
      primary: form.getValues("primary"),
      search_by: form.getValues("search_by"),
      employee_number: "",
      last_name: "",
      first_name: "",
      middle_name: "",
    });
    // console.log("Form reset to: ", form.getValues());
  }

  // console.log("Default Search Params: ", search_params);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 items-end"
      >
        <FormField
          control={form.control}
          name="primary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select primary" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accounting">Accounting</SelectItem>
                    <SelectItem value="human-resource">
                      Human Resource
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="search_by"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search By</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setIsSearchByNumber(value === "employee-number");
                    resetForm();
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee-number">
                      Employee Number
                    </SelectItem>
                    <SelectItem value="employee-name">Employee Name</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isSearchByNumber ? (
          <>
            <FormField
              control={form.control}
              name="employee_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input employee number"
                      {...field}
                      className="w-[200px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <>
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input last name"
                      {...field}
                      className="w-[200px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input first name"
                      {...field}
                      className="w-[200px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="middle_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input middle name"
                      {...field}
                      className="w-[200px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <Button type="submit"  className="w-32">
          <Search />
          Search
        </Button>
      </form>
    </Form>
  );
}
