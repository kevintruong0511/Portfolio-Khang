import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
}

export function SectionHeading({
  children,
  className,
  actions,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <h2
        className={cn(
          "font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl",
          className
        )}
      >
        {children}
      </h2>
      {actions}
    </div>
  );
}
