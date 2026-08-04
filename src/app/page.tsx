import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ComeFunziona } from "@/components/ComeFunziona";
import { InstagramFeed } from "@/components/InstagramFeed";
import { FormValutazione } from "@/components/FormValutazione";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="page-stack">
        <Hero />
        <ComeFunziona />
        <InstagramFeed />
        <FormValutazione />
        <Trust />
        <FAQ />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
