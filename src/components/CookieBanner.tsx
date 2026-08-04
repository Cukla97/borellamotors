"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  readConsent,
  writeConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

type View = "hidden" | "banner" | "preferences";

export function CookieBanner() {
  const [view, setView] = useState<View>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setView("banner");
    }

    const openPreferences = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setView("preferences");
    };

    window.addEventListener("bm:open-cookie-preferences", openPreferences);
    return () => {
      window.removeEventListener("bm:open-cookie-preferences", openPreferences);
    };
  }, []);

  const save = (next: Pick<CookieConsent, "analytics" | "marketing">) => {
    writeConsent(next);
    setView("hidden");
  };

  if (view === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:p-5"
    >
      <div className="site-container max-w-4xl">
        {view === "banner" ? (
          <>
            <h2
              id="cookie-banner-title"
              className="text-lg font-bold text-black"
            >
              Informativa sui cookie
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Utilizzo cookie tecnici necessari al funzionamento del sito. Con
              il tuo consenso potrò attivare anche cookie analitici e di
              marketing. Puoi accettare tutti i cookie, rifiutare quelli non
              necessari o personalizzare le preferenze. Per saperne di più leggi
              la{" "}
              <Link href="/cookie" className="font-semibold text-black underline">
                Cookie Policy
              </Link>{" "}
              e l’
              <Link
                href="/privacy"
                className="font-semibold text-black underline"
              >
                Informativa Privacy
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                className="btn-primary !py-2.5"
                onClick={() => save({ analytics: true, marketing: true })}
              >
                Accetta tutti
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-line px-4 py-2.5 font-semibold text-black transition hover:bg-surface-soft"
                onClick={() => save({ analytics: false, marketing: false })}
              >
                Rifiuta non necessari
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-line px-4 py-2.5 font-semibold text-black transition hover:bg-surface-soft"
                onClick={() => setView("preferences")}
              >
                Personalizza
              </button>
            </div>
          </>
        ) : (
          <>
            <h2
              id="cookie-banner-title"
              className="text-lg font-bold text-black"
            >
              Preferenze cookie
            </h2>
            <p className="mt-2 text-sm text-muted">
              I cookie tecnici sono sempre attivi. Scegli se abilitare le altre
              categorie.
            </p>
            <div className="mt-4 space-y-3">
              <label className="flex items-start gap-3 rounded-lg border border-line p-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4"
                />
                <span>
                  <span className="block font-semibold text-ink">
                    Tecnici (necessari)
                  </span>
                  <span className="text-sm text-muted">
                    Servono al funzionamento del sito e alla memorizzazione
                    delle tue scelte. Non richiedono consenso.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-line p-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>
                  <span className="block font-semibold text-ink">Analitici</span>
                  <span className="text-sm text-muted">
                    Aiutano a capire come viene usato il sito, in forma
                    aggregata.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-line p-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span>
                  <span className="block font-semibold text-ink">Marketing</span>
                  <span className="text-sm text-muted">
                    Consentono comunicazioni o contenuti personalizzati, se
                    attivati.
                  </span>
                </span>
              </label>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="btn-primary !py-2.5"
                onClick={() => save({ analytics, marketing })}
              >
                Salva preferenze
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg border border-line px-4 py-2.5 font-semibold text-black transition hover:bg-surface-soft"
                onClick={() => {
                  const existing = readConsent();
                  if (existing) {
                    setView("hidden");
                  } else {
                    setAnalytics(false);
                    setMarketing(false);
                    setView("banner");
                  }
                }}
              >
                Annulla
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event("bm:open-cookie-preferences"));
}
