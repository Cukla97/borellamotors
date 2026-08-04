export const CONSENT_STORAGE_KEY = "bm_cookie_consent_v1";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: 1;
};

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed?.version !== 1 || parsed.necessary !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(
  partial: Pick<CookieConsent, "analytics" | "marketing">,
): CookieConsent {
  const value: CookieConsent = {
    necessary: true,
    analytics: partial.analytics,
    marketing: partial.marketing,
    timestamp: new Date().toISOString(),
    version: 1,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("bm:cookie-consent", { detail: value }));
  return value;
}

export function clearConsent() {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent("bm:cookie-consent", { detail: null }));
}
