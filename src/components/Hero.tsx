import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImage1 from '../assets/IMG_1823.jpeg';
import heroImage2 from '../assets/IMG_2314.jpeg';
import heroImage3 from '../assets/IMG_2310.jpeg';

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

    const charStyle = {
        fontFamily: 'Bebas Neue, Arial, sans-serif',
        fontWeight: 400,
        letterSpacing: '0.02em'
    };

    // Responsive font classes: Mobile (Huge/Tight) vs Desktop (Approved)
    const textClasses = "text-[23vw] leading-[0.65] md:text-[13vw] md:leading-[0.75]";

    return (
        <section
            ref={heroRef}
            className="h-screen w-full relative bg-near-black overflow-hidden flex items-center justify-center"
        >
            <div className="w-full px-2 md:px-4">

                {/* Line 1: A [IMG] GOATED */}
                <div className="flex items-center flex-wrap md:flex-nowrap gap-x-0 md:gap-x-1 lg:gap-x-2 mb-0.5 md:mb-1 lg:mb-2 justify-start md:justify-start">
                    {/* Added mr-2 on mobile to separate 'A' from 'GOATED' */}
                    <span className={`hero-char text-white tracking-tighter uppercase mr-2 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>A</span>

                    <div className="hero-img transform -rotate-6 flex-shrink-0 z-20 mr-0 md:mr-3 lg:mr-6 order-last md:order-none ml-auto md:ml-0">
                        <div className="bg-white p-1 md:p-2 lg:p-3 xl:p-4 shadow-2xl">
                            <img
                                src={heroImage1}
                                alt=""
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover"
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

                {/* Line 2: WEB3 [IMG] BUSINESS - Aligned CENTER on Desktop, LEFT on Mobile */}
                <div className="flex items-center flex-wrap md:flex-nowrap gap-x-0 md:gap-x-1 lg:gap-x-2 mb-0.5 md:mb-1 lg:mb-2 justify-start md:justify-center">
                    <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>W</span>
                    <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>B</span>
                    {/* Removed mr-2 from '3' because we are breaking the line */}
                    <span className={`hero-char text-white tracking-tighter uppercase mr-0 md:mr-6 lg:mr-12 ${textClasses}`} style={charStyle}>3</span>

                    {/* MOVED IMAGE: Display heroImage2 here on MOBILE ONLY, overlapping text */}
                    <div className="hero-img transform rotate-6 flex-shrink-0 z-40 ml-2 md:hidden">
                        <div className="bg-white p-1 shadow-2xl">
                            <img
                                src={heroImage2}
                                alt=""
                                className="w-24 h-24 object-cover"
                            />
                        </div>
                    </div>

                    {/* Original Image 3 (Middle) - Visible on both but positioned for desktop */}
                    <div className="hero-img transform rotate-12 flex-shrink-0 z-20 mx-0 md:mx-3 lg:mx-6 order-last md:order-none ml-auto">
                        <div className="bg-white p-1 md:p-2 lg:p-3 xl:p-4 shadow-2xl">
                            <img
                                src={heroImage3}
                                alt=""
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Force line break on mobile only */}
                    <div className="w-full md:hidden"></div>

                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>B</span>
                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>U</span>
                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>S</span>
                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>I</span>
                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>N</span>
                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>S</span>
                    <span className={`hero-char text-white tracking-tighter uppercase ${textClasses}`} style={charStyle}>S</span>
                </div>

                {/* Line 3: DEVELOPER [IMG] - Aligned CENTER on Desktop, LEFT on Mobile */}
                <div className="flex items-center flex-wrap md:flex-nowrap gap-x-0 md:gap-x-1 lg:gap-x-2 justify-start md:justify-center">
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>D</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>V</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>L</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>O</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>P</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 ${textClasses}`} style={charStyle}>E</span>
                    <span className={`hero-char text-white tracking-tighter uppercase z-30 mr-0 md:mr-3 lg:mr-6 ${textClasses}`} style={charStyle}>R</span>

                    {/* Original Image 2 Position - HIDDEN on Mobile, Visible on Desktop */}
                    <div className="hero-img transform rotate-6 flex-shrink-0 z-20 order-last md:order-none ml-auto md:ml-0 hidden md:block">
                        <div className="bg-white p-1 md:p-2 lg:p-3 xl:p-4 shadow-2xl">
                            <img
                                src={heroImage2}
                                alt=""
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 object-cover"
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
