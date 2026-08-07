import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { VercelAnalytics } from "@/components/VercelAnalytics";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://borellamotors.com"),
  title: "Borella Motors | Valutazione gratuita auto usate",
  description:
    "Vuoi vendere la tua auto? Richiedi una valutazione gratuita in 24 ore. Se accetti, mi occupo io di tutto.",
  openGraph: {
    title: "Borella Motors | Valutazione gratuita auto usate",
    description:
      "Valutazione gratuita in 24 ore, nessun impegno. Se accetti, penso io a tutto il resto.",
    type: "website",
    locale: "it_IT",
    images: ["/hero-lot.jpg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Borella Motors",
  description:
    "Rivenditore di auto usate. Valutazione gratuita e proposta di acquisto.",
  url: "https://borellamotors.com",
  image: "/logo-borellamotors.png",
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
        <CookieBanner />
        <VercelAnalytics />
      </body>
    </html>
  );
}
