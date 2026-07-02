import SectionHeading from "@/components/SectionHeading";
import { CONTACT, LINKS } from "@/lib/content";
import { Check, Mail } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        {/* Register CTA band */}
        <div className="bg-navy-wash rounded-3xl px-8 py-12 text-center text-white sm:px-12 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
              Join a circle this semester
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Express your interest by{" "}
              <span className="font-semibold text-white">{LINKS.registerDeadline}</span>. We'll
              form circles, share the resource pack, and confirm your group before observations
              begin. No preparation needed in advance.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={LINKS.registerUrl} className="btn-white">
                Register your interest
              </a>
              <a href={`mailto:${LINKS.programmeEmail}`} className="btn-outline-white">
                <Mail className="h-4 w-4" />
                Email the team
              </a>
            </div>
          </div>
        </div>

        {/* Contact + support detail */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Contact & support"
            title="Support is available at every stage"
            intro={CONTACT.intro}
          />

          <div className="mt-9 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-uoa-blue">
                Get in touch if you
              </p>
              <ul className="mt-4 space-y-3">
                {CONTACT.support.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uoa-pale text-uoa-blue">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base leading-snug text-uoa-ink/80">{s}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${LINKS.programmeEmail}`}
                className="mt-7 flex w-fit items-center gap-4 rounded-2xl border border-uoa-blue/10 bg-uoa-pale/50 p-5 transition-colors hover:border-uoa-blue/30"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-uoa-blue shadow-sm">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-uoa-navy">TLC Programme Team</span>
                  <span className="block text-sm text-uoa-blue">{LINKS.programmeEmail}</span>
                </span>
              </a>
            </div>

            <div className="callout h-fit">
              <h3 className="text-sm font-semibold text-uoa-navy">Confidentiality &amp; care</h3>
              <p className="mt-2 text-sm leading-relaxed text-uoa-ink/75">
                {CONTACT.confidentiality}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
