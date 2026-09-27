"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { openContactModal } from "./utils";
import { AnimatePresence, motion } from "framer-motion";

const images = [
    "/images/hero/slide1.avif",
    "/images/hero/slide2.avif",
    "/images/hero/slide3.avif",
    "/images/hero/slide4.avif",
    "/images/hero/slide5.avif",
    "/images/hero/slide6.avif",  
    "/images/hero/slide7.avif",    
    "/images/hero/slide8.avif",
    "/images/hero/slide9.avif"    
    // Add more images as needed
];

const tagline = "Consult. Build. Support.";
const heading = "Technology help for growing businesses, without a large IT team";
// Carries the service keywords now that the heading speaks to business owners.
const subheading =
    "IT consulting, Azure integration, Power BI reporting and software development for small and medium businesses in India and Australia.";
const paragraph =
    "We get your business systems sharing data, turn that data into reports you can trust, update older applications, and help your website get found on Google.";
// Keep these factual; each one is stated on the service pages.
const highlights = ["Fully online", "Written scope and quote before work starts", "NDA on request"];

export default function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="w-screen min-h-[95vh] min-h-[100svh] h-auto flex items-stretch justify-stretch overflow-hidden z-0 relative"
            style={{ minHeight: '100svh', height: 'auto' }}
        >
            <AnimatePresence initial={false}>
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    draggable={false}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 lg:px-24 z-10 pt-8 md:pt-16">
                <p className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.2em] text-[#00C9A7] mb-4 animate-fade-in">
                    {tagline}
                </p>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in leading-tight max-w-5xl">
                    {heading}
                </h1>
                <p className="text-lg xs:text-xl md:text-2xl font-semibold text-white mb-2 animate-fade-in delay-100 max-w-4xl mx-auto">
                    {subheading}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 animate-fade-in delay-200 max-w-3xl mx-auto text-center">
                    {paragraph}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto">
                    <button
                        type="button"
                        className="bg-[#00695C] hover:bg-[#004D40] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all text-lg min-w-[180px] block text-center focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:ring-offset-2"
                        onClick={openContactModal}
                    >
                        Book a consultation
                    </button>
                    <Link href="/#services" scroll={true} className="bg-white hover:bg-gray-100 text-[#1B1F3B] font-bold py-3 px-6 rounded-lg shadow-lg transition-all text-lg border border-[#00C9A7] min-w-[180px] block text-center focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:ring-offset-2">
                        Explore services
                    </Link>
                </div>
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm sm:text-base text-gray-200 animate-fade-in delay-200">
                    {highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C9A7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
