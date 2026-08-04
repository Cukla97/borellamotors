import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Cookie Policy | Borella Motors",
  description:
    "Informativa sui cookie utilizzati sul sito Borella Motors, ai sensi della normativa italiana ed europea.",
};

export default function CookiePage() {
  return (
    <LegalPageShell title="Cookie Policy" updated="agosto 2026">
      <p>
        Questa Cookie Policy integra l’
        <Link href="/privacy" className="font-semibold text-black underline">
          Informativa Privacy
        </Link>{" "}
        e descrive l’uso dei cookie e di tecnologie simili sul sito{" "}
        <strong className="text-ink">borellamotors.com</strong>, in conformità
        al GDPR, alla Direttiva ePrivacy e alle Linee guida del Garante Privacy
        sui cookie.
      </p>

      <LegalSection title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che i siti salvano sul tuo
          dispositivo. Consentono di far funzionare il sito, ricordare
          preferenze o, se autorizzati, analizzare l’uso delle pagine o
          supportare attività di marketing.
        </p>
      </LegalSection>

      <LegalSection title="2. Tipologie utilizzate">
        <p>
          <strong className="text-ink">Cookie tecnici / necessari</strong> —
          indispensabili al funzionamento del sito (es. sicurezza, bilanciamento
          del carico, memorizzazione della scelta sul banner cookie). Non
          richiedono consenso.
        </p>
        <p>
          <strong className="text-ink">Cookie analitici</strong> — usati, se
          attivati, per misurare traffico e prestazioni in forma aggregata.
          Vengono installati solo con il tuo consenso.
        </p>
        <p>
          <strong className="text-ink">Cookie di marketing / profilazione</strong>{" "}
          — usati, se attivati, per comunicazioni personalizzate o remarketing.
          Vengono installati solo con il tuo consenso.
        </p>
        <p>
          Allo stato attuale il sito utilizza principalmente cookie tecnici e la
          memorizzazione locale della preferenza di consenso. Eventuali
          strumenti analitici o di marketing saranno attivati solo dopo il tuo
          consenso espresso tramite il banner.
        </p>
      </LegalSection>

      <LegalSection title="3. Base giuridica">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            cookie tecnici: legittimo interesse / necessità tecnica (art. 6.1.f
            GDPR);
          </li>
          <li>
            cookie analitici e di marketing: consenso (art. 6.1.a GDPR),
            revocabile in qualsiasi momento.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Durata">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            preferenza di consenso: salvata nel browser (localStorage) fino a
            cancellazione manuale o nuova scelta;
          </li>
          <li>
            cookie di sessione: eliminati alla chiusura del browser;
          </li>
          <li>
            cookie persistenti di terze parti: secondo le durate indicate dai
            rispettivi fornitori, se e quando attivati.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Come gestire i cookie">
        <p>Puoi:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            usare i pulsanti del banner (“Accetta tutti”, “Rifiuta non
            necessari”, “Personalizza”);
          </li>
          <li>
            modificare la scelta in qualsiasi momento dal link{" "}
            <strong className="text-ink">Gestisci cookie</strong> nel footer;
          </li>
          <li>
            eliminare o bloccare i cookie dalle impostazioni del browser.
          </li>
        </ul>
        <p>
          Se rifiuti i cookie non necessari, il sito resta utilizzabile; alcune
          funzioni di analisi o marketing potrebbero non essere disponibili.
        </p>
      </LegalSection>

      <LegalSection title="6. Titolarità e contatti">
        <p>
          Titolare: BORELLA MOTORS DI BORELLA NICCOLO&apos; — Via Luigi Einaudi
          1, 31100 Treviso (TV) — P.IVA 05470920264 —{" "}
          <a
            className="font-semibold text-black underline"
            href="mailto:borellaniccolo@gmail.com"
          >
            borellaniccolo@gmail.com
          </a>
          . Per i diritti riconosciuti dal GDPR consulta l’
          <Link href="/privacy" className="font-semibold text-black underline">
            Informativa Privacy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
