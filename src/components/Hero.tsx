import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImage1 from '../assets/IMG_1823.jpeg';
import heroImage2 from '../assets/IMG_2314.jpeg';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });

            tl.from('.hero-char, .hero-img', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power3.out'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="h-screen w-full relative bg-near-black overflow-hidden flex items-center justify-center"
        >
            {/* Full width character-by-character layout */}
            <div className="w-full flex flex-wrap items-center gap-x-1 md:gap-x-2 gap-y-0 px-2 md:px-4">

                {/* A (word spacing after) */}
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase mr-3 md:mr-6">A</span>

                {/* Image 1 */}
                <div className="hero-img transform -rotate-6 flex-shrink-0 z-20 mr-3 md:mr-6">
                    <div className="bg-white p-2 md:p-3 lg:p-4 shadow-2xl">
                        <img
                            src={heroImage1}
                            alt=""
                            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                        />
                    </div>
                </div>

                {/* WEB3 (word spacing after) */}
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">W</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">E</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">B</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30 mr-3 md:mr-6">3</span>

                {/* BUSINESS (word spacing after) */}
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase">B</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase">U</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase">S</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase">I</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase">N</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase">E</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase">S</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase mr-3 md:mr-6">S</span>

                {/* DEVELOPER (word spacing after) */}
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">D</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">E</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">V</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">E</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">L</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">O</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">P</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30">E</span>
                <span className="hero-char font-sans text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] text-white leading-none tracking-tighter font-bold uppercase z-30 mr-3 md:mr-6">R</span>

                {/* Image 2 */}
                <div className="hero-img transform rotate-6 flex-shrink-0 z-20">
                    <div className="bg-white p-2 md:p-3 lg:p-4 shadow-2xl">
                        <img
                            src={heroImage2}
                            alt=""
                            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs uppercase tracking-widest text-white/50 font-sans">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
                </div>
            </div>
        </section>
    );
}
