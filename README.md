# Borella Motors — Landing valutazione auto

Landing page Next.js per richiedere la valutazione gratuita di un'auto usata.

## Stack

- Next.js + Tailwind CSS
- React Hook Form + Zod
- Invio email con Resend

## Sviluppo locale

```bash
npm install
cp .env.example .env.local
# inserisci RESEND_API_KEY e NOTIFICATION_EMAIL
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Variabili d'ambiente

| Variabile | Descrizione |
|---|---|
| `RESEND_API_KEY` | API key Resend |
| `NOTIFICATION_EMAIL` | Email che riceve le richieste |
| `FROM_EMAIL` | Mittente (opzionale; in prod usa un dominio verificato su Resend) |

## Deploy su Vercel

1. Importa il repo su [vercel.com/new](https://vercel.com/new)
2. Aggiungi le Environment Variables sopra
3. Deploy

Framework preset: **Next.js** (rilevato automaticamente).
