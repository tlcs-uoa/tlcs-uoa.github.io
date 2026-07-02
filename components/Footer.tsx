import Image from "next/image";
import { asset, NAV_LINKS, LINKS } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-uoa-navy text-white">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src={asset("/assets/uoa-logo-white.png")}
              alt="University of Auckland, Waipapa Taumata Rau"
              width={120}
              height={118}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-uoa-slate">
              Teaching and Learning Circles · A developmental, collegial peer-observation programme
              for teaching staff at Waipapa Taumata Rau.
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-uoa-slate/70">
              Explore
            </span>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-uoa-slate/70">
              Get involved
            </span>
            <a href={LINKS.registerUrl} className="text-sm text-white/80 hover:text-white">
              Register your interest
            </a>
            <a href={LINKS.resourcePackHref} className="text-sm text-white/80 hover:text-white">
              Download resource pack
            </a>
            <a href={`mailto:${LINKS.programmeEmail}`} className="text-sm text-white/80 hover:text-white">
              {LINKS.programmeEmail}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-uoa-slate/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} University of Auckland · Waipapa Taumata Rau</p>
          <p>Developmental · Collegial · Confidential</p>
        </div>
      </div>
    </footer>
  );
}
