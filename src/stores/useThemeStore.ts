import { create } from "zustand";
import { type LinkrTheme } from "@/types/linkr-themes.type";
import { LinkrClassicTheme } from "@/themes/classic-theme";
import { persist } from "zustand/middleware";
import { Layouts } from "react-grid-layout";

interface ThemeState {
  theme: LinkrTheme;

  // setters
  setTheme: (newTheme: LinkrTheme) => void;

  // actions
  updateLayout: (layouts: Layouts) => void;
  resetTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: LinkrClassicTheme,

      // setters
      setTheme: (newTheme) => set({ theme: newTheme }),

      // actions
      updateLayout: (layouts) =>
        set((state) => ({ theme: { ...state.theme, layout: layouts } })),

      resetTheme: () => set({ theme: LinkrClassicTheme }),
    }),
    {
      name: "theme-storage",
    },
  ),
);
