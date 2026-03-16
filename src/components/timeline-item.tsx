import { PillTag } from "@/components/pill-tag"
import type { Experience } from "@/data/experience"

interface TimelineItemProps {
  experience: Experience
  index: number
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12">
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full"
        style={{ backgroundColor: experience.color }}
      />
      <div>
        <h3 className="font-serif italic text-xl">{experience.company}</h3>
        <p className="font-sans font-medium text-base">{experience.role}</p>
        <p className="font-mono text-xs text-muted-foreground mt-1">
          {experience.startDate} — {experience.endDate}
          {experience.location && ` · ${experience.location}`}
        </p>
        <ul className="mt-3 space-y-1.5">
          {experience.bullets.map((item, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
        {experience.tags && experience.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.tags.map((tag) => (
              <PillTag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
