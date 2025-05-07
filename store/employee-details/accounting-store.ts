import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { fetchAccountingEmployeeDetails } from "@/actions/employee-details-actions";

type Accounting = {
  body: any;
};

type AccountingState = {
  accounting: Accounting;
  is_loading: boolean;
  error: string | null;

  setAccounting: (data: Accounting) => void;
  resetAccounting: () => void;
  fetchAndSetAccounting: (params: {
    primary: string;
    search_by: string;
    employee_number: string;
    last_name: string;
    first_name: string;
    middle_name: string;
  }) => Promise<void>;
};

export const useAccountingStore = create<AccountingState>()(
  persist(
    (set) => ({
      accounting: { body: [] },
      is_loading: false,
      error: null,

      setAccounting: (data) => set({ accounting: data }),

      resetAccounting: () =>
        set({
          accounting: { body: [] },
          is_loading: false,
          error: null,
        }),

      fetchAndSetAccounting: async (params) => {
        set({ is_loading: true, error: null });

        try {
          const { body, error } = await fetchAccountingEmployeeDetails(params);
          console.log("Store Accounting Data: ", body);
          console.log("Store Accounting Error: ", error);

          if (error) {
            set({ error: error, is_loading: false });
          } else {
            set({ accounting: { body }, is_loading: false });
          }
        } catch (error) {
          set({
            error: "An error occurred while fetching data",
            is_loading: false,
          });
        }
      },
    }),
    {
      name: "employee-details-accounting-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
