"use client";

import { useState } from "react";
import { Row } from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { earningsDeductionsHeadersSchema } from "@/lib/carded-payrolls/schema";
import { DataTableRowDelete } from "./data-table-row-delete";

import { useEarningsDeductionsHeadersPropsStore } from "@/store/carded-payrolls/props-store";
import { usePayrollsDeletionStore } from "@/store/carded-payrolls/payrolls-deletion-store";
import { useToggleComponentStore } from "@/store/carded-payrolls/toggle-component-store";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const header = earningsDeductionsHeadersSchema.parse(row.original);
  const { setProps } = useEarningsDeductionsHeadersPropsStore();
  const { setPayrollsDeletion } = usePayrollsDeletionStore();
  const { value, setValue } = useToggleComponentStore();

  const [alertOpen, setAlertOpen] = useState(false);

  function viewDetails() {
    console.log("RowActions Header:", header);
    setProps(header);
    setValue(!value);
    console.log(value);
  }

  function deletePayroll() {
    initializePayrollsDeletion();
    setAlertOpen(true);
  }

  function initializePayrollsDeletion() {
    const props_list = [
      {
        status: "selected",
        period: header.period,
        carded_by: header.carded_by,
        carded_date: header.carded_date,
      },
    ];
    setPayrollsDeletion(props_list);
    console.log("Props List:", props_list);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            onClick={() => {
              viewDetails();
            }}
          >
            View details
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              deletePayroll();
            }}
          >
            Delete payroll
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {alertOpen && (
        <DataTableRowDelete open={alertOpen} setOpen={setAlertOpen} />
      )}
    </>
  );
}
