function IconTag({ className }: { className?: string }) {
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
      <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3H4a1 1 0 0 0-1 1v5.59A2 2 0 0 0 3.83 11l9.58 9.59a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83Z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="m14 10 4 4" />
    </svg>
  );
}

function IconReply({ className }: { className?: string }) {
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
      <path d="M21 12a8.5 8.5 0 1 1-3.1-6.6" />
      <path d="M21 4v5h-5" />
      <path d="M8.5 9.5h2.2l1.1 2.2 1.4-4.2 1 2h2.3" />
    </svg>
  );
}

function IconLocal({ className }: { className?: string }) {
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
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
      <path d="M16 11h5" />
      <path d="M18.5 8.5v5" />
    </svg>
  );
}

function IconKeys({ className }: { className?: string }) {
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
      <path d="M15 8a4 4 0 1 0-3.2 3.9L8 15.7V18h2.3l1.2-1.2" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <path d="M14 14h6v7H9v-4.5" />
    </svg>
  );
}

const commitments = [
  {
    title: "Valutazione gratuita",
    text: "Nessun costo e nessun impegno: ricevi una proposta e decidi con calma.",
    icon: IconTag,
  },
  {
    title: "Risposta in 24 ore",
    text: "Ti ricontatto rapidamente con una stima seria e trasparente.",
    icon: IconReply,
  },
  {
    title: "Parli con me",
    text: "Rivenditore locale a Treviso, non un portale anonimo.",
    icon: IconLocal,
  },
  {
    title: "Se accetti, penso io a tutto",
    text: "Passaggi, documenti e ritiro: riduci i pensieri della vendita.",
    icon: IconKeys,
  },
] as const;

export function Trust() {
  return (
    <section
      id="impegni"
      className="section-wash section-wash-garage py-16 text-white md:py-24"
    >
      <div className="site-container grid items-start gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-14">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Un passaggio concreto, senza pressione
          </h2>
          <p className="mt-3 max-w-xl text-[1.05rem]/[1.55] text-white/80">
            Ti aiuto a vendere l&apos;auto con un processo chiaro: dati,
            proposta, vendita. Niente countdown e niente trucchi.
          </p>
        </div>
        <ul
          className="grid gap-5 min-[900px]:gap-[1.35rem]"
          aria-label="Impegni di Niccolò"
        >
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex items-start gap-4">
                <span
                  className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-red text-white shadow-[0_8px_20px_rgba(200,16,46,0.28)]"
                  aria-hidden="true"
                >
                  <Icon className="size-[1.15rem]" />
                </span>
                <div>
                  <h3 className="text-[1.05rem] font-bold">{item.title}</h3>
                  <p className="mt-1 text-[0.9rem]/[1.45] text-white/75">
                    {item.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
