import { PILL_COLORS } from "@/lib/constants"

interface PillTagProps {
  label: string
  color?: string
}

export function PillTag({ label, color }: PillTagProps) {
  const bgColor = color || PILL_COLORS[label] || "#6b7280"

  return (
    <span
      className="text-xs font-mono px-3 py-1 rounded-full text-white inline-block"
      style={{ backgroundColor: bgColor }}
    >
      {label}
    </span>
  )
}
