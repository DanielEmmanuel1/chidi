import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '../assets/IMG_1805.JPG';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 bg-near-black relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Image */}
                    <div className="about-content">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                            <img
                                src={aboutImage}
                                alt="0xChidi speaking at Web3 event"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-12">
                        <div className="about-content">
                            <span className="text-sm uppercase tracking-[0.2em] text-gold font-display mb-6 block">
                                About Me
                            </span>
                            <h2 className="font-serif text-heading-xl md:text-display-md text-white mb-8">
                                Translating Token Mechanics into Sustainable Growth
                            </h2>
                        </div>

                        <div className="about-content space-y-6 text-body-md text-white/70 leading-relaxed">
                            <p>
                                I help blockchain founders bridge the gap between technical innovation and market adoption. As an active member of <span className="text-white font-medium">Avalanche Team1</span>, I support builders with developer outreach, content, and events that accelerate ecosystem growth.
                            </p>
                            <p>
                                With a background spanning business development and Web3 marketing, I've helped launch tokens, broker strategic partnerships, and build thriving communities that drive real value.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="about-content grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            {[
                                { value: "12+", label: "Tokens Launched" },
                                { value: "50+", label: "Partnerships" },
                                { value: "150%", label: "Avg. Growth" },
                                { value: "25+", label: "Events Hosted" }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-4xl font-serif font-bold text-gold mb-2">{stat.value}</div>
                                    <div className="text-sm text-white/50 uppercase tracking-wider font-display">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
