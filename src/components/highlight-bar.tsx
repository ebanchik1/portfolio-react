import { highlights } from "@/data/highlights"

export function HighlightBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {highlights.map((item) => (
        <div key={item.label} className="border-t-2 border-black pt-6">
          <div className="font-serif italic text-3xl md:text-4xl">
            {item.value}
          </div>
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-wide mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
