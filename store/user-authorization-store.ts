import { fetchUserAuthorization } from "@/actions/authentication-actions";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserAuthorization = {
  body: any;
};

type UserAuthorizationState = {
  user_authorization: UserAuthorization;
  is_loading: boolean;
  error: string | null;

  setUserAuthorization: (data: UserAuthorization) => void;
  resetUserAuthorization: () => void;
  fetchAndSetUserAuthorization: (params: { user_id: string }) => Promise<void>;
};

export const useUserAuthorizationStore = create<UserAuthorizationState>()(
  persist(
    (set) => ({
      user_authorization: { body: {} },
      is_loading: false,
      error: null,

      setUserAuthorization: (data) => set({ user_authorization: data }),

      resetUserAuthorization: () =>
        set({
          user_authorization: { body: {} },
          is_loading: false,
          error: null,
        }),

      fetchAndSetUserAuthorization: async (params) => {
        set({ is_loading: true, error: null });

        try {
          const { body, error } = await fetchUserAuthorization(params);
          // console.log("Store User Authorization Body: ", body)
          // console.log("Store User Authorization Error: ", error)
          if (error) {
            set({ error: error, is_loading: false });
          } else {
            set({ user_authorization: { body }, is_loading: false });
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
      name: "user-authentication-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
