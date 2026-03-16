import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { TimelineItem } from "@/components/timeline-item"
import { experience } from "@/data/experience"

export const metadata: Metadata = {
  title: "Eli Banchik | Experience",
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" subtitle="Where I've worked" />

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="border-l-2 border-border ml-4">
          {experience.map((entry, index) => (
            <FadeIn key={entry.company} delay={index * 100}>
              <TimelineItem experience={entry} index={index} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
