// src/hooks/useFullScreenToggle.js
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { isFullScreenAtom } from "@/atoms/themeAtoms";
import { toast } from "sonner";

export const useFullScreenToggle = () => {
  const [isFullScreen, setIsFullScreen] = useAtom(isFullScreenAtom);
  const elementRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (elementRef.current) {
        elementRef.current.requestFullscreen().catch((err) => {
          toast("Failed to enter full screen");
        });
      }
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [setIsFullScreen]);

  return { isFullScreen, toggleFullScreen, elementRef };
};
