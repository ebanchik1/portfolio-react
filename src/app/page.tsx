"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { HighlightBar } from "@/components/highlight-bar"
import { FadeIn } from "@/components/fade-in"
import { projects } from "@/data/projects"
import { ChatWidget } from "@/components/chat-widget"
import { ScrollInertia } from "@/components/scroll-inertia"

const GravityHero = dynamic(() => import("@/components/gravity-hero"), {
  ssr: false,
})

const featuredSlugs = ["scholarshipiq", "philosophia", "etf-dashboard"]
const featuredProjects = projects.filter(p => featuredSlugs.includes(p.slug))

export default function Home() {
  return (
    <div>
      {/* Hero Section - full viewport */}
      <section className="w-full h-dvh min-h-[500px] flex flex-col relative font-mono bg-white pb-16 sm:pb-0">
        <div className="pt-24 text-5xl sm:text-7xl md:text-8xl text-black w-full text-center font-serif italic px-4">
          Eli Banchik
        </div>
        <p className="pt-4 text-base sm:text-xl md:text-2xl text-black w-full text-center font-mono">
          what I do:
        </p>
        <GravityHero />
      </section>

      {/* Tagline + CTA Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <ScrollInertia weight={0.35}>
              <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                I build with AI across industries — from data and marketing to legal tech and product.
              </h2>
            </ScrollInertia>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl mb-10">
              New York City-based builder and technologist. I ship AI-powered products, design data-driven strategies, and bring a cross-functional toolkit to everything I work on — spanning software engineering, analytics, marketing, and legal operations.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className={buttonVariants({ size: "lg" })}>
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeading label="selected work" title="Featured Projects" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 100}>
                <ScrollInertia weight={0.2 + i * 0.05}>
                  <ProjectCard project={project} />
                </ScrollInertia>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <div className="mt-12 text-center">
              <Link href="/projects" className={buttonVariants({ variant: "outline" })}>
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Bio */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
              NYC native with a background spanning AI development, data analytics, marketing, and full-stack engineering. NYU Gallatin graduate with a self-designed degree in Human Behavior. I've worked across startups, tech incubators, and legal operations — and I use AI as a force multiplier in everything I do.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <Link href="/about" className="inline-flex items-center gap-2 mt-6 font-mono text-sm uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors">
              Learn more <ArrowRight className="w-3 h-3" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-20 md:py-28 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <ScrollInertia weight={0.15}>
              <HighlightBar />
            </ScrollInertia>
          </FadeIn>
        </div>
      </section>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  )
}
