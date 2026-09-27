import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description: "Meet the leadership team behind Navetrix Technologies.",
  path: "/team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
