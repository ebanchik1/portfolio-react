"use client";

import { useRef, useState, useEffect } from "react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { PillTag } from "@/components/pill-tag";

// Unified timeline entry type
type TimelineEntry = {
  type: "career" | "education";
  title: string;
  subtitle: string;
  dateRange: string;
  color: string;
  bullets: string[];
  tags: string[];
  description?: string;
  sortKey: number;
};

function parseDate(s: string): number {
  if (!s || s === "Present") return Date.now();
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const parts = s.split(" ");
  if (parts.length === 2 && months[parts[0]] !== undefined) {
    return new Date(parseInt(parts[1]), months[parts[0]]).getTime();
  }
  const yearMatch = s.match(/(\d{4})/);
  return yearMatch ? new Date(parseInt(yearMatch[1]), 0).getTime() : 0;
}

function buildTimeline(): TimelineEntry[] {
  const careerEntries: TimelineEntry[] = experience.map((e) => ({
    type: "career",
    title: e.company,
    subtitle: e.role,
    dateRange: `${e.startDate} — ${e.endDate}`,
    color: e.color,
    bullets: e.bullets,
    tags: e.tags,
    sortKey: parseDate(e.startDate),
  }));

  const eduEntries: TimelineEntry[] = education.map((e) => ({
    type: "education",
    title: e.institution,
    subtitle: e.program,
    dateRange: e.credential + (e.year ? ` · ${e.year}` : ""),
    color: e.color,
    bullets: [],
    tags: [],
    description: e.description,
    sortKey: parseDate(e.year),
  }));

  return [...careerEntries, ...eduEntries].sort((a, b) => a.sortKey - b.sortKey);
}

const timeline = buildTimeline();

// Card component
function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px]">
      <div className="h-full rounded-2xl border border-border bg-white p-6 md:p-8 flex flex-col">
        {/* Color accent bar */}
        <div
          className="w-full h-1 rounded-full mb-5"
          style={{ backgroundColor: entry.color }}
        />

        {/* Type + Date */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: entry.color + "15",
              color: entry.color,
            }}
          >
            {entry.type}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {entry.dateRange}
          </span>
        </div>

        {/* Title + Subtitle */}
        <h3 className="font-serif italic text-xl md:text-2xl leading-tight mb-1">
          {entry.title}
        </h3>
        <p className="font-sans text-sm text-muted-foreground mb-4">
          {entry.subtitle}
        </p>

        {/* Content */}
        <div className="flex-1">
          {entry.bullets.length > 0 ? (
            <ul className="space-y-2">
              {entry.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-xs text-muted-foreground leading-relaxed pl-3 border-l-2 border-border"
                >
                  {b}
                </li>
              ))}
            </ul>
          ) : entry.description ? (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {entry.description}
            </p>
          ) : null}
        </div>

        {/* Tags */}
        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
            {entry.tags.map((tag) => (
              <PillTag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function HorizontalTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Vertical scroll drives horizontal translation
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far the sticky container has scrolled through
      // rect.top goes from positive (below viewport) to negative (scrolled past)
      // The sticky element is pinned for (sectionHeight - viewportHeight) px of scroll
      const scrollableDistance = sectionHeight - viewportHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Total horizontal distance to travel
  // Each card ~470px (450 + gap), plus extra padding so last card is fully visible
  const cardWidth = 470; // approximate card + gap
  const totalWidth = cardWidth * timeline.length + 100; // extra padding for last card
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
  const translateX = -progress * Math.max(0, totalWidth - viewportWidth + 48);

  const currentIndex = Math.round(progress * (timeline.length - 1));
  const currentColor = timeline[currentIndex]?.color || "#0015ff";

  return (
    // Tall section — vertical scroll through this drives horizontal movement
    // Height = viewport + enough scroll distance to move through all cards
    <div
      ref={sectionRef}
      style={{ height: `${timeline.length * 60 + 100}vh` }}
    >
      {/* Sticky container pins the cards while scrolling */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Progress bar */}
        <div className="px-6 md:px-12 mb-6">
          <div className="max-w-6xl mx-auto">
            <div className="h-0.5 bg-border rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-[width] duration-100 ease-out"
                style={{
                  width: `${Math.max(progress * 100, 2)}%`,
                  backgroundColor: currentColor,
                }}
              />
            </div>
            {/* Dot indicators */}
            <div className="relative h-3 mt-1">
              {timeline.map((entry, i) => {
                const pos = timeline.length > 1 ? (i / (timeline.length - 1)) * 100 : 0;
                return (
                  <div
                    key={i}
                    className="absolute top-0 w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      left: `${pos}%`,
                      transform: "translateX(-50%)",
                      backgroundColor:
                        i <= currentIndex ? entry.color : "var(--border)",
                      scale: i === currentIndex ? "1.5" : "1",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Horizontal card track */}
        <div
          className="flex gap-6 md:gap-8 px-6 md:px-12 will-change-transform"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {timeline.map((entry, i) => (
            <TimelineCard key={i} entry={entry} />
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="text-center mt-6 transition-opacity duration-500"
          style={{ opacity: progress < 0.05 ? 1 : 0, pointerEvents: "none" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll to explore ↓
          </span>
        </div>
      </div>
    </div>
  );
}
