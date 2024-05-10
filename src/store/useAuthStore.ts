import { create } from "zustand";
import { persist } from "zustand/middleware";
type State = {
  token: string | null;
  isAuth: boolean;
};
type Actions = {
  setToken: (token: string) => void;
};
export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      isAuth: false,
      setToken: (token: string) => {
        set((state) => ({
          token: token,
          isAuth: !!token,
        }));
      },
    }),
    {
      name: "auth",
    }
  )
);
