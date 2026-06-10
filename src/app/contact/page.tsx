import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Khang",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
      <Contact />
    </main>
  );
}
