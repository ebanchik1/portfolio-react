import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif italic text-xl">Eli Banchik</h3>
            <p className="font-mono text-xs text-muted-foreground mt-2">
              {CONTACT_INFO.location}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                {CONTACT_INFO.email}
              </Link>
              <Link
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                {CONTACT_INFO.phone}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-muted-foreground transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; 2026 Eli Banchik
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
