import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { fetchHumanResourceEmployeeDetails } from "@/actions/employee-details-actions";

type HumanResource = {
  body: any;
};

type HumanResourceState = {
  human_resource: HumanResource;
  is_loading: boolean;
  error: string | null;

  setHumanResource: (data: HumanResource) => void;
  resetHumanResource: () => void;
  fetchAndSetHumanResource: (params: {
    primary: string;
    search_by: string;
    employee_number: string;
    last_name: string;
    first_name: string;
    middle_name: string;
  }) => Promise<void>;
};

export const useHumanResourceStore = create<HumanResourceState>()(
  persist(
    (set) => ({
      human_resource: { body: {} },
      is_loading: false,
      error: null,

      setHumanResource: (data) => set({ human_resource: data }),

      resetHumanResource: () =>
        set({
          human_resource: { body: {} },
          is_loading: false,
          error: null,
        }),

      fetchAndSetHumanResource: async (params) => {
        set({ is_loading: true, error: null });

        try {
          const { body, error } = await fetchHumanResourceEmployeeDetails(
            params
          );

          if (error) {
            set({ error: error, is_loading: false });
          } else {
            set({ human_resource: body, is_loading: false });
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
      name: "employee-details-human-resource-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
