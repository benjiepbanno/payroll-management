import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SearchParams = {
  primary: string;
  search_by: string;
  employee_number: string;
  last_name: string;
  first_name: string;
  middle_name: string;
};

type SearchParamsState = {
  search_params: Partial<SearchParams>;
  setSearchParams: (data: Partial<SearchParams>) => void;
  resetSearchParams: () => void;
};

export const useSearchParamsStore = create<SearchParamsState>()(
  persist(
    (set) => ({
      search_params: {},
      setSearchParams: (data) =>
        set((state) => ({
          search_params: { ...state.search_params, ...data },
        })),
      resetSearchParams: () => set({ search_params: {} }),
    }),
    {
      name: "employee-details-search-params-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
