import type { Metadata } from "next";
import {
  Camera,
  ClipboardCheck,
  Hammer,
  MessageCircle,
} from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Riparazione grandine | Borella Motors",
  description:
    "Valuto i danni da grandine e ti propongo il ripristino più adatto. Contattami a Treviso.",
};

export default function GrandinePage() {
  return (
    <ServicePage
      eyebrow="Servizi · Grandine"
      title="Ripristino danni da grandine"
      description="Dalla stima all’intervento: ti dico cosa serve davvero e come riportare la carrozzeria in ordine, senza sorprese."
      image={{
        src: "/hero-lot.jpg",
        alt: "Auto in piazzale Borella Motors",
      }}
      highlights={[
        {
          icon: ClipboardCheck,
          title: "Ispezione chiara",
          text: "Controllo carrozzeria e superfici esposte, con stima concreta dei danni.",
        },
        {
          icon: Hammer,
          title: "Intervento mirato",
          text: "PDR o ripristino tradizionale, in base al caso e al risultato estetico.",
        },
        {
          icon: MessageCircle,
          title: "Preventivo diretto",
          text: "Ti spiego costi e tempi in modo semplice, prima di partire.",
        },
        {
          icon: Camera,
          title: "Anche se vuoi vendere",
          text: "Possiamo abbinare una valutazione dell’auto, se stai valutando la vendita.",
        },
      ]}
      steps={[
        {
          title: "Mi scrivi",
          text: "Mandami qualche foto su WhatsApp: capisco subito la situazione.",
        },
        {
          title: "Ti propongo",
          text: "Ricevi una proposta chiara su intervento, tempi e costi.",
        },
        {
          title: "Si interviene",
          text: "Organiziamo il lavoro e riportiamo la carrozzeria a livello.",
        },
      ]}
      closing="Hai la grandine sulla carrozzeria? Mandami le foto: ti rispondo in tempi rapidi."
    />
  );
}
