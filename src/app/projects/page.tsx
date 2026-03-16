"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { FadeIn } from "@/components/fade-in"
import { projects } from "@/data/projects"

const FILTER_TAGS = [
  "All",
  "AI",
  "Data Analytics",
  "Full-Stack",
  "Startup",
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <>
      <PageHeader title="Projects" subtitle="What I've built" />

      {/* Filter bar */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                activeFilter === tag
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground border-border"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  )
}
