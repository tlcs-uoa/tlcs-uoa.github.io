import SectionHeading from "@/components/SectionHeading";
import { CORNERSTONES } from "@/lib/content";

export default function Principles() {
  return (
    <section id="cornerstones" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Four cornerstones"
          title="Four commitments every circle shares"
          intro="TLCs draw on an established tradition of peer observation. At the heart of every successful circle are four shared commitments that make collegial observation feel safe, worthwhile, and generative."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CORNERSTONES.map((c) => (
            <div key={c.title} className="card h-full">
              <span className="block h-1 w-10 rounded-full bg-uoa-steel" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-uoa-navy">{c.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-uoa-ink/75">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="callout mt-8 max-w-3xl">
          <p className="text-sm leading-relaxed text-uoa-navy">
            <span className="font-semibold">Your circle, your choice.</span> The framework gives
            you structure and resources, but how your circle uses them is something you decide
            together at your first meeting.
          </p>
        </div>
      </div>
    </section>
  );
}
