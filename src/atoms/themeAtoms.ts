import { atom } from "jotai";

export const isFullScreenAtom = atom(false);
export const screenSizeAtom = atom<"large" | "small">("large");
