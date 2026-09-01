import { BadgeCheck, MessageSquare, Scan } from "lucide-react";
import { ComeFunzionaStory } from "@/components/ComeFunzionaStory";
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

          {/* Right: Stories video */}
          <div className="order-1 mx-auto w-full max-w-[280px] lg:order-2 lg:mx-0 lg:max-w-none">
            <ComeFunzionaStory />
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
