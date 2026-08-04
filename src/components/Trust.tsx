import Image from "next/image";
import { MapPin, ShieldCheck, Clock3 } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Valutazione gratuita",
    text: "Nessun costo e nessun impegno: ricevi una proposta e decidi con calma.",
  },
  {
    icon: Clock3,
    title: "Risposta in 24 ore",
    text: "Ti ricontatto rapidamente con una stima seria e trasparente.",
  },
  {
    icon: MapPin,
    title: "Rivenditore locale",
    text: "Parli con me, non con un portale anonimo.",
  },
];

export function Trust() {
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="site-container grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Un passaggio concreto, senza pressione
          </h2>
          <p className="mt-3 text-white/80">
            Ti aiuto a vendere l&apos;auto con un processo chiaro: dati,
            proposta, vendita. Niente countdown e niente trucchi.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold">{point.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{point.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/trust-handshake.jpg"
            alt="Momento di accordo tra cliente e rivenditore"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
