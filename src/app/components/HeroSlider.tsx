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

const tagline = "Code. Consult. Catalyze.";
const heading = "IT consulting, Azure integration and software development";
const subheading = "For small and medium businesses in India and Australia.";
const paragraph =
    "We connect your business systems on Azure, modernise older .NET and React applications, and help your website get found on Google.";

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
                <p className="text-lg xs:text-xl md:text-2xl font-semibold text-white mb-2 animate-fade-in delay-100">
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
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
