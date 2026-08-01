import { z } from "zod";

export const valutazioneSchema = z
  .object({
    targa: z
      .string()
      .trim()
      .min(5, "Inserisci la targa")
      .max(10, "Targa non valida")
      .regex(/^[A-Za-z0-9\s-]{5,10}$/, "Targa non valida"),
    chilometraggio: z
      .number({ error: "Inserisci il chilometraggio" })
      .int()
      .min(0, "Chilometraggio non valido")
      .max(999999, "Chilometraggio non valido"),
    cambio: z.enum(["Manuale", "Automatico"]),
    tempistiche: z.enum(
      ["Subito", "Entro 1 mese", "Entro 3 mesi", "Non ho fretta"],
      { error: "Indica entro quando vuoi venderla" },
    ),
    proprietari: z.string().optional(),
    incidenti: z.enum(["Si", "No"]),
    incidentiNote: z.string().optional(),
    nome: z.string().min(2, "Inserisci nome e cognome"),
    email: z.email("Email non valida"),
    telefono: z
      .string()
      .min(8, "Telefono non valido")
      .regex(/^[+\d\s().-]{8,20}$/, "Telefono non valido"),
    citta: z.string().min(2, "Inserisci città o provincia"),
    note: z.string().optional(),
    privacy: z.literal(true, {
      error: "Devi accettare la privacy policy",
    }),
    marketing: z.literal(true, {
      error: "Devi accettare di essere ricontattato",
    }),
    website: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.incidenti === "Si" && data.incidentiNote && data.incidentiNote.length > 500) {
      ctx.addIssue({
        code: "custom",
        message: "Nota troppo lunga",
        path: ["incidentiNote"],
      });
    }
  });

export type ValutazioneFormData = z.infer<typeof valutazioneSchema>;
