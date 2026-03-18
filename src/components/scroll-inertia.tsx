"use client";

import { useScrollInertia } from "@/hooks/use-scroll-inertia";

interface ScrollInertiaProps {
  children: React.ReactNode;
  className?: string;
  weight?: number;
  stiffness?: number;
  damping?: number;
}

export function ScrollInertia({
  children,
  className,
  weight,
  stiffness,
  damping,
}: ScrollInertiaProps) {
  const { ref, style } = useScrollInertia({ weight, stiffness, damping });
  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
