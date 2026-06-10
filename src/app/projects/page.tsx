import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Khang",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
      <Projects />
    </main>
  );
}
