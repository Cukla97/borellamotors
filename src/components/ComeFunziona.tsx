import { BadgeCheck, MessageSquare, Play, Scan } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { INSTAGRAM_URL } from "@/lib/social";

const steps = [
  {
    icon: Scan,
    title: "Inserisci targa e pochi dati",
    text: "Parti dalla targa, aggiungi km e qualche dettaglio. Puoi anche allegare delle foto.",
  },
  {
    icon: MessageSquare,
    title: "Ti ricontatto con una proposta",
    text: "Entro 24 ore ti chiamo o ti scrivo con una proposta di acquisto concreta.",
  },
  {
    icon: BadgeCheck,
    title: "Se accetti, mi occupo io di tutto",
    text: "Passaggi, documenti e ritiro: riduci al minimo i pensieri della vendita.",
  },
];

export function ComeFunziona() {
  return (
    <section
      id="come-funziona"
      className="section-wash section-wash-mist py-16 md:py-24"
    >
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,280px)] lg:gap-14 xl:grid-cols-[1fr_minmax(0,300px)]">
          {/* Left: title + steps */}
          <div className="order-2 flex flex-col gap-8 lg:order-1 lg:gap-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
                Come funziona
              </h2>
              <p className="mt-3 text-muted">
                Tre semplici passi. Te lo spiego in 30 secondi.
              </p>
            </div>

            <ol className="grid gap-6 sm:grid-cols-3 sm:gap-5 lg:grid-cols-1 lg:gap-7">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.title}
                    className="relative lg:flex lg:items-start lg:gap-4"
                  >
                    <div className="mb-3 flex items-center gap-3 lg:mb-0 lg:shrink-0">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red text-white shadow-[0_8px_20px_rgba(200,16,46,0.28)]">
                        <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                      </span>
                      <span className="font-display text-sm font-bold tracking-wide text-red lg:hidden">
                        Passo {index + 1}
                      </span>
                    </div>
                    <div>
                      <span className="hidden font-display text-sm/snug font-bold tracking-wide text-red lg:block">
                        Passo {index + 1}
                      </span>
                      <h3 className="text-xl/snug font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="text-base/relaxed text-muted">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right: Stories video placeholder */}
          <div className="order-1 mx-auto w-full max-w-[280px] lg:order-2 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.28)] ring-1 ring-black/10">
              <div
                className="absolute inset-x-3 top-3 z-10 flex gap-1"
                aria-hidden
              >
                <span className="h-0.5 flex-1 rounded-full bg-white/90" />
                <span className="h-0.5 flex-1 rounded-full bg-white/35" />
                <span className="h-0.5 flex-1 rounded-full bg-white/35" />
              </div>

              {/*
                Replace this placeholder with the spoken Stories video, e.g.:
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/videos/come-funziona-story.mp4"
                  poster="/videos/come-funziona-story.jpg"
                  controls
                  playsInline
                  preload="metadata"
                />
              */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red text-white shadow-lg">
                  <Play className="ml-0.5 h-7 w-7 fill-current" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-bold tracking-tight">
                    Video in arrivo
                  </p>
                  <p className="mt-1 text-sm text-white/75">
                    Spiegazione parlata in formato Stories
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Borella Motors
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Come funziona, in 30 secondi
                </p>
              </div>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-ink transition hover:text-black"
            >
              <InstagramIcon className="h-5 w-5 text-[#E1306C]" />
              Seguimi su Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
