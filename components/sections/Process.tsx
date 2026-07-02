import SectionHeading from "@/components/SectionHeading";
import { PROCESS, DEBRIEF } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-uoa-graybox py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="The TLC process"
          title="Three stages the circle moves through together"
          intro="Your TLC moves through three stages, each building on the last. Nothing here is a performance. The focus is always on what you notice and carry into your own teaching."
        />

        {/* Phase steps */}
        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((step, i) => (
            <li key={step.phase} className="card flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-semibold text-uoa-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-uoa-pale px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-uoa-blue">
                  {step.phase}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-uoa-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-uoa-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>

        {/* Debrief: What / So what / Now what */}
        <div className="card mt-10 max-w-none p-7 sm:p-9">
          <h3 className="font-display text-xl font-medium text-uoa-navy">
            The group debrief: What · So what · Now what
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-3">
            {DEBRIEF.map((d) => (
              <div key={d.n}>
                <div className="flex items-baseline gap-3 border-b border-uoa-blue/10 pb-3">
                  <span className="font-display text-sm font-semibold text-uoa-steel">{d.n}</span>
                  <span className="text-lg font-semibold text-uoa-blue">{d.label}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-uoa-ink/75">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
