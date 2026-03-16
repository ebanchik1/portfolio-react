"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-lg">Eli Banchik</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-6 mt-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={onClose}
              className="font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pb-8">
          <Link href="/contact" onClick={onClose}>
            <Button variant="outline" className="w-full font-mono text-sm">
              Get in Touch
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
