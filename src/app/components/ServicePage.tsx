import Image from "next/image";
import Link from "next/link";
import BackToServicesButton from "./BackToServicesButton";
import ScheduleButton from "./ScheduleButton";
import { SERVICES, type Service } from "../services/content";

const h2 = "text-2xl md:text-3xl font-extrabold text-[#1B1F3B] mb-3";
const sectionWrap = "max-w-5xl mx-auto w-full px-4 py-10 border-t border-gray-100";

/** Full service page, rendered on the server from services/content.ts */
export default function ServicePage({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return (
    <article className="bg-white w-full">
      <div className="max-w-5xl mx-auto w-full px-4 pt-20 md:pt-24">
        <BackToServicesButton className="mb-4" />
      </div>

      {/* Intro */}
      <header className="max-w-5xl mx-auto w-full px-4 grid md:grid-cols-2 gap-8 items-center pb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B1F3B]">{service.h1}</h1>
          {service.intro.map((p, i) => (
            <p key={i} className="text-lg text-gray-800 mb-4 leading-relaxed">{p}</p>
          ))}
          <div className="mt-2">
            <ScheduleButton>Book a consultation</ScheduleButton>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </header>

      {/* Main content sections */}
      {service.sections.map((sec) => (
        <section key={sec.heading} className={sectionWrap}>
          <h2 className={h2}>{sec.heading}</h2>
          {sec.intro && <p className="text-lg text-gray-700 mb-2">{sec.intro}</p>}
          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            {sec.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-bold text-lg text-[#1B1F3B] mb-1">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Process */}
      <section className={sectionWrap}>
        <h2 className={h2}>{service.process.heading}</h2>
        <ol className="mt-6 space-y-5">
          {service.process.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex-none w-9 h-9 rounded-full bg-[#00695C] text-white font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-lg text-[#1B1F3B]">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Engagement options */}
      <section className={sectionWrap}>
        <h2 className={h2}>{service.engagement.heading}</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {service.engagement.options.map((opt) => (
            <div key={opt.title} className="rounded-xl border-t-4 border-[#00C9A7] bg-white shadow-md p-5">
              <h3 className="font-bold text-lg text-[#1B1F3B] mb-1">{opt.title}</h3>
              <p className="text-gray-700 leading-relaxed">{opt.text}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mt-6">{service.engagement.note}</p>
      </section>

      {/* Examples */}
      <section className={sectionWrap}>
        <h2 className={h2}>{service.examples.heading}</h2>
        <p className="text-lg text-gray-700">{service.examples.intro}</p>
        <ul className="mt-6 space-y-4">
          {service.examples.items.map((ex) => (
            <li key={ex.title} className="border-l-4 border-[#6D5BFF] pl-4">
              <h3 className="font-bold text-lg text-[#1B1F3B]">{ex.title}</h3>
              <p className="text-gray-700 leading-relaxed">{ex.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQs */}
      <section className={sectionWrap}>
        <h2 className={h2}>Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
          {service.faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center font-semibold text-lg text-[#1B1F3B]">
                {f.q}
                <span aria-hidden="true" className="ml-4 text-[#00C9A7] transition group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="text-gray-700 mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-5xl mx-auto w-full px-4 py-10">
        <div className="rounded-2xl bg-[#1B1F3B] text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Talk to us about your project</h2>
            <p className="text-gray-300">
              Tell us what you&apos;re working on and we&apos;ll reply with next steps. You can also email{" "}
              <a href="mailto:info@navetrix.com" className="underline hover:text-[#00C9A7]">info@navetrix.com</a>.
            </p>
          </div>
          <div className="flex-none">
            <ScheduleButton>Book a consultation</ScheduleButton>
          </div>
        </div>
      </section>

      {/* Related services */}
      <nav aria-label="Other services" className="max-w-5xl mx-auto w-full px-4 pb-12">
        <h2 className="text-xl font-bold text-[#1B1F3B] mb-4">Other services</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="block rounded-xl border border-gray-200 p-4 hover:border-[#00C9A7] transition">
                <span className="font-bold text-[#1B1F3B]">{s.name}</span>
                <span className="block text-gray-600 text-sm mt-1">{s.cardDescription}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
