const faqs = [
  {
    q: "Devo pagare per la valutazione?",
    a: "No. La valutazione è gratuita e senza impegno.",
  },
  {
    q: "Quanto tempo ci vuole?",
    a: "Di solito ti ricontattiamo entro 24 ore lavorative dalla richiesta.",
  },
  {
    q: "Devo avere il libretto?",
    a: "Sì, in fase di proposta ti servirà il libretto di circolazione. Per la prima richiesta bastano i dati principali dell’auto.",
  },
  {
    q: "Devo caricare le foto?",
    a: "Non è obbligatorio, ma aiuta a proporti una stima più precisa e veloce.",
  },
  {
    q: "Cosa succede dopo l’invio?",
    a: "Riceviamo la richiesta, la valutiamo e ti contattiamo per telefono o email con una proposta.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-surface-soft py-16 md:py-24">
      <div className="site-container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
            Domande frequenti
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-red transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
              <p className="mt-3 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
