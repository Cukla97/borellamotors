export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  "https://www.instagram.com/borellamotors/";

export const TIKTOK_URL =
  process.env.NEXT_PUBLIC_TIKTOK_URL ??
  "https://www.tiktok.com/@nikborella";

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
  },
  {
    label: "TikTok",
    href: TIKTOK_URL,
  },
] as const;
