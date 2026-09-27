import Link from "next/link";

const h2 = "text-xl md:text-2xl font-bold text-[#1B1F3B] mt-10 mb-3";
const p = "text-gray-700 mb-4 leading-relaxed";
const ul = "list-disc pl-6 text-gray-700 mb-4 space-y-2 leading-relaxed";

export default function CookiePolicyPage() {
  return (
    <div className="w-full bg-gray-50 px-4 py-8 min-h-[80vh] mt-20 sm:mt-24 md:mt-28">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: 27 September 2026</p>

        <p className={p}>
          Cookies are small text files that a website stores in your browser. This page explains the limited ways
          navetrix.com uses them.
        </p>

        <h2 className={h2}>What we use</h2>
        <ul className={ul}>
          <li>
            <strong>No analytics or advertising cookies.</strong> We don&apos;t track your visit for analytics or
            advertising, and we don&apos;t use third-party ad networks.
          </li>
          <li>
            <strong>Spam protection on the contact form.</strong> When you open the contact form, hCaptcha loads to
            check that the submission comes from a person. hCaptcha may set or read cookies and similar technologies
            to do this. See the{" "}
            <a href="https://www.hcaptcha.com/privacy" className="underline text-[#00695C]" target="_blank" rel="noopener noreferrer">hCaptcha privacy policy</a>{" "}
            for details.
          </li>
        </ul>

        <h2 className={h2}>Links to other sites</h2>
        <p className={p}>
          Links to our social media pages and to WhatsApp take you to those services, which set their own cookies
          under their own policies.
        </p>

        <h2 className={h2}>Managing cookies</h2>
        <p className={p}>
          You can block or delete cookies in your browser settings. If you block hCaptcha, the contact form may not
          work, but you can still email us at{" "}
          <a href="mailto:info@navetrix.com" className="underline text-[#00695C]">info@navetrix.com</a>.
        </p>

        <p className={p}>
          For more on how we handle personal information, see our{" "}
          <Link href="/privacy-policy" className="underline text-[#00695C]">Privacy Policy</Link>.
        </p>
      </article>
    </div>
  );
}
