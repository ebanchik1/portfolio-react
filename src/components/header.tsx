"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg">
          Eli Banchik
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button variant="outline" size="sm" className="font-mono text-xs">
              Get in Touch
            </Button>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
