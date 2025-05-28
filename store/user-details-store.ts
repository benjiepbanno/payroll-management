import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserDetails = {
  host: string;
  userId: string;
  userName: string;
};

type UserDetailsState = {
  user_details: Partial<UserDetails>;
  setUserDetails: (data: Partial<UserDetails>) => void;
  resetUserDetails: () => void;
};

export const useUserDetailsStore = create<UserDetailsState>()(
  persist(
    (set) => ({
      user_details: {},
      setUserDetails: (data) =>
        set((state) => ({
          user_details: { ...state.user_details, ...data },
        })),
      resetUserDetails: () => set({ user_details: {} }),
    }),
    {
      name: "user-details-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
