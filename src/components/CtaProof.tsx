function Face({
  skin,
  hair,
  shirt,
  hairPath,
}: {
  skin: string;
  hair: string;
  shirt: string;
  hairPath: string;
}) {
  return (
    <svg viewBox="0 0 40 40" className="cta-proof-face" aria-hidden>
      <circle cx="20" cy="20" r="20" fill={shirt} />
      <circle cx="20" cy="18" r="9.5" fill={skin} />
      <circle cx="16.5" cy="17.5" r="1.15" fill="#111" />
      <circle cx="23.5" cy="17.5" r="1.15" fill="#111" />
      <path d={hairPath} fill={hair} />
      <ellipse cx="20" cy="36" rx="12" ry="8" fill={shirt} />
    </svg>
  );
}

const FACES = [
  {
    skin: "#e2b089",
    hair: "#1a1a1a",
    shirt: "#c8102e",
    hairPath: "M11 16c1-7 6-10 9-10s8 3 9 10c-2-3-5-4-9-4s-7 1-9 4z",
  },
  {
    skin: "#c48a62",
    hair: "#2b1a12",
    shirt: "#111111",
    hairPath: "M10.5 17c.5-7 5-11 9.5-11s9 4 9.5 11c-2.5-2-5.5-3-9.5-3s-7 1-9.5 3z",
  },
  {
    skin: "#f0c7a0",
    hair: "#6b3a22",
    shirt: "#f7f4ef",
    hairPath: "M9 18c2-9 7-12 11-12s9 3 11 12c-3-4-7-5-11-5s-8 1-11 5z",
  },
  {
    skin: "#d9a574",
    hair: "#111111",
    shirt: "#c8102e",
    hairPath: "M11 15.5c1.5-6 5.5-8.5 9-8.5s7.5 2.5 9 8.5c-2-1.5-5-2.2-9-2.2s-7 .7-9 2.2z",
  },
] as const;

export function CtaProof() {
  return (
    <p className="cta-proof">
      <span className="cta-proof-row">
        <span className="cta-proof-faces">
          {FACES.map((face) => (
            <Face key={face.hairPath} {...face} />
          ))}
        </span>
        <span className="cta-proof-stars" aria-hidden>
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              viewBox="0 0 20 20"
              className="cta-proof-star"
            >
              <path
                d="M10 1.6 12.4 7l5.9.5-4.5 3.8 1.4 5.7L10 14.4 4.8 17l1.4-5.7L1.7 7.5 7.6 7z"
                fill="currentColor"
              />
            </svg>
          ))}
        </span>
      </span>
      <span className="cta-proof-label">Oltre 100 auto valutate</span>
    </p>
  );
}
