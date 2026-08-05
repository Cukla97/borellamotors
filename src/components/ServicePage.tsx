import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

export type ServiceHighlight = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type ServiceStep = {
  title: string;
  text: string;
};

type ServicePageProps = {
  title: string;
  eyebrow: string;
  description: string;
  priceFrom?: string;
  image: {
    src: string;
    alt: string;
  };
  highlights: ServiceHighlight[];
  steps: ServiceStep[];
  closing: string;
};

export function ServicePage({
  title,
  eyebrow,
  description,
  priceFrom,
  image,
  highlights,
  steps,
  closing,
}: ServicePageProps) {
  return (
    <>
      <Header />
      <main className="page-stack">
        <section className="relative overflow-hidden bg-black pt-28 pb-16 text-white md:pt-32 md:pb-24">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          <div className="site-container relative z-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              {title}
            </h1>
            {priceFrom ? (
              <p className="mt-6 font-display text-6xl font-bold leading-none tracking-tight text-red md:text-8xl lg:text-9xl">
                <span className="mr-2 block text-sm font-semibold uppercase tracking-[0.18em] text-white/70 md:text-base">
                  A partire da
                </span>
                {priceFrom}
              </p>
            ) : null}
            <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {WHATSAPP_LABEL}
              </a>
              <Link href="/#valutazione" className="btn-secondary">
                Oppure valuta la tua auto
              </Link>
            </div>
          </div>
        </section>

        <section className="section-wash section-wash-signal py-16 md:py-20">
          <div className="site-container">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
                Cosa ottieni
              </h2>
              <p className="mt-3 text-muted">
                Pochi punti chiari, senza giri di parole.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-red">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section-wash section-wash-mist py-16 md:py-20">
          <div className="site-container">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
                Come procede
              </h2>
            </div>
            <ol className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="font-display text-sm font-bold tracking-wide text-red">
                    Passo {index + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-wash section-wash-garage py-14 text-white md:py-16">
          <div className="site-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Partiamo da un messaggio
              </h2>
              <p className="mt-3 text-white/80">{closing}</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp shrink-0"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {WHATSAPP_LABEL}
            </a>
          </div>
        </section>

        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
