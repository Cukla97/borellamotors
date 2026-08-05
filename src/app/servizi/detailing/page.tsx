import type { Metadata } from "next";
import {
  Droplets,
  Sparkles,
  Sofa,
  Shield,
} from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Detailing auto | Borella Motors",
  description:
    "Detailing a partire da €130. Far tornare brillante e protetta la tua auto a Treviso.",
};

export default function DetailingPage() {
  return (
    <ServicePage
      eyebrow="Servizi · Detailing"
      title="Detailing e cura dell’auto"
      priceFrom="€130"
      description="Trattamenti mirati per pulizia, profondità del colore e protezione: l’auto torna curata, senza esagerare con i passaggi inutili."
      image={{
        src: "/trust-handshake.jpg",
        alt: "Dettaglio cura auto Borella Motors",
      }}
      highlights={[
        {
          icon: Droplets,
          title: "Lavaggio serio",
          text: "Decontaminazione e lavaggio professionale, non un passaggio frettoloso.",
        },
        {
          icon: Sparkles,
          title: "Carrozzeria valorizzata",
          text: "Trattamenti per far tornare lucido e pieno il colore.",
        },
        {
          icon: Shield,
          title: "Protezione",
          text: "Scudi e finiture per mantenere più a lungo il risultato.",
        },
        {
          icon: Sofa,
          title: "Interni su richiesta",
          text: "Pulizia e sanificazione abitacolo, se serve davvero.",
        },
      ]}
      steps={[
        {
          title: "Mi racconti l’auto",
          text: "Stato attuale, obiettivo e tempi: capiamo insieme il trattamento giusto.",
        },
        {
          title: "Definiamo il lavoro",
          text: "Ti propongo solo ciò che serve, con tempi e costi chiari.",
        },
        {
          title: "Consegno il risultato",
          text: "Auto curata, ordinata e pronta da guidare o da mostrare.",
        },
      ]}
      closing="Vuoi far tornare splendida la tua auto? Scrivimi su WhatsApp e partiamo da lì."
    />
  );
}
