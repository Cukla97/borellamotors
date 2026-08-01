# Landing Page – Richiesta Valutazione Auto

## 1. Obiettivo del progetto
Creare una landing page per un rivenditore di auto usate che permetta ai clienti di:
1. Inserire i dati del proprio veicolo tramite un form.
2. Caricare (opzionalmente) foto dell'auto.
3. Inviare la richiesta di valutazione.
4. Il rivenditore riceve la richiesta via email/notifica, contatta il cliente e propone un'offerta di acquisto fuori piattaforma.

Non è richiesto un sistema di pagamento né un'area utente con login: è un semplice funnel "lead generation" (form → notifica al rivenditore → contatto telefonico/email).

---

## 2. Stack tecnico consigliato
- **Frontend**: Next.js (React) + Tailwind CSS
- **Form handling / backend**: Next.js API Route (o Server Action) che riceve i dati e invia una email
- **Invio email**: Resend, oppure Nodemailer con SMTP (es. Gmail/SendGrid)
- **Upload immagini** (opzionale): Cloudinary o Vercel Blob Storage
- **Database** (opzionale, se si vuole tenere uno storico richieste): Supabase (Postgres) o semplicemente un foglio Google/Airtable via API
- **Hosting**: Vercel
- **Validazione form**: React Hook Form + Zod

> Se il progetto deve restare più semplice, si può fare anche solo HTML/CSS/JS vanilla + un endpoint serverless per l'invio email, senza database.

---

## 3. Struttura pagine

### 3.1 Home / Landing page (`/`)
- **Hero section**
  - Titolo: es. "Vuoi vendere la tua auto? Scopri subito il valore"
  - Sottotitolo: rassicurazione (es. "Valutazione gratuita in 24h, nessun impegno")
  - CTA: bottone "Richiedi una valutazione gratuita" → scrolla o porta al form
  - Immagine/illustrazione auto
- **Sezione "Come funziona"** (3 step)
  1. Inserisci i dati della tua auto
  2. Ti ricontattiamo con una proposta
  3. Se accetti, ci occupiamo noi di tutto
- **Form di valutazione** (vedi sezione 4)
- **Sezione fiducia/trust**
  - Recensioni clienti, anni di attività, numero di auto acquistate, sede fisica, ecc.
- **FAQ** (es. "Devo pagare per la valutazione?", "Quanto tempo ci vuole?", "Devo avere il libretto?")
- **Footer**
  - Dati aziendali, P.IVA, indirizzo concessionaria, contatti, link privacy policy

### 3.2 Pagina di conferma (`/grazie`)
- Messaggio di conferma invio richiesta
- Tempistiche di risposta previste
- Eventuale invito a seguire i social o chiamare direttamente

---

## 4. Form "Richiesta valutazione" – Campi

### Dati veicolo
- Marca * (select o autocomplete)
- Modello *
- Versione/Allestimento (facoltativo)
- Anno di immatricolazione *
- Chilometraggio *
- Alimentazione * (Benzina / Diesel / GPL / Metano / Ibrida / Elettrica)
- Cambio * (Manuale / Automatico)
- Cilindrata (facoltativo)
- Colore (facoltativo)
- Numero di proprietari precedenti (facoltativo)
- Stato generale * (select: Ottimo / Buono / Discreto / Da sistemare)
- Incidenti pregressi * (Sì/No + note facoltative)
- Revisione valida fino a (facoltativo, date picker)
- Targa (facoltativo — utile per verifiche più rapide)

### Foto (facoltativo ma consigliato)
- Upload multiplo immagini (esterno, interno, cruscotto/km, eventuali danni) – max 5-6 foto

### Dati di contatto cliente
- Nome e Cognome *
- Email *
- Telefono *
- Città/Provincia *
- Note aggiuntive (facoltativo, textarea)
- Checkbox consenso privacy (obbligatorio) *
- Checkbox consenso contatto per proposta commerciale (obbligatorio) *

*(campi con * sono obbligatori)*

### Comportamento invio
- Validazione lato client (campi obbligatori, formato email/telefono)
- Al submit:
  - Mostra stato di caricamento
  - Invia i dati all'API route
  - L'API route:
    1. Valida i dati lato server
    2. Invia email al rivenditore con tutti i dati + eventuali foto allegate/linkate
    3. (Opzionale) Invia email di conferma automatica al cliente
    4. (Opzionale) Salva la richiesta su DB/Airtable per storico
  - Redirect a `/grazie` in caso di successo
  - Mostra messaggio di errore in caso di fallimento, senza far perdere i dati inseriti

---

## 5. Email di notifica al rivenditore
Contenuto email:
- Oggetto: "Nuova richiesta di valutazione – [Marca] [Modello]"
- Corpo: riepilogo ordinato di tutti i dati veicolo + dati contatto cliente
- Allegati o link alle foto caricate
- Eventuale bottone "Rispondi al cliente" (mailto: precompilato) o link diretto al numero di telefono (tel:)

---

## 6. Requisiti non funzionali
- **Responsive**: mobile-first, la maggior parte del traffico da form di questo tipo arriva da smartphone
- **Performance**: lazy loading immagini, Lighthouse score alto
- **SEO base**: title, meta description, Open Graph tags, dati strutturati LocalBusiness (schema.org) per il rivenditore
- **Privacy/GDPR**: 
  - Checkbox consenso obbligatoria collegata a una pagina Privacy Policy
  - Nessun dato sensibile raccolto oltre al necessario
- **Accessibilità**: label associate ai campi, contrasto colori adeguato, focus visibili
- **Anti-spam**: honeypot field o Google reCAPTCHA/hCaptcha sul form

---

## 7. Design/UI – linee guida
- Stile pulito, professionale, colori coerenti col brand del rivenditore (da definire: logo, palette colori)
- Font leggibile, gerarchia visiva chiara tra titoli e testo
- CTA ben visibile (colore a contrasto, sempre raggiungibile anche da mobile — considerare bottone sticky "Richiedi valutazione")
- Icone o illustrazioni a tema automotive per rendere la pagina meno "burocratica"

---

## 8. Variabili d'ambiente da configurare
```
RESEND_API_KEY= (o SMTP_HOST / SMTP_USER / SMTP_PASS)
NOTIFICATION_EMAIL= (email del rivenditore che riceve le richieste)
RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
# opzionali, se si usa storage/db
DATABASE_URL=
CLOUDINARY_URL=
```

---

## 9. Task di sviluppo (checklist per Cursor)
1. [ ] Setup progetto Next.js + Tailwind
2. [ ] Costruire componenti: Hero, ComeFunziona, FormValutazione, Trust, FAQ, Footer
3. [ ] Implementare form con React Hook Form + Zod (validazione)
4. [ ] Implementare upload immagini (facoltativo, se incluso)
5. [ ] Creare API route `/api/valutazione` per ricevere il form
6. [ ] Integrare invio email (Resend/Nodemailer)
7. [ ] Integrare anti-spam (honeypot o captcha)
8. [ ] Creare pagina `/grazie` di conferma
9. [ ] Ottimizzare SEO (meta tag, schema.org LocalBusiness)
10. [ ] Test responsive su mobile/tablet/desktop
11. [ ] Deploy su Vercel + configurazione variabili d'ambiente
12. [ ] (Opzionale) Collegare storico richieste a un DB o Airtable

---

## 10. Contenuti da fornire prima dello sviluppo
- Logo e palette colori del rivenditore
- Testi definitivi (headline, sottotitoli, FAQ, testimonianze)
- Dati aziendali per footer (P.IVA, indirizzo, contatti, orari)
- Email a cui inviare le notifiche
- Eventuali immagini/foto reali della concessionaria o del team
