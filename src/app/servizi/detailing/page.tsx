import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Detailing auto | Borella Motors",
  description:
    "Detailing e cura estetica dell’auto. Contatta Borella Motors a Treviso.",
};

export default function DetailingPage() {
  return (
    <ServicePage
      eyebrow="Servizi"
      title="Detailing e cura dell’auto"
      description="Trattamenti di detailing per valorizzare aspetto e protezione della vettura: dalla pulizia approfondita alla cura di carrozzeria e interni."
      highlights={[
        "Decontaminazione e lavaggio professionale",
        "Trattamenti su carrozzeria per profondità del colore e protezione",
        "Pulizia e sanificazione interni su richiesta",
        "Consulenza sul trattamento più adatto allo stato della tua auto",
      ]}
    />
  );
}
