import type { Metadata } from "next";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education | Khang",
};

export default function EducationPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
      <Education />
    </main>
  );
}
