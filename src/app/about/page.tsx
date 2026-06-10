import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About | Khang",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
      <About />
    </main>
  );
}
