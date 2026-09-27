import { SERVICES } from "./services/content";

// Homepage service cards, generated from the service page content so they stay in sync.
export const services = SERVICES.map((s, i) => ({
  image: s.image,
  imageAlt: s.imageAlt,
  title: s.name,
  description: s.cardDescription,
  link: `/services/${s.slug}`,
  color: i % 2 === 0 ? "from-[#00C9A7] to-[#6D5BFF]" : "from-[#6D5BFF] to-[#00C9A7]",
}));
