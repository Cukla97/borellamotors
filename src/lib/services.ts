export type Service = {
  slug: string;
  label: string;
  href: string;
  shortDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "valutazione",
    label: "Valutazione auto",
    href: "/#valutazione",
    shortDescription: "Scopri il valore della tua auto usata.",
  },
  {
    slug: "grandine",
    label: "Grandine",
    href: "/servizi/grandine",
    shortDescription: "Ripristino danni da grandine con interventi mirati.",
  },
  {
    slug: "detailing",
    label: "Detailing",
    href: "/servizi/detailing",
    shortDescription: "Cura e protezione estetica della carrozzeria.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
