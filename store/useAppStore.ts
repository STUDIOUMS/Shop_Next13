import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UseAppStore {
  message: string | undefined;
  setMessage: (data: string | undefined) => void;
}

export const useAppStore = create<UseAppStore>()(
  devtools((set) => ({
    message: undefined,
    setMessage: (message) => set(() => ({ message })),
  }))
);
