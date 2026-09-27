import { describe, expect, it } from "vitest";
import { pageMetadata, SITE_NAME } from "./seo";

describe("pageMetadata", () => {
  it("suffixes the site name and sets a self-referencing canonical", () => {
    const meta = pageMetadata({ title: "Verify", description: "d", path: "/verify" });
    expect(meta.title).toBe("Verify");
    expect(meta.alternates?.canonical).toBe("/verify");
    expect(meta.openGraph?.title).toBe(`Verify | ${SITE_NAME}`);
  });

  it("uses the title as-is when absoluteTitle is set", () => {
    const meta = pageMetadata({ title: "Home", description: "d", path: "/", absoluteTitle: true });
    expect(meta.title).toEqual({ absolute: "Home" });
    expect(meta.openGraph?.title).toBe("Home");
  });
});
