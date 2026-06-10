import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience | Khang",
};

export default function ExperiencePage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
      <Experience />
    </main>
  );
}
