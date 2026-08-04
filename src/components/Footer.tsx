import Image from "next/image";
import Link from "next/link";
import { ManageCookiesButton } from "@/components/ManageCookiesButton";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-black-deep py-12 text-white">
      <div className="site-container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo-borellamotors.png"
            alt="Borella Motors"
            width={180}
            height={70}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Valutazione gratuita della tua auto usata. Se accetti, gestiamo noi
            i passaggi della vendita.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Contatti</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>BORELLA MOTORS DI BORELLA NICCOLO&apos;</li>
            <li>
              Email:{" "}
              <a
                href="mailto:borellaniccolo@gmail.com"
                className="hover:text-white"
              >
                borellaniccolo@gmail.com
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-whatsapp hover:underline"
              >
                {WHATSAPP_LABEL}
              </a>
            </li>
            <li>Via Luigi Einaudi 1 — 31100 Treviso (TV)</li>
            <li>P.IVA: 05470920264</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Servizi</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/#valutazione" className="hover:text-white">
                Valutazione auto
              </Link>
            </li>
            <li>
              <Link href="/servizi/grandine" className="hover:text-white">
                Grandine
              </Link>
            </li>
            <li>
              <Link href="/servizi/detailing" className="hover:text-white">
                Detailing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Link utili</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Informativa Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookie" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
            <li>
              <ManageCookiesButton />
            </li>
          </ul>
        </div>
      </div>
      <div className="site-container mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} BORELLA MOTORS DI BORELLA NICCOLO&apos;.
        Tutti i diritti riservati.
      </div>
    </footer>
  );
}
