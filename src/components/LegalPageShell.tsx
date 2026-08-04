import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPageShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-[100svh] bg-surface">
      <header className="border-b border-line">
        <div className="site-container flex items-center justify-between py-4">
          <Link href="/" aria-label="Borella Motors - Home">
            <Image
              src="/logo-borellamotors.png"
              alt="Borella Motors"
              width={180}
              height={70}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="flex gap-4 text-sm font-semibold text-black">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/cookie" className="hover:underline">
              Cookie
            </Link>
          </nav>
        </div>
      </header>

      <article className="site-container max-w-3xl py-12 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-muted">Ultimo aggiornamento: {updated}</p>
        <div className="mt-8 space-y-8 text-ink">{children}</div>
        <Link
          href="/"
          className="mt-10 inline-flex font-semibold text-black underline"
        >
          Torna alla home
        </Link>
      </article>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-black">{title}</h2>
      <div className="mt-3 space-y-3 text-muted leading-relaxed">{children}</div>
    </section>
  );
}
