import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Verify a Certificate",
  description: "Check whether a Navetrix Technologies internship or training certificate is valid by entering its certificate ID.",
  path: "/verify",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
