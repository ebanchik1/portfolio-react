import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/data/education"
import { skills } from "@/data/skills"

export const metadata: Metadata = {
  title: "Eli Banchik | About",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" subtitle="Who I am & what I do" />

      {/* Bio */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="space-y-6">
            <p className="text-lg font-sans">
              I&apos;m Eli Banchik, a born-and-raised New Yorker who builds at
              the intersection of AI, data, and product. I graduated from
              NYU&apos;s Gallatin School of Individualized Study with a
              self-designed concentration in Human Behavior, drawing from
              business technology, psychology, and philosophy. That
              interdisciplinary foundation shapes how I approach everything — I
              think about systems, incentives, and the people inside them.
            </p>
            <p className="text-base text-muted-foreground">
              I&apos;m drawn to problems that sit across disciplines. My career
              has taken me through data analytics, marketing strategy, startup
              incubation, software engineering, and legal operations — and the
              common thread is using technology to make complex systems more
              efficient, transparent, and human. AI is the most powerful lever
              I&apos;ve found for doing that, and I apply it everywhere:
              automating legal workflows, building intelligent product
              recommendations, analyzing cultural data, and designing marketing
              strategies backed by real analytics.
            </p>
            <p className="text-base text-muted-foreground">
              Currently, I&apos;m a paralegal at Tuttle Yick LLP in New York,
              where I&apos;ve integrated AI into daily legal operations —
              accelerating document drafting, research, and case management. On
              the side, I&apos;m building AI-powered products: ScholarshipIQ and
              Philosophia. Before this, I built full-stack applications, ran
              marketing analytics at startups, and worked in a tech incubator
              alongside early-stage founders. I&apos;m always looking for the
              next thing to build.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Education */}
      <section className="bg-secondary/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="education" title="Where I Learned" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {education.map((entry) => (
              <FadeIn key={entry.institution}>
                <div className="border rounded-xl p-6">
                  <p className="font-serif italic text-lg">
                    {entry.institution}
                  </p>
                  <p className="font-sans text-sm">{entry.program}</p>
                  {entry.year && (
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {entry.year}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="skills & tools" title="What I Work With" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {skills.map((category) => (
              <FadeIn key={category.name}>
                <div className="border rounded-xl p-6">
                  <p className="font-serif italic text-lg mb-3">
                    {category.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {category.tools.join(", ")}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
