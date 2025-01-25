import { QrCode } from "lucide-react";

const LUCIDE_ICONS = {
  QrCode,
};

export type LucideIconNameType = keyof typeof LUCIDE_ICONS;

/**
 * Helper: get a Lucide icon by name. If no match is found, fallback to QrCode.
 * In practice, you might handle a "not found" scenario or load additional icons.
 */
export function getLucideIconByName(name: LucideIconNameType) {
  return LUCIDE_ICONS[name] || QrCode;
}
