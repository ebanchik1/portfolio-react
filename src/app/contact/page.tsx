import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { CONTACT_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Eli Banchik | Contact",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Let's connect" />

      <section className="max-w-2xl mx-auto px-6 py-16">
        <FadeIn>
          <p className="text-muted-foreground font-sans text-sm mb-10">
            I&apos;m always open to new opportunities, collaborations, and
            interesting conversations. Whether you have a project in mind or
            just want to say hello, feel free to reach out.
          </p>

          <ul className="space-y-6">
            <li>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                Email
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-mono text-sm hover:underline"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                Phone
              </span>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="font-mono text-sm hover:underline"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                Location
              </span>
              <p className="font-mono text-sm">{CONTACT_INFO.location}</p>
            </li>
            <li>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                LinkedIn
              </span>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm hover:underline"
              >
                {CONTACT_INFO.linkedinHandle}
              </a>
            </li>
          </ul>
        </FadeIn>
      </section>
    </>
  )
}
