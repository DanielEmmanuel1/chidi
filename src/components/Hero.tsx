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
        fontSize: '13vw',
        fontWeight: 400,
        lineHeight: 0.75,
        letterSpacing: '0.02em'
    };

    return (
        <section
            ref={heroRef}
            className="h-screen w-full relative bg-near-black overflow-hidden flex items-center justify-center"
        >
            <div className="w-full px-2 md:px-4">

                {/* Line 1: A [IMG] GOATED */}
                <div className="flex items-center gap-x-1 md:gap-x-2 mb-1 md:mb-2">
                    <span className="hero-char text-white leading-none tracking-tighter uppercase mr-3 md:mr-6" style={charStyle}>A</span>

                    <div className="hero-img transform -rotate-6 flex-shrink-0 z-20 mr-3 md:mr-6">
                        <div className="bg-white p-2 md:p-3 lg:p-4 shadow-2xl">
                            <img
                                src={heroImage1}
                                alt=""
                                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                            />
                        </div>
                    </div>

                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>G</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>O</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>A</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>T</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>E</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>D</span>
                </div>

                {/* Line 2: WEB3 [IMG] BUSINESS - Aligned CENTER */}
                <div className="flex items-center gap-x-1 md:gap-x-2 mb-1 md:mb-2 justify-center">
                    <span className="hero-char text-white leading-none tracking-tighter uppercase mr-3 md:mr-6" style={charStyle}>W</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase mr-3 md:mr-6" style={charStyle}>E</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase mr-3 md:mr-6" style={charStyle}>B</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase mr-6 md:mr-12" style={charStyle}>3</span>

                    <div className="hero-img transform rotate-12 flex-shrink-0 z-20 mx-3 md:mx-6">
                        <div className="bg-white p-2 md:p-3 lg:p-4 shadow-2xl">
                            <img
                                src={heroImage3}
                                alt=""
                                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover"
                            />
                        </div>
                    </div>

                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>B</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>U</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>S</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>I</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>N</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>E</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>S</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase" style={charStyle}>S</span>
                </div>

                {/* Line 3: DEVELOPER [IMG] - Aligned CENTER */}
                <div className="flex items-center gap-x-1 md:gap-x-2 justify-center">
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>D</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>E</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>V</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>E</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>L</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>O</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>P</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30" style={charStyle}>E</span>
                    <span className="hero-char text-white leading-none tracking-tighter uppercase z-30 mr-3 md:mr-6" style={charStyle}>R</span>

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
