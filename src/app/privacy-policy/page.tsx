const h2 = "text-xl md:text-2xl font-bold text-[#1B1F3B] mt-10 mb-3";
const p = "text-gray-700 mb-4 leading-relaxed";
const ul = "list-disc pl-6 text-gray-700 mb-4 space-y-2 leading-relaxed";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-gray-50 px-4 py-8 min-h-[80vh] mt-20 sm:mt-24 md:mt-28">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: 27 September 2026</p>

        <p className={p}>
          This policy explains what personal information Navetrix Technologies (&quot;we&quot;, &quot;us&quot;) collects
          through navetrix.com and in the course of our work, how we use and store it, and how you can access or
          correct it. We aim to handle personal information in line with the Australian Privacy Principles (APPs) in
          the Privacy Act 1988 (Cth), and with India&apos;s Digital Personal Data Protection Act 2023 where it applies.
        </p>

        <h2 className={h2}>What we collect</h2>
        <ul className={ul}>
          <li>
            <strong>Contact form enquiries:</strong> your name, email address, phone number and the message you send us.
          </li>
          <li>
            <strong>Emails, calls and messages:</strong> anything you choose to share when you contact us directly,
            including by email or WhatsApp.
          </li>
          <li>
            <strong>Client work:</strong> business contact details of the people we work with, and any personal
            information we can see in systems or data you give us access to during a project.
          </li>
          <li>
            <strong>Technical data:</strong> your IP address and browser details, which are processed by our hosting
            provider and by our spam protection service when you use the contact form.
          </li>
        </ul>
        <p className={p}>
          We do not use analytics or advertising trackers on this website, and we do not ask for sensitive
          information such as health or financial details.
        </p>

        <h2 className={h2}>How we use it</h2>
        <ul className={ul}>
          <li>To reply to your enquiry and discuss your project.</li>
          <li>To prepare quotes, deliver the work we are engaged to do, and invoice for it.</li>
          <li>To protect the contact form from spam and abuse.</li>
          <li>To meet our legal, tax and record-keeping obligations.</li>
        </ul>
        <p className={p}>
          We do not sell or rent personal information, and we do not add you to a marketing list without your
          agreement. If we do send you updates, every message will include a way to opt out.
        </p>

        <h2 className={h2}>Service providers and overseas disclosure</h2>
        <p className={p}>We use a small number of service providers to run the website and handle enquiries:</p>
        <ul className={ul}>
          <li>
            <strong>hCaptcha</strong> (Intuition Machines, Inc., United States) checks that contact form
            submissions come from a person rather than a bot.
          </li>
          <li>
            <strong>Resend</strong> (United States) delivers contact form submissions to our inbox by email.
          </li>
          <li>Our website hosting and email providers, which store and process data on our behalf.</li>
          <li>
            <strong>WhatsApp</strong> (Meta), if you choose to message us that way.
          </li>
        </ul>
        <p className={p}>
          These providers may store or process information outside Australia, including in the United States. Our
          team works from Australia and India, so your enquiry and project information may be accessed from either
          country. We only share what is needed for each purpose, and we take reasonable steps to make sure anyone
          handling personal information for us protects it.
        </p>

        <h2 className={h2}>Client systems and data</h2>
        <p className={p}>
          When a project gives us access to your systems or data, we use that access only for the agreed work, keep
          access to the minimum needed, and remove it when the work ends. We are happy to sign a non-disclosure or
          data processing agreement before we start.
        </p>

        <h2 className={h2}>Storage and security</h2>
        <p className={p}>
          We keep personal information in access-controlled business accounts and systems. We keep enquiries and
          client records for as long as we need them for the purposes above, or as the law requires, and then delete
          them.
        </p>

        <h2 className={h2}>Access, correction and deletion</h2>
        <p className={p}>
          You can ask to see the personal information we hold about you, ask us to correct it, or ask us to delete it
          where we are not required to keep it. Email{" "}
          <a href="mailto:info@navetrix.com" className="underline text-[#00695C]">info@navetrix.com</a> and we will
          respond within 30 days.
        </p>

        <h2 className={h2}>Complaints</h2>
        <p className={p}>
          If you have a concern about how we have handled your personal information, email us first at{" "}
          <a href="mailto:info@navetrix.com" className="underline text-[#00695C]">info@navetrix.com</a> and we will
          respond within 30 days. If you are in Australia and are not satisfied with our response, you can contact the
          Office of the Australian Information Commissioner at{" "}
          <a href="https://www.oaic.gov.au" className="underline text-[#00695C]" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>.
        </p>

        <h2 className={h2}>Changes to this policy</h2>
        <p className={p}>
          We may update this policy from time to time. The date at the top of the page shows when it last changed.
        </p>
      </article>
    </div>
  );
}
