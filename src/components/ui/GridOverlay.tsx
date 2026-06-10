import { cn } from "@/lib/utils";

export function GridOverlay({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bg-grid-pattern opacity-40",
        className
      )}
      aria-hidden="true"
    />
  );
}
