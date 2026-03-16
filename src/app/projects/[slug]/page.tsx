import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { PillTag } from "@/components/pill-tag"
import { FadeIn } from "@/components/fade-in"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)
  return {
    title: project ? `Eli Banchik | ${project.title}` : "Project Not Found",
  }
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 md:py-16">
      {/* Back link */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          All Projects
        </Link>
      </FadeIn>

      {/* Title section */}
      <FadeIn delay={100}>
        <div className="mt-8">
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="font-sans text-lg text-muted-foreground mt-2">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <PillTag key={tag} label={tag} />
            ))}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-[#0015ff] text-white text-sm font-mono uppercase tracking-wider rounded-full hover:bg-[#0015ff]/90 transition-colors"
            >
              Visit Live Site <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </FadeIn>

      {/* Description */}
      <FadeIn delay={200}>
        <div className="mt-10">
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>
        </div>
      </FadeIn>

      {/* Embed */}
      {project.embedUrl && (
        <FadeIn delay={250}>
          <div className="mt-10">
            <h2 className="font-serif italic text-2xl mb-4">Live Demo</h2>
            <div className="relative w-full overflow-hidden rounded-xl border border-border" style={{ paddingBottom: "59.8%" }}>
              <iframe
                title={`${project.title} embed`}
                src={project.embedUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-2">
              Interactive — click around and use the full-screen button in the bottom right.
            </p>
          </div>
        </FadeIn>
      )}

      {/* Features */}
      {project.features.length > 0 && (
        <FadeIn delay={300}>
          <div className="mt-10">
            <h2 className="font-serif italic text-2xl mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      )}

      {/* Tech Stack */}
      <FadeIn delay={400}>
        <div className="mt-10">
          <h2 className="font-serif italic text-2xl mb-4">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <PillTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Process */}
      {project.process && (
        <FadeIn delay={450}>
          <div className="mt-10">
            <h2 className="font-serif italic text-2xl mb-4">The Process</h2>
            {project.process.overview && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.process.overview}
              </p>
            )}
            <div className="space-y-6">
              {project.process.sections.map((section, i) => (
                <div key={i}>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-foreground mb-3">
                    {section.heading}
                  </h3>
                  <ul className="space-y-2">
                    {section.content.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* Challenges */}
      {project.challenges.length > 0 && (
        <FadeIn delay={500}>
          <div className="mt-10">
            <h2 className="font-serif italic text-2xl mb-4">
              Challenges & Iterations
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      )}

      {/* Bottom nav */}
      <FadeIn delay={600}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-16 pt-8 border-t border-border">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            {prevProject.title}
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {nextProject.title}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}
