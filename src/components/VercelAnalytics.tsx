"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { readConsent } from "@/lib/cookie-consent";

export function VercelAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(readConsent()?.analytics === true);
    sync();

    const onConsent = () => sync();
    window.addEventListener("bm:cookie-consent", onConsent);
    window.addEventListener("storage", onConsent);
    return () => {
      window.removeEventListener("bm:cookie-consent", onConsent);
      window.removeEventListener("storage", onConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Analytics
      beforeSend={(event) =>
        readConsent()?.analytics === true ? event : null
      }
    />
  );
}
