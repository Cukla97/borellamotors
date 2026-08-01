import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <Image
        src="/hero-lot.jpg"
        alt="Piazzale auto usate Borella Motors"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black-deep/90 via-black/75 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep/70 via-transparent to-black-deep/30" />

      <div className="site-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red">
            Borella Motors
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Vuoi vendere la tua auto? Scopri subito il valore
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/90 md:text-lg">
            Valutazione gratuita in 24 ore, nessun impegno. Se accetti, pensiamo
            noi a tutto il resto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#valutazione" className="btn-primary">
              Richiedi una valutazione gratuita
            </a>
            <a href="#come-funziona" className="btn-secondary">
              Come funziona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
