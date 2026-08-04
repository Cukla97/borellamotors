import Image from "next/image";
import Link from "next/link";
import { ManageCookiesButton } from "@/components/ManageCookiesButton";

export function Footer() {
  return (
    <footer className="bg-black-deep py-12 text-white">
      <div className="site-container grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
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
            <li>Via Luigi Einaudi 1 — 31100 Treviso (TV)</li>
            <li>P.IVA: 05470920264</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Link utili</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="#valutazione" className="hover:text-white">
                Richiedi valutazione
              </a>
            </li>
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
