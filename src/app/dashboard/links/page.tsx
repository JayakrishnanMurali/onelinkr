"use client";
import { screenSizeAtom } from "@/atoms/themeAtoms";
import { FloatingBar } from "@/components/floating-bar";
import { ThemeRenderer } from "@/components/theme-renderer";
import { useFullScreenToggle } from "@/hooks/use-fullscreen-toggle";
import { cn } from "@/lib/utils";
import { useAtomValue } from "jotai";

export default function Page() {
  const { isFullScreen, toggleFullScreen, elementRef } = useFullScreenToggle();
  const screenSize = useAtomValue(screenSizeAtom);

  return (
    <div
      ref={elementRef}
      className={cn("flex flex-1 flex-col gap-4 p-4 pt-0", {
        "fixed inset-0 z-50 bg-gray-200": isFullScreen,
      })}
    >
      <div
        className={cn("max-h-[90vh] overflow-y-auto rounded border p-20", {
          "max-h-[80vh]": screenSize === "small",
        })}
      >
        <ThemeRenderer />
        <FloatingBar onExpand={toggleFullScreen} />
      </div>
    </div>
  );
}
