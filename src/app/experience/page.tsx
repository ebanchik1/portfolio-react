import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { HorizontalTimeline } from "@/components/horizontal-timeline"

export const metadata: Metadata = {
  title: "Eli Banchik | Experience",
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" subtitle="Where I've been" />
      <HorizontalTimeline />
    </>
  )
}
