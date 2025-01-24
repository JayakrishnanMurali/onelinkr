import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#026d50] to-[#152c1e] text-white">
      <Button>
        <Link href="/dashboard/links">Dashboard</Link>
      </Button>
    </main>
  );
}
