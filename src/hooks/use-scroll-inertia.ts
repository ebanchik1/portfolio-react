"use client";

import { useEffect, useRef } from "react";

// --- Module-level singleton: one shared rAF loop for scroll velocity ---
let scrollY = 0;
let prevScrollY = 0;
let scrollVelocity = 0;
let rafId: number | null = null;
const subscribers = new Set<(velocity: number) => void>();
const SMOOTHING = 0.15;

function tick() {
  scrollY = window.scrollY;
  const raw = scrollY - prevScrollY;
  scrollVelocity = scrollVelocity * (1 - SMOOTHING) + raw * SMOOTHING;
  prevScrollY = scrollY;
  subscribers.forEach((fn) => fn(scrollVelocity));
  rafId = requestAnimationFrame(tick);
}

function subscribe(fn: (velocity: number) => void) {
  if (subscribers.size === 0) {
    prevScrollY = window.scrollY;
    scrollY = window.scrollY;
    rafId = requestAnimationFrame(tick);
  }
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };
}

// --- Hook ---
interface ScrollInertiaOptions {
  weight?: number;
  stiffness?: number;
  damping?: number;
  disabled?: boolean;
}

export function useScrollInertia({
  weight = 0.3,
  stiffness = 0.08,
  damping = 0.7,
  disabled = false,
}: ScrollInertiaOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ offset: 0, velocity: 0 });

  useEffect(() => {
    if (disabled) return;
    if (typeof window === "undefined") return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Halve weight on touch devices
    const effectiveWeight =
      "ontouchstart" in window ? weight * 0.5 : weight;

    const unsubscribe = subscribe((scrollVel) => {
      const s = state.current;
      const force =
        -stiffness * s.offset - damping * s.velocity + scrollVel * effectiveWeight;
      s.velocity += force;
      s.offset += s.velocity;

      // Threshold: stop writing when at rest
      if (Math.abs(s.offset) < 0.1 && Math.abs(s.velocity) < 0.01) {
        s.offset = 0;
        s.velocity = 0;
      }

      if (ref.current) {
        ref.current.style.transform = `translateY(${s.offset}px)`;
      }
    });

    return unsubscribe;
  }, [weight, stiffness, damping, disabled]);

  const style: React.CSSProperties = {
    willChange: "transform",
  };

  return { ref, style };
}
