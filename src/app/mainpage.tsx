"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "./servicesData";
import Button from "./components/Button";
import Card from "./components/Card";

import HeroSlider from "./components/HeroSlider";
import { openContactModal } from "./components/utils";


// Move Testimonial type and testimonialsData outside Home component for proper scoping

interface Testimonial {
  text: string;
  author: string;
}

// Add real client/learner testimonials here (with their permission).
// The Testimonials section and its menu links stay hidden while this list is empty.
// Example: { text: "What they said...", author: "Full Name, Role/Company, City" },
const testimonialsData: Testimonial[] = [];

export default function Home() {
  const testimonials = testimonialsData;
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [slide, setSlide] = useState(0);
  const total = testimonials.length;
  // Auto-slide
  useEffect(() => {
    // Nothing to rotate with 0 or 1 testimonials (and % 0 would give NaN).
    if (total < 2) return;
    const timer = setInterval(() => setSlide(s => (s + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);
  // Navigation
  const prev = () => setSlide(s => (s - 1 + total) % total);
  const next = () => setSlide(s => (s + 1) % total);

  return (
    <>
      <div>
        {/* Hero Section */}
        <HeroSlider />
        {/* Overview Section */}
        <section id="overview" className="w-full min-h-[30vh] flex items-center justify-center scroll-mt-24">
          <div className="w-full max-w-6xl mx-auto flex flex-col justify-center snap-start py-4 md:py-6 px-2 md:px-8 mt-2 md:mt-4 scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8">
              {/* Header spanning both columns */}
              <div className="w-full mb-0">
                <h2 className="text-3xl font-extrabold text-[#1B1F3B] mb-0 normal-case text-center md:text-left">
                  Practical technology help for small and medium businesses
                </h2>
              </div>
              <div className="flex flex-col md:flex-row items-stretch gap-8">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col justify-center text-left md:pr-8">
                  <p className="text-gray-800 text-lg mb-6">
                    Navetrix Technologies is a consulting and development business. We work online with clients in India and Australia, mostly businesses that don&apos;t have a large in-house IT team.
                  </p>
                  <p className="text-gray-800 text-lg mb-6">
                    We focus on a few things: planning and building integrations on Microsoft Azure, migrating and modernising .NET and React applications, and improving how businesses show up in Google search.
                  </p>
                  <p className="text-gray-800 text-lg mb-6">
                    You can bring us in for a one-off review, a fixed-scope project, or ongoing monthly support.
                  </p>
                  <Button onClick={openContactModal} className="mt-2">Get in touch</Button>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex items-stretch justify-center hidden md:flex">
                  <Image
                    src="/images/development.avif"
                    alt="Navetrix Overview"
                    width={420}
                    height={420}
                    className="rounded-2xl shadow-xl object-cover w-full h-full max-w-xs md:max-w-md lg:max-w-lg"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* What we do */}
              <Card className="items-start text-left border-t-4 border-[#00C9A7] hover:scale-105 transition-transform shadow-xl p-8 bg-white">
                <span className="text-5xl mb-4 text-[#00C9A7] self-center" aria-hidden="true">🎯</span>
                <h3 className="text-lg xs:text-xl md:text-2xl font-extrabold text-[#1B1F3B] mb-3 tracking-tight self-center text-center w-full">What We Do</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1 mb-3">
                  <li>IT consulting and technical reviews</li>
                  <li>Azure integration and data pipelines</li>
                  <li>.NET and React development and migration</li>
                  <li>SEO for small and medium businesses</li>
                  <li>Practical IT training</li>
                </ul>
              </Card>
              {/* Who we work with */}
              <Card className="items-center text-center border-t-4 border-[#6D5BFF] hover:scale-105 transition-transform shadow-xl p-8 bg-white">
                <span className="text-5xl mb-4 text-[#6D5BFF]" aria-hidden="true">💡</span>
                <h3 className="text-lg xs:text-xl md:text-2xl font-extrabold text-[#1B1F3B] mb-3 tracking-tight">Who We Work With</h3>
                <div className="text-left w-full">
                  <div className="font-semibold text-[#6D5BFF] mb-1">Businesses:</div>
                  <ul className="text-gray-700 list-disc list-inside space-y-1 mb-3">
                    <li>Small and medium businesses without a large IT team</li>
                    <li>IT teams that need extra Azure or .NET help</li>
                    <li>Companies running older applications that need an upgrade</li>
                  </ul>
                  <div className="font-semibold text-[#6D5BFF] mb-1 mt-2">Professionals:</div>
                  <ul className="text-gray-700 list-disc list-inside space-y-1 mb-3">
                    <li>People moving into cloud and data roles</li>
                    <li>Teams learning Azure, Python, SQL or AI</li>
                  </ul>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="inline-block bg-[#00695C] text-white font-bold px-3 py-1 rounded-full text-xs">Fully online</span>
                  <span className="inline-block bg-[#6D5BFF] text-white font-bold px-3 py-1 rounded-full text-xs">India &amp; Australia</span>
                </div>
              </Card>
              {/* Why Navetrix */}
              <Card className="items-center text-center border-t-4 border-[#1B1F3B] hover:scale-105 transition-transform shadow-xl p-8 bg-white">
                <span className="text-5xl mb-4 text-[#1B1F3B]" aria-hidden="true">🌟</span>
                <h3 className="text-lg xs:text-xl md:text-2xl font-extrabold text-[#1B1F3B] mb-3 tracking-tight">Why Navetrix?</h3>
                <div className="text-left w-full">
                  <div className="font-semibold text-[#6D5BFF] mb-1">Advice and delivery together:</div>
                  <p className="text-gray-700 mb-3">
                    The people who make the recommendation can also do the work, so nothing gets lost in a handover.
                  </p>
                  <div className="font-semibold text-[#6D5BFF] mb-1">Clear scope before we start:</div>
                  <p className="text-gray-700 mb-3">
                    You get a written scope and quote before any work begins.
                  </p>
                  <div className="font-semibold text-[#6D5BFF] mb-1">Flexible arrangements:</div>
                  <p className="text-gray-700 mb-3">
                    One-off reviews, fixed projects, or monthly and yearly support.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/* Services Preview */}
        <section id="services" className="w-full min-h-[30vh] flex items-center justify-center bg-gray-100 scroll-mt-20">
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-center snap-start mt-6 md:mt-12 pt-4 md:pt-6 pb-2">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-extrabold text-[#1B1F3B] mb-4 normal-case">
                Our Services
              </h2>
            </div>
            <div className="relative w-full flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch min-h-[220px]">
                {services.map((service, i) => (
                  <Card
                    key={service.title}
                    className={`relative bg-gradient-to-br ${service.color} rounded-2xl shadow-xl group transition-transform hover:scale-105 flex flex-col h-full p-0 min-h-[240px]`}
                    style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                  >
                    <div className="bg-white rounded-2xl flex flex-col items-center text-center h-full w-full flex-1 p-0">
                      <div className="flex items-center justify-center w-full aspect-[4/3] bg-gray-50 rounded-t-2xl overflow-hidden" style={{ minHeight: '120px', maxHeight: '160px' }}>
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                          priority={i === 0}
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-1 justify-between">
                        <h3 className="text-xl font-extrabold mb-1 text-gray-900 group-hover:text-[#00C9A7] transition flex items-start justify-start tracking-wide whitespace-nowrap overflow-x-auto">
                          <Link href={service.link} className="after:absolute after:inset-0 after:content-['']">
                            {service.title} <span aria-hidden="true" className="ml-2 group-hover:text-[#00C9A7] transition">&gt;</span>
                          </Link>
                        </h3>
                        <p className="text-gray-700 mb-0 text-base leading-relaxed min-h-[40px] flex-1 text-left mt-2">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (hidden until real testimonials are added) */}
        {testimonials.length > 0 && (
        <section id="testimonials" className="w-full min-h-[40vh] flex items-center justify-center scroll-mt-20">
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-center py-4 snap-start mt-0">
            <h2 className="text-xl xs:text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900">Testimonials</h2>
            {/* Modern Carousel/Slideshow */}
            <div className="relative w-full flex flex-col items-center">
                <div className="flex gap-6 w-full justify-center items-stretch overflow-x-auto md:overflow-x-visible">
                  {testimonials.length > 0 && Array.from({ length: Math.min(perView, total) }).map((_, i) => {
                    const t = testimonials[(slide + i) % total];
                    return (
                      <Card key={i} className="flex-1 min-w-0 max-w-md mx-auto flex flex-col justify-between border-t-4 border-[#00C9A7] hover:shadow-xl transition p-6">
                        <p className="text-gray-700 italic mb-4 text-lg">“{t.text}”</p>
                        <div className="font-semibold text-blue-700 text-right">— {t.author}</div>
                      </Card>
                    );
                  })}
                </div>
              <div className="flex gap-2 mt-6 justify-center">
                <button onClick={prev} className="w-10 h-10 rounded-full bg-[#00695C] text-white flex items-center justify-center shadow hover:bg-[#1B1F3B] transition">
                  <span className="sr-only">Previous</span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full bg-[#00695C] text-white flex items-center justify-center shadow hover:bg-[#1B1F3B] transition">
                  <span className="sr-only">Next</span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        )}
      </div>
    </>
  );
}
