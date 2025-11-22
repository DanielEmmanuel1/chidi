import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImage from '../assets/IMG_1156.jpeg';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 2.5 });

            tl.from(titleRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            })
                .from(subtitleRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6")
                .from(ctaRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.4")
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
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-near-black to-gold/10 opacity-60"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - Text */}
                    <div>
                        {/* Small label */}
                        <div className="mb-8 opacity-0" ref={subtitleRef}>
                            <span className="text-sm uppercase tracking-[0.2em] text-gold font-display">
                                Web3 Business Developer
                            </span>
                        </div>

                        {/* Main headline */}
                        <h1
                            ref={titleRef}
                            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 opacity-0 leading-[0.95]"
                        >
                            Building Growth for the{' '}
                            <span className="italic text-gold">Avalanche</span>{' '}
                            Ecosystem
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed font-light">
                            Partnerships, go-to-market strategy, and community growth for blockchain startups.
                        </p>

                        {/* CTA */}
                        <div ref={ctaRef} className="opacity-0">
                            <a
                                href="#contact"
                                className="inline-block group relative overflow-hidden"
                            >
                                <span className="relative z-10 inline-block px-12 py-5 text-lg font-display text-near-black bg-gold rounded-full transition-all duration-500 group-hover:bg-white">
                                    Let's Work Together
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right column - Image */}
                    <div ref={imageRef} className="opacity-0 relative">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                            <img
                                src={heroImage}
                                alt="0xChidi - Web3 Business Developer"
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay */}
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
