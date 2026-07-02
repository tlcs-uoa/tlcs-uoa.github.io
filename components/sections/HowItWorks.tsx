import SectionHeading from "@/components/SectionHeading";
import { STEPS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-uoa-graybox py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps across a semester"
          intro="The framework gives you structure and resources, and your circle decides together how to use them."
        />

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n} className="card flex h-full flex-col">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-uoa-blue/20 font-display text-lg font-semibold text-uoa-blue">
                {step.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-uoa-navy">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-uoa-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
