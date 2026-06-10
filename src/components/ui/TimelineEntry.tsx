import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/types/content";

const TYPE_COLORS: Record<TimelineItem["type"], string> = {
  work: "bg-accent-red",
  education: "bg-accent-purple",
  certificate: "bg-accent-orange",
};

export function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <div className="relative pb-10 pl-8 last:pb-0">
      <span
        className={cn(
          "absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full",
          TYPE_COLORS[item.type]
        )}
      />
      <p className="font-mono text-xs uppercase tracking-wide text-muted">
        {item.period}
      </p>
      <h3 className="mt-1 font-display text-xl font-bold md:text-2xl">
        {item.title}
      </h3>
      <p className="text-sm text-white/70">{item.organization}</p>
      {item.description && (
        <p className="mt-2 max-w-2xl text-sm text-muted">{item.description}</p>
      )}
    </div>
  );
}
