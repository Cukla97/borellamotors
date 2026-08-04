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
    <section
      id="valutazione"
      className="section-wash section-wash-signal py-16 md:py-24"
    >
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 className="inline-block border-b-4 border-red pb-2 text-3xl font-bold tracking-tight text-black md:text-4xl">
            Richiedi una valutazione{" "}
            <span className="word-blink">gratuita</span>
          </h2>
          <p className="mt-3 text-muted">
            Parti dalla targa: con quella recupero i dati principali
            dell&apos;auto. Aggiungi solo ciò che serve per una proposta più
            precisa.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-compact relative mt-8 space-y-6"
          noValidate
        >
          <fieldset className="space-y-3">
            <legend className="text-lg font-bold text-ink">Dati veicolo</legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="field">
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
              <div className="field sm:col-span-2 lg:col-span-1">
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
                <div className="field sm:col-span-2 lg:col-span-3">
                  <label htmlFor="incidentiNote">Note sugli incidenti</label>
                  <textarea
                    id="incidentiNote"
                    rows={2}
                    {...register("incidentiNote")}
                  />
                </div>
              )}
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-lg font-bold text-ink">
              Foto del veicolo
            </legend>
            <p className="text-sm text-muted">
              Facoltativo. Massimo 6 foto (esterno, interno, cruscotto/km,
              danni).
            </p>
            <label className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-dashed border-line bg-surface-soft px-4 py-4 text-center transition hover:border-black sm:justify-start">
              <Upload className="h-5 w-5 shrink-0 text-black" aria-hidden />
              <span className="text-sm">
                <span className="font-semibold text-ink">
                  Carica fino a 6 foto
                </span>
                <span className="text-muted"> · JPG, PNG o WEBP</span>
              </span>
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

          <fieldset className="space-y-3">
            <legend className="text-lg font-bold text-ink">
              I tuoi contatti
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="field">
                <label htmlFor="nome">Nome e cognome *</label>
                <input id="nome" {...register("nome")} />
                {errors.nome && (
                  <span className="error">{errors.nome.message}</span>
                )}
              </div>
              <div className="field">
                <label htmlFor="citta">Città / Provincia *</label>
                <input id="citta" {...register("citta")} />
                {errors.citta && (
                  <span className="error">{errors.citta.message}</span>
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
              <div className="field sm:col-span-2">
                <label htmlFor="note">Note aggiuntive</label>
                <textarea id="note" rows={2} {...register("note")} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-start gap-2.5 text-sm text-ink">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4"
                  {...register("privacy")}
                />
                <span>
                  Acconsento al trattamento dei dati secondo l’{" "}
                  <a href="/privacy" className="font-semibold text-black underline">
                    Informativa Privacy
                  </a>{" "}
                  *
                </span>
              </label>
              {errors.privacy && (
                <span className="error block">{errors.privacy.message}</span>
              )}
              <label className="flex items-start gap-2.5 text-sm text-ink">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4"
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
