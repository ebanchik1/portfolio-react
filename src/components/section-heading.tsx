import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label: string
  title: string
  className?: string
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <p className="text-xs tracking-[0.2em] text-muted-foreground font-mono uppercase">
        {label}
      </p>
      <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl mt-2">
        {title}
      </h2>
    </div>
  )
}
