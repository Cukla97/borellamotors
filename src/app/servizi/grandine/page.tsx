import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Riparazione grandine | Borella Motors",
  description:
    "Interventi per danni da grandine su carrozzeria. Contatta Borella Motors a Treviso.",
};

export default function GrandinePage() {
  return (
    <ServicePage
      eyebrow="Servizi"
      title="Riparazione danni da grandine"
      description="Valutiamo i danni e ti proponiamo il percorso di ripristino più adatto: dalla stima iniziale all’intervento, con attenzione a tempi e risultato estetico."
      highlights={[
        "Ispezione e stima dei danni su carrozzeria e superfici esposte",
        "Indicazione del tipo di intervento consigliato (PDR o ripristino tradizionale, in base al caso)",
        "Preventivo chiaro e supporto nella gestione pratica del lavoro",
        "Possibilità di abbinare valutazione auto se stai pensando di vendere",
      ]}
    />
  );
}
