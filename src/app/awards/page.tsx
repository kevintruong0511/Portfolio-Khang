import type { Metadata } from 'next';
import { Awards } from '@/components/sections/Awards';

export const metadata: Metadata = {
  title: 'Awards | Khang',
};

export default function AwardsPage() {
  return (
    <main className="flex flex-1 flex-col justify-center py-16 md:py-24">
      <Awards />
    </main>
  );
}
//add comments
