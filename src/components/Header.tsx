import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="site-container flex items-center justify-between py-4 md:py-5">
        <Link href="/" aria-label="Borella Motors - Home">
          <Image
            src="/logo-borellamotors.png"
            alt="Borella Motors"
            width={220}
            height={86}
            priority
            className="h-10 w-auto brightness-0 invert md:h-12"
          />
        </Link>
        <a href="#valutazione" className="btn-primary !py-2.5 !px-4 text-sm">
          Valuta ora
        </a>
      </div>
    </header>
  );
}
