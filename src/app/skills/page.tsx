import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "Skills | Khang",
};

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
      <Skills />
    </main>
  );
}
