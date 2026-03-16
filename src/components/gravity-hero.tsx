"use client"

import { Gravity, MatterBody } from "@/components/ui/gravity"

const pills = [
  { label: "AI", color: "#0015ff", x: "30%", y: "10%" },
  { label: "Full-Stack", color: "#ff5941", x: "30%", y: "30%" },
  { label: "Data", color: "#1f464d", x: "40%", y: "20%", angle: 10 },
  { label: "Marketing", color: "#E794DA", x: "75%", y: "10%" },
  { label: "Legal", color: "#ffd726", x: "80%", y: "20%" },
  { label: "Agentic Workflow", color: "#f97316", x: "50%", y: "10%" },
]

export default function GravityHero() {
  return (
    <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
      {pills.map((pill) => (
        <MatterBody
          key={pill.label}
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x={pill.x}
          y={pill.y}
          angle={pill.angle}
        >
          <div
            className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-white rounded-full hover:cursor-grab px-4 py-2 sm:px-8 sm:py-4 font-mono select-none"
            style={{ backgroundColor: pill.color }}
          >
            {pill.label}
          </div>
        </MatterBody>
      ))}
    </Gravity>
  )
}
