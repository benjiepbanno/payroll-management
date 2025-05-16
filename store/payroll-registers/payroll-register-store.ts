import { fetchPayrollRegister } from "@/actions/payroll-registers-actions";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type PayrollRegister = {
  body: any;
};

type PayrollRegisterState = {
  payroll_register: PayrollRegister;
  is_loading: boolean;
  error: string | null;

  setPayrollRegister: (data: PayrollRegister) => void;
  resetPayrollRegister: () => void;
  fetchAndSetPayrollRegister: (params: {
    fiscal_year: string;
    fund: string;
    advno: string;
    tracking_number: string;
  }) => Promise<void>;
};

export const usePayrollRegisterStore = create<PayrollRegisterState>()(
  persist(
    (set) => ({
      payroll_register: { body: {} },
      is_loading: false,
      error: null,

      setPayrollRegister: (data) => set({ payroll_register: data }),

      resetPayrollRegister: () =>
        set({
          payroll_register: { body: {} },
          is_loading: false,
          error: null,
        }),

      fetchAndSetPayrollRegister: async (params) => {
        set({ is_loading: true, error: null });

        try {
          const { body, error } = await fetchPayrollRegister(params);

          if (error) {
            set({ error: error, is_loading: false });
          } else {
            set({ payroll_register: { body }, is_loading: false });
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
      name: "payroll-registers-payroll-register-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
