import { FloatingBar } from "@/components/floating-bar";
import { ThemeRenderer } from "@/components/theme-renderer";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="rounded border p-20">
        <ThemeRenderer />
        <FloatingBar />
      </div>
    </div>
  );
}
