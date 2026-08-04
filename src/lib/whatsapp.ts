export const WHATSAPP_E164 = "393479282071";

export const WHATSAPP_LABEL = "Scrivimi su WhatsApp";

const DEFAULT_MESSAGE =
  "Ciao, vorrei una valutazione per la mia auto.";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${WHATSAPP_E164}?${params.toString()}`;
}

export const WHATSAPP_URL = getWhatsAppUrl();
