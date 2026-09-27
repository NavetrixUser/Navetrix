import type { Metadata } from "next";

export const SITE_URL = "https://navetrix.com";
export const SITE_NAME = "Navetrix Technologies";
export const DEFAULT_OG_IMAGE = "/navetrix_logo.jpg";

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/people/Navetrix-Technologies/61578175604800/",
  "https://www.linkedin.com/company/navetrixtechnologies",
  "https://www.instagram.com/navetrixtechnologies",
  "https://www.youtube.com/@NavetrixTechnologies",
];

type PageMetaInput = {
  title: string;
  description: string;
  /** Path of the page, e.g. "/services/consulting". Used for canonical and og:url. */
  path: string;
  image?: string;
  imageAlt?: string;
  /** When true the title is used as-is instead of "<title> | Navetrix Technologies". */
  absoluteTitle?: boolean;
};

/**
 * Builds per-page metadata: title, description, self-referencing canonical,
 * Open Graph and Twitter tags. Relative URLs resolve against metadataBase
 * (set in the root layout), so they are emitted as absolute URLs.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = SITE_NAME,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/navetrix_logo.jpg`,
    description:
      "IT consulting, Azure integration, .NET and React development and migration, and SEO for small and medium businesses in India and Australia.",
    email: "info@navetrix.com",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Australia" },
    ],
    sameAs: SOCIAL_PROFILES,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "info@navetrix.com",
        contactType: "customer support",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
