import { ThemeRenderer } from "@/components/theme-renderer";
import { notFound } from "next/navigation";
import { use } from "react";

interface Props {
  params: Promise<{ username: string }>;
}

export default function UserPage({ params }: Props) {
  const { username } = use(params);

  const decodedUsername = decodeURIComponent(username);

  if (!decodedUsername.startsWith("@")) {
    notFound();
  }

  return (
    <main className="container mx-auto">
      <ThemeRenderer />
    </main>
  );
}
