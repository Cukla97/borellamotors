"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById("valutazione");
      if (!form) return;
      const rect = form.getBoundingClientRect();
      const formInView = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(window.scrollY > 480 && !formInView);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
      <a href="#valutazione" className="btn-primary w-full">
        Valuta ora
      </a>
    </div>
  );
}
