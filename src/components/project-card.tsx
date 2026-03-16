import Link from "next/link"
import { PillTag } from "@/components/pill-tag"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group rounded-2xl border border-border hover:border-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden">
        <div
          className="aspect-[16/10] flex items-center justify-center p-8"
          style={{
            background: `linear-gradient(135deg, ${project.color}1a, ${project.color}0d)`,
          }}
        >
          <span className="font-serif italic text-2xl md:text-3xl text-center">
            {project.title}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl">{project.title}</h3>
          <p className="text-sm text-muted-foreground font-sans mt-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <PillTag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
