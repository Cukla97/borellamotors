import { ClipboardList, Handshake, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Inserisci targa e pochi dati",
    text: "Parti dalla targa, aggiungi km e qualche dettaglio. Puoi anche allegare delle foto.",
  },
  {
    icon: PhoneCall,
    title: "Ti ricontattiamo con una proposta",
    text: "Entro 24 ore ti chiamiamo o scriviamo con una proposta di acquisto concreta.",
  },
  {
    icon: Handshake,
    title: "Se accetti, ci occupiamo noi di tutto",
    text: "Passaggi, documenti e ritiro: riduci al minimo i pensieri della vendita.",
  },
];

export function ComeFunziona() {
  return (
    <section id="come-funziona" className="bg-surface py-16 md:py-24">
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
            Come funziona
          </h2>
          <p className="mt-3 text-muted">
            Tre passaggi semplici, senza aste e senza mettere l&apos;auto online.
          </p>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-red">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-display text-sm font-bold tracking-wide text-red">
                    Passo {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
