"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SocialLinks } from "@/components/SocialLinks";

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesMenuId = useId();

  const valutaHref = pathname === "/" ? "#valutazione" : "/#valutazione";

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between gap-4 py-3 md:py-4">
        <Link href="/" aria-label="Borella Motors - Home">
          <Image
            src="/logo-borellamotors.png"
            alt="Borella Motors"
            width={220}
            height={86}
            priority
            className="h-10 w-auto brightness-0 invert md:h-11"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-semibold text-white md:flex"
          aria-label="Principale"
        >
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className="inline-flex items-center gap-1 transition hover:text-white/80"
              aria-expanded={servicesOpen}
              aria-controls={servicesMenuId}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Servizi
              <ChevronDown
                className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {servicesOpen && (
              <div
                id={servicesMenuId}
                role="menu"
                className="absolute left-0 top-full z-50 mt-3 min-w-[220px] rounded-xl border border-white/10 bg-black/90 p-2 shadow-xl backdrop-blur-xl"
              >
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    role="menuitem"
                    className="block rounded-lg px-3 py-2.5 text-white/90 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="block">{service.label}</span>
                    <span className="mt-0.5 block text-xs font-normal text-white/55">
                      {service.shortDescription}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <SocialLinks
            className="flex items-center gap-1"
            linkClassName="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white transition hover:bg-white/10 hover:text-white/90"
            iconClassName="h-[18px] w-[18px]"
          />
        </nav>

        <div className="flex items-center gap-2">
          <SocialLinks
            className="flex items-center gap-0.5 md:hidden"
            linkClassName="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
            iconClassName="h-[18px] w-[18px]"
          />
          <a
            href={valutaHref}
            className="btn-primary !py-2.5 !px-4 text-sm"
          >
            Valuta ora
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
        >
          <nav
            className="site-container flex flex-col gap-1 py-4"
            aria-label="Menu mobile"
          >
            <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Servizi
            </p>
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="rounded-lg px-3 py-3 font-semibold text-white transition hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {service.label}
              </Link>
            ))}
            <SocialLinks
              className="mt-2 flex flex-col gap-1"
              showLabels
              linkClassName="inline-flex items-center gap-2 rounded-lg px-3 py-3 font-semibold text-white transition hover:bg-white/10"
              iconClassName="h-5 w-5"
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-3 font-semibold text-whatsapp"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5" />
              {WHATSAPP_LABEL}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
