import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

type ServicePageProps = {
  title: string;
  eyebrow: string;
  description: string;
  highlights: string[];
};

export function ServicePage({
  title,
  eyebrow,
  description,
  highlights,
}: ServicePageProps) {
  return (
    <>
      <Header />
      <main className="bg-surface">
        <section className="bg-black pt-28 pb-16 text-white md:pt-32 md:pb-20">
          <div className="site-container max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-base text-white/80 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {WHATSAPP_LABEL}
              </a>
              <Link href="/#valutazione" className="btn-secondary">
                Oppure valuta la tua auto
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="site-container max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
              Cosa include
            </h2>
            <ul className="mt-6 space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="border-b border-line pb-4 text-muted last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-muted">
              Vuoi un preventivo o una valutazione sul posto? Contattaci su
              WhatsApp: ti rispondiamo in tempi rapidi.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
