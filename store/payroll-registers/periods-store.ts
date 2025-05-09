import { fetchPayrollRegisterPeriods } from "@/actions/payroll-registers-actions";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Periods = {
  body: any;
};

type PeriodsState = {
  periods: Periods;
  is_loading: boolean;
  error: string | null;

  setPeriods: (data: Periods) => void;
  resetPeriods: () => void;
  fetchAndSetPeriods: (params: {
    fiscal_year: string;
    fund: string;
    advno: string;
    tracking_number: string;
  }) => Promise<void>;
};

export const usePeriodsStore = create<PeriodsState>()(
  persist(
    (set) => ({
      periods: { body: [] },
      is_loading: false,
      error: null,

      setPeriods: (data) => set({ periods: data }),

      resetPeriods: () =>
        set({
          periods: { body: [] },
          is_loading: false,
          error: null,
        }),

      fetchAndSetPeriods: async (params) => {
        set({ is_loading: true, error: null });

        try {
          const { body, error } = await fetchPayrollRegisterPeriods(params);
          console.log("Store Periods Data: ", body);
          console.log("Store Periods Error: ", error);

          if (error) {
            set({ error: error, is_loading: false });
          } else {
            set({ periods: { body }, is_loading: false });
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
      name: "payroll-registers-periods-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
