import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImage from '../assets/IMG_2310.jpeg';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 2.5 });

            tl.from(subtitleRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
                .from(titleRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }, "-=0.6")
                .from(imageRef.current, {
                    x: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }, "-=1");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative bg-near-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-near-black to-gold/10 opacity-60"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left column - Text */}
                    <div>
                        {/* Small label */}
                        <div className="mb-6 opacity-0" ref={subtitleRef}>
                            <span className="text-sm md:text-base uppercase tracking-[0.3em] text-gold/80 font-display">
                                For the
                            </span>
                        </div>

                        {/* Main headline - HUGE Every Day style */}
                        <h1
                            ref={titleRef}
                            className="font-serif text-7xl md:text-8xl lg:text-9xl xl:text-[140px] text-white mb-0 opacity-0 leading-[0.9] tracking-tight"
                        >
                            AVALANCHE
                            <br />
                            <span className="text-gold">ECOSYSTEM</span>
                        </h1>
                    </div>

                    {/* Right column - Image */}
                    <div ref={imageRef} className="opacity-0 relative">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                            <img
                                src={heroImage}
                                alt="0xChidi - Web3 Business Developer"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-near-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-60">
                    <div className="flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-xs uppercase tracking-widest text-white/50 font-display">Scroll</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
