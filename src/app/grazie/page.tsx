import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Richiesta inviata | Borella Motors",
  description: "Abbiamo ricevuto la tua richiesta di valutazione.",
};

export default function GraziePage() {
  return (
    <main className="flex min-h-[100svh] flex-col bg-surface-soft">
      <header className="border-b border-line bg-surface">
        <div className="site-container flex items-center py-4">
          <Link href="/" aria-label="Borella Motors - Home">
            <Image
              src="/logo-borellamotors.png"
              alt="Borella Motors"
              width={180}
              height={70}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      <div className="site-container flex flex-1 items-center py-16">
        <div className="mx-auto max-w-xl text-center">
          <CheckCircle2
            className="mx-auto h-14 w-14 text-red"
            aria-hidden
          />
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-4xl">
            Richiesta inviata
          </h1>
          <p className="mt-4 text-muted">
            Grazie. Abbiamo ricevuto i dati della tua auto. Ti ricontattiamo di
            solito entro 24 ore lavorative con una proposta. Se preferisci, puoi
            scriverci subito su WhatsApp.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {WHATSAPP_LABEL}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-line px-5 py-3 font-semibold text-black"
            >
              Torna alla home
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            Oppure{" "}
            <a
              href="mailto:borellaniccolo@gmail.com"
              className="font-semibold text-black underline"
            >
              scrivici via email
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
