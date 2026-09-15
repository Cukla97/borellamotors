import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="hero-collage">
      <div className="hero-collage-stage">
        <Image
          src="/hero-car-left.png"
          alt=""
          width={873}
          height={586}
          sizes="(max-width: 768px) 56vw, 40vw"
          className="hero-car hero-car--left"
          priority
          aria-hidden
        />
        <Image
          src="/hero-car-right.png"
          alt=""
          width={1100}
          height={535}
          sizes="(max-width: 768px) 56vw, 40vw"
          className="hero-car hero-car--right"
          priority
          aria-hidden
        />

        <div className="hero-person">
          <h1 className="hero-wordmark">Vuoi vendere la tua auto?</h1>
          <Image
            src="/foto-niik.png"
            alt="Niccolò Borella, titolare di Borella Motors"
            width={1122}
            height={1402}
            priority
            sizes="(max-width: 768px) 70vw, 34vw"
            className="hero-person-img"
          />
        </div>
      </div>

      <div className="hero-collage-cta">
        <p className="hero-collage-lead">
          Valutazione gratuita in 24 ore, nessun impegno. Se accetti, penso io a
          tutto il resto.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
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
        <p className="mt-4 text-center">
          <a
            href="#come-funziona"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink/70 underline-offset-4 transition hover:text-ink hover:underline"
          >
            Come funziona
            <ChevronDown className="h-4 w-4" aria-hidden />
          </a>
        </p>
      </div>
    </section>
  );
}
