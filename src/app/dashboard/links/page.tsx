import { LinkCardsWrapper } from "@/components/link-cards-wrapper";
import { ThemeRenderer } from "@/components/theme-renderer";
import { LinkrClassicTheme } from "@/themes/classic-theme";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="min-h-[100vh] flex-1 rounded-xl border bg-white md:min-h-min">
        <LinkCardsWrapper />
        {/* <ThemeRenderer theme={LinkrClassicTheme} /> */}
      </div>
    </div>
  );
}
