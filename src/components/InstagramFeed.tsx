"use client";

import Script from "next/script";
import { useRef } from "react";

const FEED_SRC =
  process.env.NEXT_PUBLIC_SNAPWIDGET_FEED_URL ??
  "https://app.mirror-app.com/feed-instagram/b160e46a-b06c-4cd1-8e61-39dde6040bee/preview";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/";

declare global {
  interface Window {
    iFrameSetup?: (iframe: HTMLIFrameElement) => void;
  }
}

export function InstagramFeed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const setupIframe = () => {
    if (iframeRef.current && typeof window.iFrameSetup === "function") {
      window.iFrameSetup(iframeRef.current);
    }
  };

  return (
    <section id="auto" className="bg-surface-soft py-16 md:py-24">
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
            Le nostre auto
          </h2>
          <p className="mt-3 text-muted">
            Uno sguardo alle vetture che pubblichiamo su Instagram. Segui i
            nostri aggiornamenti e scrivici se ti interessa un modello.
          </p>
        </div>

        <div className="mt-10 min-h-[280px]">
          {FEED_SRC ? (
            <>
              <iframe
                ref={iframeRef}
                src={FEED_SRC}
                title="Feed Instagram Borella Motors"
                className="w-full border-0"
                style={{ overflow: "hidden" }}
                scrolling="no"
                loading="lazy"
                onLoad={setupIframe}
              />
              <Script
                src="https://cdn.jsdelivr.net/npm/@mirrorapp/iframe-bridge@latest/dist/index.umd.js"
                strategy="afterInteractive"
                onLoad={setupIframe}
              />
            </>
          ) : (
            <div className="rounded-xl border border-line bg-surface px-5 py-8 text-center md:px-8">
              <p className="text-muted">
                Visita il nostro Instagram per vedere le auto disponibili.
              </p>
              <div className="mt-5">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-line px-5 py-3 font-semibold text-black"
                >
                  Apri Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
