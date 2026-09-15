"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, CircleGauge, Clock, Loader2, TriangleAlert, Upload, X } from "lucide-react";
import {
  valutazioneSchema,
  type ValutazioneFormData,
} from "@/lib/schema";
import { CtaProof } from "@/components/CtaProof";

function IconPlate({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <path d="M5 7v10" />
      <path d="M8.5 10.5h3M13.5 10.5h3M8.5 13.5h8" />
    </svg>
  );
}

const STEPS = [
  { id: 1, label: "Dati veicolo" },
  { id: 2, label: "Foto" },
  { id: 3, label: "Contatti" },
] as const;

const STEP1_FIELDS = [
  "targa",
  "chilometraggio",
  "tempistiche",
  "incidenti",
  "incidentiNote",
] as const;

const STEP3_FIELDS = [
  "nome",
  "telefono",
  "citta",
  "privacy",
  "marketing",
] as const;

export function FormValutazione() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ValutazioneFormData>({
    resolver: zodResolver(valutazioneSchema),
    defaultValues: {
      tempistiche: undefined,
      incidenti: "No",
      website: "",
    },
    mode: "onTouched",
  });

  const incidenti = watch("incidenti");

  const onPhotosChange = (files: FileList | null) => {
    if (!files) return;
    const next = Array.from(files).slice(0, 6);
    setPhotos(next);
  };

  const removePhoto = (index: number) => {
    setPhotos((current) => current.filter((_, i) => i !== index));
  };

  const goNext = async () => {
    setSubmitError(null);
    if (step === 1) {
      const ok = await trigger([...STEP1_FIELDS]);
      if (!ok) return;
      setStep(2);
      return;
    }
    if (step === 2) {
      setStep(3);
    }
  };

  const goBack = () => {
    setSubmitError(null);
    setStep((current) => Math.max(1, current - 1));
  };

  const onSubmit = async (data: ValutazioneFormData) => {
    if (step !== 3) return;
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
        <div className="valutazione-sheet">
          <span className="lot-sticker lot-sticker--sheet-free" aria-hidden>
            Gratis
          </span>
          <div className="valutazione-sheet-head">
            <h2 className="valutazione-sheet-title">
              Richiedi una valutazione <em>gratuita</em>
            </h2>
            <p className="valutazione-sheet-lead">
              Tre passi veloci: dati dell&apos;auto, foto e contatti.
            </p>
          </div>

        <ol className="mt-8 flex flex-wrap gap-2 sm:gap-3" aria-label="Passaggi form">
          {STEPS.map((item) => {
            const active = step === item.id;
            const done = step > item.id;
            return (
              <li
                key={item.id}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                  active
                    ? "bg-black text-white"
                    : done
                      ? "bg-red text-white"
                      : "bg-black/5 text-muted"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                    active || done
                      ? "bg-white/20 text-white"
                      : "bg-black/10 text-muted"
                  }`}
                >
                  {item.id}
                </span>
                {item.label}
              </li>
            );
          })}
        </ol>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (step < 3) {
              void goNext();
              return;
            }
            void handleSubmit(onSubmit)(event);
          }}
          className="form-compact relative mt-8 space-y-6"
          noValidate
        >
          {step === 1 && (
            <fieldset className="space-y-3">
              <legend className="text-lg font-bold text-ink">
                1. Dati tecnici
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="field">
                  <label htmlFor="targa">
                    <IconPlate className="field-ico" aria-hidden />
                    Targa *
                  </label>
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
                  <label htmlFor="chilometraggio">
                    <CircleGauge className="field-ico" aria-hidden />
                    Chilometraggio *
                  </label>
                  <input
                    id="chilometraggio"
                    type="number"
                    inputMode="numeric"
                    {...register("chilometraggio", { valueAsNumber: true })}
                  />
                  {errors.chilometraggio && (
                    <span className="error">
                      {errors.chilometraggio.message}
                    </span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="tempistiche">
                    <Clock className="field-ico" aria-hidden />
                    In quanto vuoi venderla? *
                  </label>
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
                  <label htmlFor="incidenti">
                    <TriangleAlert className="field-ico" aria-hidden />
                    Incidenti pregressi *
                  </label>
                  <select id="incidenti" {...register("incidenti")}>
                    <option value="No">No</option>
                    <option value="Si">Sì</option>
                  </select>
                </div>
                {incidenti === "Si" && (
                  <div className="field sm:col-span-2">
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
          )}

          {step === 2 && (
            <fieldset className="space-y-3">
              <legend className="text-lg font-bold text-ink">
                2. Foto del veicolo
              </legend>
              <p className="text-sm text-muted">
                Facoltativo ma utile. Massimo 6 foto (esterno, interno,
                cruscotto/km, danni). Puoi anche saltare questo passo.
              </p>
              <label className="flex min-h-[140px] cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line bg-white/70 px-4 py-8 text-center transition hover:border-black">
                <Upload className="h-6 w-6 text-black" aria-hidden />
                <span className="text-sm">
                  <span className="font-semibold text-ink">
                    Carica fino a 6 foto
                  </span>
                  <span className="mt-1 block text-muted">
                    JPG, PNG o WEBP
                  </span>
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
                <div
                  role="status"
                  className="rounded-xl border-2 border-red bg-red/5 px-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-red"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-ink">
                        {photos.length === 1
                          ? "1 foto caricata"
                          : `${photos.length} foto caricate`}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {photos.map((file, index) => (
                          <li
                            key={`${file.name}-${file.size}-${index}`}
                            className="inline-flex max-w-full items-center gap-1.5 rounded-md bg-black py-1 pl-2.5 pr-1 text-xs font-semibold text-white"
                          >
                            <span className="truncate" title={file.name}>
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removePhoto(index)}
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm text-white/80 transition hover:bg-white/15 hover:text-white"
                              aria-label={`Rimuovi ${file.name}`}
                            >
                              <X className="h-3.5 w-3.5" aria-hidden />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className="space-y-3">
              <legend className="text-lg font-bold text-ink">
                3. I tuoi contatti
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="field sm:col-span-2">
                  <label htmlFor="nome">Nome e cognome *</label>
                  <input id="nome" {...register("nome")} />
                  {errors.nome && (
                    <span className="error">{errors.nome.message}</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="telefono">Telefono *</label>
                  <input id="telefono" type="tel" {...register("telefono")} />
                  {errors.telefono && (
                    <span className="error">{errors.telefono.message}</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="citta">Città / Provincia *</label>
                  <input id="citta" {...register("citta")} />
                  {errors.citta && (
                    <span className="error">{errors.citta.message}</span>
                  )}
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
                    <a
                      href="/privacy"
                      className="font-semibold text-black underline"
                    >
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
                    Acconsento a essere ricontattato per ricevere una proposta
                    di acquisto *
                  </span>
                </label>
                {errors.marketing && (
                  <span className="error block">
                    {errors.marketing.message}
                  </span>
                )}
              </div>
            </fieldset>
          )}

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

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center justify-center rounded-lg border border-line px-5 py-3 font-semibold text-black transition hover:border-black"
              >
                Indietro
              </button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={goNext}
                className="btn-primary w-full sm:w-auto"
              >
                {step === 2 && photos.length === 0
                  ? "Salta e continua"
                  : "Continua"}
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
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
            )}
          </div>
          <CtaProof />
        </form>
        </div>
      </div>
    </section>
  );
}
