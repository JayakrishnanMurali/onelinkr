"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useThemeStore } from "@/stores/useThemeStore";
import {
  Expand,
  Palette,
  Plus,
  Smartphone,
  Sparkle,
  Trash,
  TvMinimal,
  Zap,
} from "lucide-react";
import React from "react";

export const FloatingBar = () => {
  const resetTheme = useThemeStore((state) => state.resetTheme);

  return (
    <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 transform">
      <div className="flex items-center gap-2 rounded-xl bg-gray-200/90 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-[0_8px_35px_rgb(0,0,0,0.16)] dark:bg-gray-900/90 dark:hover:bg-gray-900">
        <Button variant="ghost" size="icon">
          <Plus className="size-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Palette className="size-4" />
        </Button>
        <Toggle aria-label="Toggle Editor">
          <Sparkle className="h-4 w-4" />
        </Toggle>
        <Separator orientation="vertical" className="mr-2 h-4 bg-gray-400" />
        <ToggleGroup type="single">
          <ToggleGroupItem value="italic" aria-label="Toggle Small Screen">
            <Smartphone className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="bold" aria-label="Toggle Large Screen">
            <TvMinimal className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <Separator orientation="vertical" className="mr-2 h-4 bg-gray-400" />
        <Button variant="ghost" size="icon">
          <Expand className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={resetTheme}>
          <Trash className="size-4" />
        </Button>
      </div>
    </div>
  );
};
