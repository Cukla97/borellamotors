import { NextResponse } from "next/server";
import { Resend } from "resend";
import { valutazioneSchema } from "@/lib/schema";

export const runtime = "nodejs";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (getString(formData, "website")) {
      return NextResponse.json({ ok: true });
    }

    const raw = {
      targa: getString(formData, "targa"),
      chilometraggio: Number(getString(formData, "chilometraggio")),
      tempistiche: getString(formData, "tempistiche"),
      incidenti: getString(formData, "incidenti"),
      incidentiNote: getString(formData, "incidentiNote") || undefined,
      nome: getString(formData, "nome"),
      telefono: getString(formData, "telefono"),
      citta: getString(formData, "citta"),
      privacy: getString(formData, "privacy") === "true",
      marketing: getString(formData, "marketing") === "true",
    };

    const parsed = valutazioneSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Dati non validi. Controlla i campi obbligatori." },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const photos = formData
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0)
      .slice(0, 6);

    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;
    const targa = data.targa.trim().toUpperCase();

    const lines = [
      `Nuova richiesta di valutazione`,
      ``,
      `VEICOLO`,
      `Targa: ${targa}`,
      `Km: ${data.chilometraggio}`,
      `Tempistiche vendita: ${data.tempistiche}`,
      `Incidenti: ${data.incidenti}${data.incidentiNote ? ` (${data.incidentiNote})` : ""}`,
      ``,
      `CONTATTO`,
      `Nome: ${data.nome}`,
      `Telefono: ${data.telefono}`,
      `Città: ${data.citta}`,
      ``,
      `Foto allegate: ${photos.length}`,
    ];

    if (resendKey && notificationEmail) {
      const resend = new Resend(resendKey);
      const attachments = await Promise.all(
        photos.map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        })),
      );

      const { error } = await resend.emails.send({
        from: process.env.FROM_EMAIL || "Borella Motors <onboarding@resend.dev>",
        to: notificationEmail,
        subject: `Nuova richiesta di valutazione – ${targa}`,
        text: lines.join("\n"),
        attachments,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { ok: false, error: "Invio email non riuscito. Riprova più tardi." },
          { status: 502 },
        );
      }
    } else {
      console.info("[valutazione]", {
        ...data,
        targa,
        photos: photos.map((p) => ({ name: p.name, size: p.size })),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Errore del server. Riprova più tardi." },
      { status: 500 },
    );
  }
}
