import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ComeFunziona } from "@/components/ComeFunziona";
import { AutoInVideo } from "@/components/AutoInVideo";
import { FormValutazione } from "@/components/FormValutazione";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Header tone="light" />
      <main className="page-stack">
        <Hero />
        <ComeFunziona />
        <AutoInVideo />
        <FormValutazione />
        <Trust />
        <FAQ />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
