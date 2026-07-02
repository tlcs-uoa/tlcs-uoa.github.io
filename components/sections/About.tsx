import SectionHeading from "@/components/SectionHeading";
import { ABOUT } from "@/lib/content";
import { Check } from "@/components/icons";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="What is a TLC?"
          title="A collegial structure for professional growth"
          intro={ABOUT.purpose}
        />

        <div className="callout mt-8 max-w-3xl">
          <p className="text-sm leading-relaxed text-uoa-navy">
            <span className="font-semibold">Developmental, not evaluative.</span> You observe
            colleagues' teaching to reflect on your own practice, never to assess theirs. What
            happens in your circle stays in your circle.
          </p>
        </div>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-uoa-blue">
          What participants gain
        </p>
        <ul className="mt-5 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
          {ABOUT.benefits.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-uoa-pale text-uoa-blue">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-base leading-snug text-uoa-ink/80">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
