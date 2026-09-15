type ArrowKind = "across" | "acrossHigh" | "acrossBack" | "down" | "downSwoop";

const PATHS: Record<
  ArrowKind,
  { viewBox: string; shaft: string; head: string }
> = {
  across: {
    viewBox: "0 0 140 36",
    shaft: "M4 24 C 30 6, 64 4, 102 16 C 114 21, 124 21, 134 19",
    head: "M118 10 L136 20 L116 27",
  },
  acrossHigh: {
    viewBox: "0 0 140 40",
    shaft: "M5 30 C 34 4, 72 1, 106 15 C 118 20, 126 17, 136 13",
    head: "M120 5 L138 13 L118 22",
  },
  acrossBack: {
    viewBox: "0 0 100 48",
    shaft: "M95 16 C 78 6, 52 6, 28 24 C 18 32, 12 34, 6 32",
    head: "M22 21 L4 33 L24 38",
  },
  down: {
    viewBox: "0 0 52 84",
    shaft: "M18 5 C 8 24, 10 44, 24 64 C 28 72, 32 76, 36 78",
    head: "M22 64 L38 80 L44 62",
  },
  downSwoop: {
    viewBox: "0 0 56 88",
    shaft: "M14 5 C 4 28, 18 46, 34 62 C 40 70, 42 76, 40 82",
    head: "M26 70 L42 84 L48 66",
  },
};

export function ScribbleArrow({
  kind,
  className,
}: {
  kind: ArrowKind;
  className?: string;
}) {
  const { viewBox, shaft, head } = PATHS[kind];

  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      aria-hidden
    >
      <path
        className="scribble-shaft"
        d={shaft}
        pathLength={1}
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="scribble-head"
        d={head}
        pathLength={1}
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
