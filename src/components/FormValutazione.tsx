"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Upload } from "lucide-react";
import {
  valutazioneSchema,
  type ValutazioneFormData,
} from "@/lib/schema";

export function FormValutazione() {
  const router = useRouter();
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ValutazioneFormData>({
    resolver: zodResolver(valutazioneSchema),
    defaultValues: {
      cambio: "Manuale",
      tempistiche: undefined,
      incidenti: "No",
      website: "",
    },
  });

  const incidenti = watch("incidenti");

  const onPhotosChange = (files: FileList | null) => {
    if (!files) return;
    const next = Array.from(files).slice(0, 6);
    setPhotos(next);
  };

  const onSubmit = async (data: ValutazioneFormData) => {
    setSubmitError(null);

    if (data.website) {
      router.push("/grazie");
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      formData.append(key, String(value));
    });
    photos.forEach((file) => formData.append("photos", file));

    try {
      const res = await fetch("/api/valutazione", {
        method: "POST",
        body: formData,
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setSubmitError(json.error || "Invio non riuscito. Riprova tra poco.");
        return;
      }

      router.push("/grazie");
    } catch {
      setSubmitError("Errore di rete. Controlla la connessione e riprova.");
    }
  };

  return (
    <section id="valutazione" className="bg-surface py-16 md:py-24">
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
            Richiedi una valutazione gratuita
          </h2>
          <p className="mt-3 text-muted">
            Parti dalla targa: con quella recuperiamo i dati principali
            dell&apos;auto. Aggiungi solo ciò che serve per una proposta più
            precisa.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-10 space-y-10"
          noValidate
        >
          <fieldset className="space-y-5">
            <legend className="text-xl font-bold text-ink">Dati veicolo</legend>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="field md:col-span-2">
                <label htmlFor="targa">Targa *</label>
                <input
                  id="targa"
                  placeholder="es. AB123CD"
                  autoComplete="off"
                  className="uppercase"
                  {...register("targa")}
                />
                {errors.targa && (
                  <span className="error">{errors.targa.message}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="chilometraggio">Chilometraggio *</label>
                <input
                  id="chilometraggio"
                  type="number"
                  inputMode="numeric"
                  {...register("chilometraggio", { valueAsNumber: true })}
                />
                {errors.chilometraggio && (
                  <span className="error">{errors.chilometraggio.message}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="cambio">Cambio *</label>
                <select id="cambio" {...register("cambio")}>
                  <option>Manuale</option>
                  <option>Automatico</option>
                </select>
              </div>
              <div className="field md:col-span-2">
                <label htmlFor="tempistiche">In quanto vuoi venderla? *</label>
                <select id="tempistiche" {...register("tempistiche")}>
                  <option value="">Seleziona</option>
                  <option value="Subito">Subito</option>
                  <option value="Entro 1 mese">Entro 1 mese</option>
                  <option value="Entro 3 mesi">Entro 3 mesi</option>
                  <option value="Non ho fretta">Non ho fretta</option>
                </select>
                {errors.tempistiche && (
                  <span className="error">{errors.tempistiche.message}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="proprietari">Proprietari precedenti</label>
                <input
                  id="proprietari"
                  placeholder="es. 1"
                  {...register("proprietari")}
                />
              </div>
              <div className="field">
                <label htmlFor="incidenti">Incidenti pregressi *</label>
                <select id="incidenti" {...register("incidenti")}>
                  <option value="No">No</option>
                  <option value="Si">Sì</option>
                </select>
              </div>
              {incidenti === "Si" && (
                <div className="field md:col-span-2">
                  <label htmlFor="incidentiNote">Note sugli incidenti</label>
                  <textarea
                    id="incidentiNote"
                    rows={3}
                    {...register("incidentiNote")}
                  />
                </div>
              )}
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-xl font-bold text-ink">
              Foto del veicolo
            </legend>
            <p className="text-sm text-muted">
              Facoltativo ma consigliato. Massimo 6 foto (esterno, interno,
              cruscotto/km, eventuali danni).
            </p>
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line bg-surface-soft px-4 py-8 text-center transition hover:border-black">
              <Upload className="h-6 w-6 text-black" aria-hidden />
              <span className="font-semibold text-ink">
                Carica fino a 6 foto
              </span>
              <span className="text-sm text-muted">JPG, PNG o WEBP</span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(e) => onPhotosChange(e.target.files)}
              />
            </label>
            {photos.length > 0 && (
              <p className="text-sm text-muted">
                {photos.length} foto selezionate:{" "}
                {photos.map((f) => f.name).join(", ")}
              </p>
            )}
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-xl font-bold text-ink">
              I tuoi contatti
            </legend>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="field md:col-span-2">
                <label htmlFor="nome">Nome e cognome *</label>
                <input id="nome" {...register("nome")} />
                {errors.nome && (
                  <span className="error">{errors.nome.message}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" {...register("email")} />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="telefono">Telefono *</label>
                <input id="telefono" type="tel" {...register("telefono")} />
                {errors.telefono && (
                  <span className="error">{errors.telefono.message}</span>
                )}
              </div>
              <div className="field md:col-span-2">
                <label htmlFor="citta">Città / Provincia *</label>
                <input id="citta" {...register("citta")} />
                {errors.citta && (
                  <span className="error">{errors.citta.message}</span>
                )}
              </div>
              <div className="field md:col-span-2">
                <label htmlFor="note">Note aggiuntive</label>
                <textarea id="note" rows={4} {...register("note")} />
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 text-sm text-ink">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  {...register("privacy")}
                />
                <span>
                  Acconsento al trattamento dei dati secondo la{" "}
                  <a href="/privacy" className="font-semibold text-black underline">
                    Privacy Policy
                  </a>{" "}
                  *
                </span>
              </label>
              {errors.privacy && (
                <span className="error block">{errors.privacy.message}</span>
              )}
              <label className="flex items-start gap-3 text-sm text-ink">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  {...register("marketing")}
                />
                <span>
                  Acconsento a essere ricontattato per ricevere una proposta di
                  acquisto *
                </span>
              </label>
              {errors.marketing && (
                <span className="error block">{errors.marketing.message}</span>
              )}
            </div>
          </fieldset>

          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          {submitError && (
            <div
              role="alert"
              className="rounded-lg border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger"
            >
              {submitError}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Invio in corso...
              </>
            ) : (
              "Invia richiesta di valutazione"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
