import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectImage from '../assets/IMG_2552.JPG';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={sectionRef} className="py-32 bg-warm-gray relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                {/* Header */}
                <div className="mb-20">
                    <span className="text-sm uppercase tracking-[0.2em] text-charcoal/60 font-display mb-6 block">
                        Selected Work
                    </span>
                    <h2 className="font-serif text-heading-xl md:text-display-md text-near-black max-w-3xl">
                        Case Studies in <span className="italic text-gold">Ecosystem Growth</span>
                    </h2>
                </div>

                {/* Featured Project */}
                <div className="project-item mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                                <img
                                    src={projectImage}
                                    alt="0xChidi presenting at Avalanche event"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider font-display rounded-full mb-6">
                                    Featured
                                </span>
                                <h3 className="text-heading-lg font-serif text-near-black mb-6">
                                    Avalanche Team1 Contributions
                                </h3>
                                <p className="text-body-md text-charcoal/70 leading-relaxed mb-8">
                                    Active contributor to the Avalanche ecosystem, supporting builders through developer outreach, technical content, and community events that accelerate adoption.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5"></div>
                                    <p className="text-charcoal/70">Led 10+ developer workshops on subnet architecture</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5"></div>
                                    <p className="text-charcoal/70">Authored quarterly "State of Avalanche" reports</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5"></div>
                                    <p className="text-charcoal/70">Mentored 3 winning teams at Avalanche Summit</p>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-near-black font-display text-sm hover:text-gold transition-colors duration-300 group"
                            >
                                View Contributions
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
