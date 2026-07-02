"use client";

import { useState } from "react";
import Image from "next/image";
import { asset, LINKS, NAV_LINKS } from "@/lib/content";
import { Close, Menu } from "@/components/icons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-uoa-blue/15 bg-white">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Teaching and Learning Circles home">
          <Image
            src={asset("/assets/tlc-logo.png")}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-sm font-semibold leading-tight text-uoa-navy">
            Teaching &amp; Learning Circles
            <span className="hidden text-[0.7rem] font-normal text-uoa-steel sm:block">
              Waipapa Taumata Rau · University of Auckland
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-uoa-ink/75 transition-colors hover:text-uoa-blue"
            >
              {l.label}
            </a>
          ))}
          <a href={LINKS.registerUrl} className="btn-navy !py-2">
            Register interest
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded p-2 text-uoa-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-uoa-blue/15 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-base font-medium text-uoa-ink/80 hover:bg-uoa-pale hover:text-uoa-blue"
              >
                {l.label}
              </a>
            ))}
            <a href={LINKS.registerUrl} onClick={() => setOpen(false)} className="btn-navy mt-2">
              Register interest
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
