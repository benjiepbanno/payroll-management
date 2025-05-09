import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SearchParams = {
  fiscal_year: string;
  fund: string;
  advno: string;
  tracking_number: string;
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
      name: "payroll-registers-search-params-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);