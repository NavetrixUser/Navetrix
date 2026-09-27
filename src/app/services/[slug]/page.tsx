import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "../../components/ServicePage";
import JsonLd from "../../components/JsonLd";
import { SERVICES, getService } from "../content";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "../../seo";

// Only the slugs listed in content.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
    image: s.image,
    imageAlt: s.imageAlt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: s.metaTitle, description: s.metaDescription, path, serviceType: s.serviceType }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: s.name, path },
          ]),
          faqJsonLd(s.faqs),
        ]}
      />
      <ServicePage service={s} />
    </>
  );
}
