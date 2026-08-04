"use client";

import Script from "next/script";

const APP_ID =
  process.env.NEXT_PUBLIC_ELFSIGHT_APP_ID ??
  "dbf71334-2929-4f0b-9145-5b9ea0401dd5";

export function InstagramFeed() {
  return (
    <section
      id="auto"
      className="section-wash section-wash-garage py-16 md:py-24"
    >
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Le mie auto
          </h2>
          <p className="mt-3 text-white/80">
            Uno sguardo alle vetture che pubblico su Instagram. Segui i miei
            aggiornamenti e scrivimi se ti interessa un modello.
          </p>
        </div>

        <div className="mt-10 min-h-[280px]">
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
          <div
            className={`elfsight-app-${APP_ID}`}
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
