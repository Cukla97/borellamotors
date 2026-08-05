import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <Image
        src="/hero-lot.jpg"
        alt="Piazzale auto usate Borella Motors"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black-deep/90 via-black/75 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep/70 via-transparent to-black-deep/30" />

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red">
            Borella Motors
          </p>
          <div className="hero-title-wrap">
            <h1 className="hero-title text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              <span className="hero-title-line">Vuoi vendere la tua auto?</span>{" "}
              <span className="hero-title-line hero-title-line-delay">
                Scopri subito il{" "}
                <span className="hero-title-accent">valore</span>
              </span>
            </h1>
            <span className="hero-title-car" aria-hidden="true">
              <span className="hero-car-exhaust">
                <span className="hero-car-puff hero-car-puff--fire" />
                <span className="hero-car-puff hero-car-puff--ember" />
                <span className="hero-car-puff hero-car-puff--smoke" />
                <span className="hero-car-puff hero-car-puff--smoke-2" />
              </span>
              <svg
                viewBox="0 0 96 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-[1] h-full w-full"
              >
                {/* Sleek sports-car silhouette */}
                <path
                  d="M6 24.5c1.2-1.2 3.4-2 6.2-2.4L18 14.8c1.1-1.7 2.9-2.7 4.9-2.7h8.2c1.3 0 2.5.5 3.4 1.4l3.2 3.1h18.6c2.4 0 4.6 1.1 6 2.9l4.8 6.1c2.4.2 5.3.7 7.6 1.8 1.4.7 1.3 2.7-.2 3.2H8.4c-2.2 0-3.5-2.4-2.4-4.1Z"
                  fill="currentColor"
                />
                <path
                  d="M32.2 13.8h12.4c1.1 0 2.1.6 2.6 1.5l2.8 5.2H29.6l1.4-5.1c.3-1 1.2-1.6 2.2-1.6Z"
                  fill="white"
                  fillOpacity="0.28"
                />
                <path
                  d="M48.5 13.9h8.8c1.3 0 2.5.7 3.1 1.8l3.2 5.5H47.2l.7-5.7c.1-.9.9-1.6 1.6-1.6Z"
                  fill="white"
                  fillOpacity="0.16"
                />
                {/* Low splitter / side scoop */}
                <path
                  d="M14 22.8h9.5c.7 0 1.1.8.7 1.4l-1.3 1.8H13.2c-.6 0-.9-.7-.5-1.2l1.3-2Z"
                  fill="white"
                  fillOpacity="0.14"
                />
                {/* Wheels */}
                <circle cx="26" cy="28.2" r="5.2" fill="#111" />
                <circle
                  cx="26"
                  cy="28.2"
                  r="5.2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.55"
                />
                <circle cx="26" cy="28.2" r="2" fill="#e5e5e5" />
                <circle cx="70" cy="28.2" r="5.2" fill="#111" />
                <circle
                  cx="70"
                  cy="28.2"
                  r="5.2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.55"
                />
                <circle cx="70" cy="28.2" r="2" fill="#e5e5e5" />
                {/* Headlight */}
                <ellipse
                  cx="12.8"
                  cy="22.6"
                  rx="1.8"
                  ry="1.1"
                  fill="white"
                  fillOpacity="0.55"
                />
              </svg>
            </span>
          </div>
          <p className="mt-5 max-w-xl text-base text-white/90 md:text-lg">
            Valutazione gratuita in 24 ore, nessun impegno. Se accetti, penso io
            a tutto il resto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#valutazione" className="btn-primary btn-siren">
              Richiedi una valutazione gratuita
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {WHATSAPP_LABEL}
            </a>
          </div>
          <p className="mt-4">
            <a
              href="#come-funziona"
              className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 underline-offset-4 transition hover:text-white hover:underline"
            >
              Come funziona
              <ChevronDown className="h-4 w-4" aria-hidden />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
