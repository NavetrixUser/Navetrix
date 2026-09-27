import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How Navetrix Technologies uses cookies and similar technologies on navetrix.com.",
  path: "/cookie-policy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
