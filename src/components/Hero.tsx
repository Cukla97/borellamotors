"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/whatsapp";

function offsetFromFocus(el: Element, focusX: number) {
  const box = el.getBoundingClientRect();
  return focusX - (box.left + box.width / 2);
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const personImgRef = useRef<HTMLImageElement>(null);
  const carLeftRef = useRef<HTMLImageElement>(null);
  const carRightRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const wordmark = wordmarkRef.current;
    const person = personImgRef.current;
    const carLeft = carLeftRef.current;
    const carRight = carRightRef.current;
    if (!root || !wordmark || !person || !carLeft || !carRight) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const personBox = person.getBoundingClientRect();
      const focusX = personBox.left + personBox.width / 2;
      const cars = [carLeft, carRight];

      gsap.set(wordmark, { opacity: 0, scale: 0.9, filter: "blur(8px)" });
      gsap.set(person, { opacity: 0, y: 64 });
      gsap.set(cars, {
        autoAlpha: 0,
        x: (index) => offsetFromFocus(cars[index], focusX),
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(wordmark, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1.out"
      })
        .to(person, {
          opacity: 1,
          y: 0,
        }, '<+=0.2')
        .to(
          cars,
          {
            autoAlpha: 1,
            x: 0,
            ease: "power2.out",
          },
          "<+=0.5",
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="hero-collage">
      <div className="hero-collage-stage">
        <Image
          ref={carLeftRef}
          src="/hero-car-left.png"
          alt=""
          width={873}
          height={586}
          sizes="(max-width: 768px) 56vw, 40vw"
          className="hero-car hero-car--left"
          priority
          aria-hidden
        />
        <Image
          ref={carRightRef}
          src="/hero-car-right.png"
          alt=""
          width={1100}
          height={535}
          sizes="(max-width: 768px) 56vw, 40vw"
          className="hero-car hero-car--right"
          priority
          aria-hidden
        />

        <h1 ref={wordmarkRef} className="hero-wordmark">
          Vuoi vendere la tua auto?
        </h1>
        <div className="hero-person">
          <Image
            ref={personImgRef}
            src="/foto-niik.png"
            alt="Niccolò Borella, titolare di Borella Motors"
            width={1122}
            height={1402}
            priority
            sizes="(max-width: 768px) 70vw, 34vw"
            className="hero-person-img"
          />
        </div>
      </div>

      <div className="hero-collage-cta">
        <p className="hero-collage-lead">
          Valutazione gratuita in 24 ore, nessun impegno. Se accetti, penso io a
          tutto il resto.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="#valutazione" className="btn-primary btn-siren">
            Richiedi una valutazione gratuita
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {WHATSAPP_LABEL}
          </a>
        </div>
        <p className="mt-4 text-center">
          <a
            href="#come-funziona"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink/70 underline-offset-4 transition hover:text-ink hover:underline"
          >
            Come funziona
            <ChevronDown className="h-4 w-4" aria-hidden />
          </a>
        </p>
      </div>
    </section>
  );
}
