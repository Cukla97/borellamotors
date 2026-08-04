"use client";

import { openCookiePreferences } from "@/components/CookieBanner";

export function ManageCookiesButton() {
  return (
    <button
      type="button"
      onClick={() => openCookiePreferences()}
      className="hover:text-white"
    >
      Gestisci cookie
    </button>
  );
}
