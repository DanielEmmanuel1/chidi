import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '../assets/IMG_2314.jpeg';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 12, suffix: "+", label: "Baby mama's" },
    { value: 50, suffix: "+", label: "Partnerships" },
    { value: 150, suffix: "%", label: "Avg. Growth" },
    { value: 15, suffix: "+", label: "Events Hosted" }
];

export default function About() {
    const sectionRef = useRef(null);
    const statsRef = useRef<HTMLDivElement>(null);

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

            // Counter animation
            stats.forEach((stat, index) => {
                const element = document.querySelector(`[data-stat-index="${index}"]`);
                if (element) {
                    const obj = { value: 0 };
                    gsap.to(obj, {
                        value: stat.value,
                        duration: 2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 80%",
                            once: true,
                        },
                        onUpdate: () => {
                            element.textContent = Math.round(obj.value) + stat.suffix;
                        }
                    });
                }
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
                    <div className="about-content hidden lg:block">
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
                                From BD to <span className="italic text-gold">Business Development</span>
                                <span className="block text-body-lg text-white/60 mt-4 font-sans">
                                    (The only BD I do is Business Development—building partnerships, not paternity tests)
                                </span>
                            </h2>
                        </div>

                        {/* Mobile Image Position */}
                        <div className="about-content lg:hidden mb-8">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                                <img
                                    src={aboutImage}
                                    alt="0xChidi speaking at Web3 event"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
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
                        <div ref={statsRef} className="about-content grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div
                                        data-stat-index={index}
                                        className="text-6xl font-medium text-gold mb-2"
                                    >
                                        0{stat.suffix}
                                    </div>
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
