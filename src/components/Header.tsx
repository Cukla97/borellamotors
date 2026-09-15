"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SocialLinks } from "@/components/SocialLinks";

export function Header({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideBarSocials, setHideBarSocials] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const barSocialsRef = useRef<HTMLDivElement>(null);
  const valutaRef = useRef<HTMLAnchorElement>(null);
  const servicesMenuId = useId();
  const light = tone === "light";

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

  useLayoutEffect(() => {
    const bar = barRef.current;
    const socials = barSocialsRef.current;
    const cta = valutaRef.current;
    if (!bar || !socials || !cta) return;

    const desktop = window.matchMedia("(min-width: 768px)");

    const measure = () => {
      if (desktop.matches) {
        setHideBarSocials(false);
        return;
      }

      socials.classList.remove("hidden");
      socials.classList.add("flex");
      const ctaWraps = cta.getBoundingClientRect().height > 42;
      const overflows = bar.scrollWidth > bar.clientWidth + 1;
      const hide = ctaWraps || overflows;
      socials.classList.toggle("hidden", hide);
      socials.classList.toggle("flex", !hide);
      setHideBarSocials((prev) => (prev === hide ? prev : hide));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    desktop.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", measure);
    };
  }, []);

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
    <header
      className={
        light
          ? "fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-white"
          : "fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl"
      }
    >
      <div
        ref={barRef}
        className="site-container flex min-w-0 flex-nowrap items-center justify-between gap-3 overflow-x-clip py-3 md:gap-4 md:py-4"
      >
        <Link href="/" aria-label="Borella Motors - Home" className="shrink-0">
          <Image
            src="/logo-borellamotors.png"
            alt="Borella Motors"
            width={280}
            height={110}
            priority
            className={
              light
                ? "h-12 w-auto brightness-0 md:h-14"
                : "h-12 w-auto md:h-14"
            }
          />
        </Link>

        <nav
          className={
            light
              ? "hidden items-center gap-6 text-sm font-semibold text-ink md:flex"
              : "hidden items-center gap-6 text-sm font-semibold text-white md:flex"
          }
          aria-label="Principale"
        >
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className={
                light
                  ? "inline-flex items-center gap-1 transition hover:text-ink/70"
                  : "inline-flex items-center gap-1 transition hover:text-white/80"
              }
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
                className={
                  light
                    ? "absolute left-0 top-full z-50 mt-3 min-w-[220px] rounded-xl border border-black/10 bg-white p-2 shadow-xl"
                    : "absolute left-0 top-full z-50 mt-3 min-w-[220px] rounded-xl border border-white/10 bg-black/90 p-2 shadow-xl backdrop-blur-xl"
                }
              >
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    role="menuitem"
                    className={
                      light
                        ? "block rounded-lg px-3 py-2.5 text-ink transition hover:bg-black/5"
                        : "block rounded-lg px-3 py-2.5 text-white/90 transition hover:bg-white/10 hover:text-white"
                    }
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="block">{service.label}</span>
                    <span
                      className={
                        light
                          ? "mt-0.5 block text-xs font-normal text-muted"
                          : "mt-0.5 block text-xs font-normal text-white/55"
                      }
                    >
                      {service.shortDescription}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <SocialLinks
            className="flex items-center gap-1"
            linkClassName={
              light
                ? "inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink transition hover:bg-black/5"
                : "inline-flex h-9 w-9 items-center justify-center rounded-lg text-white transition hover:bg-white/10 hover:text-white/90"
            }
            iconClassName="h-[18px] w-[18px]"
          />
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div
            ref={barSocialsRef}
            className={
              hideBarSocials
                ? "hidden"
                : "flex items-center gap-0.5 md:hidden"
            }
          >
            <SocialLinks
              className="flex items-center gap-0.5"
              linkClassName={
                light
                  ? "inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink transition hover:bg-black/5"
                  : "inline-flex h-9 w-9 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
              }
              iconClassName="h-[18px] w-[18px]"
            />
          </div>
          <a
            ref={valutaRef}
            href={valutaHref}
            className="btn-primary !px-3.5 !py-2.5 text-sm whitespace-nowrap sm:!px-4"
          >
            Valuta ora
          </a>
          <button
            type="button"
            className={
              light
                ? "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/15 text-ink md:hidden"
                : "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            }
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
          className={
            light
              ? "border-t border-black/10 bg-white md:hidden"
              : "border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          }
        >
          <nav
            className="site-container flex flex-col gap-1 py-4"
            aria-label="Menu mobile"
          >
            <p
              className={
                light
                  ? "px-1 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted"
                  : "px-1 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50"
              }
            >
              Servizi
            </p>
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className={
                  light
                    ? "rounded-lg px-3 py-3 font-semibold text-ink transition hover:bg-black/5"
                    : "rounded-lg px-3 py-3 font-semibold text-white transition hover:bg-white/10"
                }
                onClick={() => setMobileOpen(false)}
              >
                {service.label}
              </Link>
            ))}
            <p
              className={
                light
                  ? "mt-3 px-1 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted"
                  : "mt-3 px-1 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50"
              }
            >
              Social
            </p>
            <SocialLinks
              className="flex flex-col gap-1"
              showLabels
              linkClassName={
                light
                  ? "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-3 font-semibold text-ink transition hover:bg-black/5"
                  : "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-3 font-semibold text-white transition hover:bg-white/10"
              }
              iconClassName="h-5 w-5"
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={
                light
                  ? "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-3 font-semibold text-ink transition hover:bg-black/5"
                  : "inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-3 font-semibold text-white transition hover:bg-white/10"
              }
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
