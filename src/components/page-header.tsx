interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-24 pb-12 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.15em] mt-4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
