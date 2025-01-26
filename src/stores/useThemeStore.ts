import { create } from "zustand";
import { type LinkrTheme } from "@/types/linkr-themes.type";
import { LinkrClassicTheme } from "@/themes/classic-theme";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: LinkrTheme;
  setTheme: (newTheme: LinkrTheme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: LinkrClassicTheme,
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "theme-storage",
    },
  ),
);
