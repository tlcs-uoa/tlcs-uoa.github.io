type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({ eyebrow, title, intro, tone = "light" }: Props) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${tone === "dark" ? "!text-uoa-slate" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-4 text-3xl font-medium leading-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-uoa-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-white/80" : "text-uoa-ink/75"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
