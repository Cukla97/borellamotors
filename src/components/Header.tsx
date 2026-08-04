import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between py-3 md:py-4">
        <Link href="/" aria-label="Borella Motors - Home">
          <Image
            src="/logo-borellamotors.png"
            alt="Borella Motors"
            width={220}
            height={86}
            priority
            className="h-10 w-auto brightness-0 invert md:h-11"
          />
        </Link>
        <a href="#valutazione" className="btn-primary !py-2.5 !px-4 text-sm">
          Valuta ora
        </a>
      </div>
    </header>
  );
}
