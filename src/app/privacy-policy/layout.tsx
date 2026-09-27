import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Navetrix Technologies collects, uses and protects your personal information, and how to make a privacy request.",
  path: "/privacy-policy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
