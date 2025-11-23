import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import heroImage1 from '../assets/IMG_1823.jpeg';
import heroImage2 from '../assets/IMG_2314.jpeg';
import heroImage3 from '../assets/IMG_2310.jpeg';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [wordIndex, setWordIndex] = useState(0);
    const isMounted = useRef(false);

    const words = ["BUSINESS", "COMMUNITY", "MARKETING"];

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

            // Animate the random glows
            tl.from('.random-glow', {
                opacity: 0,
                scale: 0,
                duration: 2,
                stagger: 0.5,
                ease: 'power2.out'
            }, "-=1");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Rotating text animation
    useEffect(() => {
        // Animate IN (skip on first mount as main intro handles it)
        if (isMounted.current) {
            gsap.fromTo('.rotating-char',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.03, ease: 'power2.out' }
            );
        } else {
            isMounted.current = true;
        }

        // Schedule next rotation
        const timer = setTimeout(() => {
            gsap.to('.rotating-char', {
                y: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.03,
                ease: 'power2.in',
                onComplete: () => {
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            });
        }, 2500);

        return () => clearTimeout(timer);
    }, [wordIndex]);

    const charStyle = {
        fontFamily: 'Bebas Neue, Arial, sans-serif',
        fontWeight: 400,
        letterSpacing: '0.02em'
    };

    // Responsive font classes: Mobile (Huge/Tight) vs Desktop (Aggressively Tight Line Height)
    const textClasses = "text-[23vw] leading-[0.65] md:text-[13vw] md:leading-[0.4]";

    return (
        <section
            ref={heroRef}
            className="h-screen w-full relative bg-near-black overflow-hidden flex items-start md:items-center justify-center pt-36 md:pt-32"
        >
            {/* Random Background Glows - Very subtle & Warmer Yellow */}
            <div className="random-glow absolute top-[15%] left-[10%] w-[40vw] h-[40vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></div>
            <div className="random-glow absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></div>

            <div className="w-full px-2 md:px-4 relative z-10">

                {/* Line 1: A [IMG] GOATED */}
                {/* Increased mobile margin-bottom to mb-3 for better spacing */}
                <div className="relative flex items-center flex-wrap md:flex-nowrap gap-x-0 md:gap-x-1 lg:gap-x-2 mb-3 md:mb-1 lg:mb-2 justify-start md:justify-start">
                    {/* Added mr-2 on mobile to separate 'A' from 'GOATED' */}
                    <span className={`hero-char text-white tracking-tighter uppercase mr-2 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>A</span>

                    {/* Mobile Image: Absolute positioning for 'edge' placement */}
                    <div className="hero-img absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:static md:translate-x-0 md:translate-y-0 transform -rotate-6 flex-shrink-0 z-20 mr-0 md:mr-3 lg:mr-6 order-last md:order-none ml-auto md:ml-0">
                        {/* Radial Glow for this Polaroid - Subtle & Warmer Yellow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-yellow-400/20 via-amber-300/10 to-transparent blur-2xl pointer-events-none -z-10"></div>

                        {/* Added pb-5/pb-10 etc to create polaroid chin */}
                        <div className="bg-white p-1 pb-5 md:p-2 md:pb-10 lg:p-3 lg:pb-12 xl:p-4 xl:pb-14 shadow-2xl mr-16 mb-4">
                            <img
                                src={heroImage1}
                                alt=""
                                className="w-12 h-12 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover"
                            />
                        </div>
                    </div>

                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>G</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>O</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>A</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>T</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>D</span>
                </div>

                {/* Line 2: WEB3 [IMG] [ROTATING WORD] */}
                {/* Refactored to flex-col on mobile to guarantee vertical stability */}
                {/* Added gap-y-3 on mobile for consistent spacing between WEB3 and WORD */}
                {/* Increased margin-bottom to mb-3 for consistent spacing before DEVELOPER */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-y-3 md:gap-y-0 gap-x-0 md:gap-x-1 lg:gap-x-2 mb-3 md:mb-1 lg:mb-2 justify-start md:justify-center">

                    {/* Part 1: WEB3 + Mobile Image (Moved back here) */}
                    <div className="relative flex items-center flex-nowrap">
                        <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>W</span>
                        <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>E</span>
                        <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>B</span>
                        <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-6 lg:mr-12 ${textClasses}`} style={charStyle}>3</span>

                        {/* Mobile Image: Absolute positioning for 'edge' placement */}
                        <div className="hero-img absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 transform rotate-6 flex-shrink-0 z-50 md:hidden -mr-12">
                            <div className="bg-white p-1 pb-5 shadow-2xl">
                                <img
                                    src={heroImage3}
                                    alt=""
                                    className="w-12 h-12 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Part 2: Desktop Image + Rotating Word */}
                    <div className="flex items-center flex-nowrap">
                        {/* Desktop Image: Hidden on mobile */}
                        <div className="hero-img transform rotate-12 flex-shrink-0 z-20 mx-0 md:mx-3 lg:mx-6 order-last md:order-none ml-auto hidden md:block">
                            <div className="bg-white p-1 pb-5 md:p-2 md:pb-10 lg:p-3 lg:pb-12 xl:p-4 xl:pb-14 shadow-2xl">
                                <img
                                    src={heroImage3}
                                    alt=""
                                    className="w-12 h-12 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover"
                                />
                            </div>
                        </div>

                        {/* Rotating Word */}
                        <div className="whitespace-nowrap md:whitespace-normal">
                            {words[wordIndex].split('').map((char, i) => (
                                <span
                                    key={i}
                                    className={`hero-char rotating-char text-white tracking-tighter uppercase ${textClasses}`}
                                    style={charStyle}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Line 3: DEVELOPER [IMG] - Aligned CENTER on Desktop, LEFT on Mobile */}
                <div className="relative flex items-center flex-wrap md:flex-nowrap gap-x-0 md:gap-x-1 lg:gap-x-2 justify-start md:justify-center">
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>D</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>V</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>L</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>O</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>P</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>R</span>

                    {/* Mobile Image: Absolute positioning for 'edge' placement */}
                    <div className="hero-img absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:static md:translate-x-0 md:translate-y-0 transform rotate-6 flex-shrink-0 z-20 order-last md:order-none ml-auto md:ml-0">
                        {/* Added pb-5/pb-10 etc to create polaroid chin */}
                        <div className="bg-white p-1 pb-5 md:p-2 md:pb-10 lg:p-3 lg:pb-12 xl:p-4 xl:pb-14 shadow-2xl mr-3">
                            <img
                                src={heroImage2}
                                alt=""
                                className="w-12 h-12 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover"
                            />
                        </div>
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
