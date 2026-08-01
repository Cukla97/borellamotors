import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Borella Motors",
  description: "Informativa sulla privacy di Borella Motors.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[100svh] bg-surface">
      <header className="border-b border-line">
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

      <article className="site-container max-w-3xl py-12 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted">
          Ultimo aggiornamento: agosto 2026. Documento informativo di base —
          da completare con i dati del titolare del trattamento.
        </p>

        <div className="prose mt-8 space-y-6 text-ink">
          <section>
            <h2 className="text-xl font-bold text-black">1. Titolare</h2>
            <p className="mt-2 text-muted">
              Borella Motors — contatti e P.IVA da inserire. Email di
              riferimento: info@borellamotors.it
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-black">2. Dati raccolti</h2>
            <p className="mt-2 text-muted">
              Attraverso il form di valutazione raccogliamo dati del veicolo
              (marca, modello, anno, km, stato, eventuali foto) e dati di
              contatto (nome, email, telefono, città). Non raccogliamo dati
              particolari oltre a quelli necessari per formulare una proposta.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-black">3. Finalità</h2>
            <p className="mt-2 text-muted">
              I dati sono usati per rispondere alla richiesta di valutazione e
              contattarti con una proposta di acquisto, solo con il tuo
              consenso esplicito.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-black">4. Conservazione</h2>
            <p className="mt-2 text-muted">
              I dati sono conservati per il tempo necessario a gestire la
              richiesta e gli obblighi di legge. Puoi chiedere cancellazione o
              rettifica scrivendo a info@borellamotors.it.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-black">5. Diritti</h2>
            <p className="mt-2 text-muted">
              Hai diritto di accesso, rettifica, cancellazione, limitazione e
              opposizione al trattamento, nonché di proporre reclamo al Garante
              Privacy.
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex font-semibold text-black underline"
        >
          Torna alla home
        </Link>
      </article>
    </main>
  );
}
