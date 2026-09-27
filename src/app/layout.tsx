
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import ClientInserts from "./ClientInserts";
import Footer from "./Footer";

import JsonLd from "./components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, organizationJsonLd, websiteJsonLd } from "./seo";

// Site-wide defaults. Each page overrides title, description, canonical and
// Open Graph via its own `metadata` export (see ./seo.ts -> pageMetadata).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - IT Consulting, Azure Integration & Software Development`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "IT consulting, Azure integration, .NET and React development and migration, and SEO for small and medium businesses in India and Australia.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE] },
  icons: { icon: "/favicon.ico?v=2", apple: "/apple-icon.png?v=2" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Preconnect for Google Fonts (imported in globals.css) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-gray-50 min-h-screen flex flex-col font-sans">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Navbar />
        <ClientInserts />
        <main className="w-full">{children}</main>
        <Footer currentYear={currentYear} />
      </body>
    </html>
  );
}


