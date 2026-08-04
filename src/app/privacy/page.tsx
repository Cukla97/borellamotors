import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell, LegalSection } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Informativa Privacy | Borella Motors",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Informativa sulla privacy" updated="agosto 2026">
      <p>
        La presente informativa è resa ai sensi degli artt. 13 e 14 del
        Regolamento (UE) 2016/679 (“GDPR”) e della normativa italiana di
        riferimento a chi naviga sul sito{" "}
        <strong className="text-ink">borellamotors.com</strong> e a chi
        utilizza il form di richiesta valutazione auto.
      </p>

      <LegalSection title="1. Titolare del trattamento">
        <p>
          Il Titolare del trattamento è{" "}
          <strong className="text-ink">
            BORELLA MOTORS DI BORELLA NICCOLO&apos;
          </strong>
          .
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Email:{" "}
            <a
              className="font-semibold text-black underline"
              href="mailto:borellaniccolo@gmail.com"
            >
              borellaniccolo@gmail.com
            </a>
          </li>
          <li>Sede: Via Luigi Einaudi 1 — 31100 Treviso (TV)</li>
          <li>P.IVA: 05470920264</li>
        </ul>
        <p>
          Per esercitare i diritti o ricevere informazioni sul trattamento puoi
          scrivere a{" "}
          <a
            className="font-semibold text-black underline"
            href="mailto:borellaniccolo@gmail.com"
          >
            borellaniccolo@gmail.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Tipologie di dati trattati">
        <p>Possiamo trattare le seguenti categorie di dati:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-ink">Dati di navigazione</strong>: indirizzo
            IP, log tecnici, informazioni sul dispositivo/browser, date e orari
            di accesso, pagine visitate, nella misura necessaria al
            funzionamento del sito e alla sicurezza.
          </li>
          <li>
            <strong className="text-ink">Dati del form di valutazione</strong>:
            targa, chilometraggio, tipo di cambio, tempistiche di vendita,
            proprietari precedenti, incidenti e relative note, eventuali foto
            del veicolo, nome e cognome, email, telefono, città/provincia, note
            aggiuntive.
          </li>
          <li>
            <strong className="text-ink">Dati di consenso</strong>: preferenze
            espresse sul banner cookie e checkbox del form (privacy e contatto
            commerciale).
          </li>
        </ul>
        <p>
          Non sono richiesti dati particolari ex art. 9 GDPR. Ti preghiamo di
          non inserire nel form informazioni non necessarie.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalità e basi giuridiche">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Gestione della richiesta di valutazione</strong>{" "}
            e successivo contatto con proposta di acquisto — base giuridica:
            esecuzione di misure precontrattuali su richiesta dell’interessato
            (art. 6.1.b GDPR) e, ove richiesto, consenso (art. 6.1.a GDPR).
          </li>
          <li>
            <strong className="text-ink">Adempimenti di legge</strong> —
            art. 6.1.c GDPR.
          </li>
          <li>
            <strong className="text-ink">Funzionamento e sicurezza del sito</strong>{" "}
            (cookie tecnici e log) — art. 6.1.f GDPR (legittimo interesse).
          </li>
          <li>
            <strong className="text-ink">Cookie analitici/di marketing</strong>{" "}
            (se attivati) — solo previo consenso (art. 6.1.a GDPR). Dettagli
            nella{" "}
            <Link href="/cookie" className="font-semibold text-black underline">
              Cookie Policy
            </Link>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Natura del conferimento">
        <p>
          Il conferimento dei dati contrassegnati come obbligatori nel form è
          necessario per ricevere la valutazione. Il mancato conferimento
          impedisce l’invio della richiesta. I cookie non tecnici sono
          facoltativi e disattivati finché non presti il consenso.
        </p>
      </LegalSection>

      <LegalSection title="5. Modalità del trattamento">
        <p>
          I dati sono trattati con strumenti elettronici e misure di sicurezza
          adeguate a ridurne i rischi di accesso non autorizzato, perdita o
          uso illecito. L’accesso è limitato al personale autorizzato e ai
          fornitori che trattano i dati per conto del Titolare.
        </p>
      </LegalSection>

      <LegalSection title="6. Destinatari e trasferimenti">
        <p>I dati possono essere comunicati a:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>personale autorizzato di Borella Motors di Borella Niccolò;</li>
          <li>
            fornitori di servizi tecnici (hosting, invio email, eventuale
            storage file), nominati responsabili del trattamento ove previsto;
          </li>
          <li>autorità pubbliche, se richiesto dalla legge.</li>
        </ul>
        <p>
          Qualora i dati fossero trasferiti fuori dallo Spazio Economico
          Europeo, il trasferimento avverrà solo con le garanzie previste dal
          GDPR (es. decisioni di adeguatezza o Clausole Contrattuali Standard).
        </p>
      </LegalSection>

      <LegalSection title="7. Periodo di conservazione">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            richieste di valutazione: per il tempo necessario a gestire la
            pratica e, comunque, non oltre i termini di legge o di difesa dei
            diritti;
          </li>
          <li>
            log tecnici e cookie: secondo le durate indicate nella Cookie
            Policy o fino a revoca del consenso, ove applicabile;
          </li>
          <li>
            preferenze di consenso cookie: fino a cancellazione dal browser o
            nuova scelta.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Diritti dell’interessato">
        <p>
          Ai sensi degli artt. 15–22 GDPR puoi chiedere: accesso, rettifica,
          cancellazione, limitazione, portabilità, opposizione e revoca del
          consenso (senza pregiudicare la liceità del trattamento precedente).
        </p>
        <p>
          Hai inoltre diritto di proporre reclamo al{" "}
          <a
            className="font-semibold text-black underline"
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            Garante per la protezione dei dati personali
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Minori">
        <p>
          I servizi del sito non sono destinati a minori di 18 anni. Non
          vengono raccolti consapevolmente dati di minori.
        </p>
      </LegalSection>

      <LegalSection title="10. Modifiche">
        <p>
          Questa informativa può essere aggiornata. La data di ultimo
          aggiornamento è indicata in cima alla pagina. Ti invitiamo a
          consultarla periodicamente.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
