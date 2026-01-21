import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '../assets/IMG_2314.jpeg';
import ParallaxImage from './ParallaxImage';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 12, suffix: "+", label: "Articles Written" },
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
                    <div className="about-content hidden lg:block relative">
                        <ParallaxImage src={aboutImage} alt="0xChidi speaking at Web3 event" />
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-12">
                        <div className="about-content">
                            <span className="text-sm uppercase tracking-[0.2em] text-gold font-display mb-6 block">
                                About Me
                            </span>
                            <div className="font-serif text-4xl sm:text-5xl lg:text-4xl xl:text-6xl leading-tight text-white mb-8">
                                <span className="block whitespace-nowrap">Growth Marketing</span>
                                <span className="block whitespace-nowrap text-white/50">Business Development</span>
                                <span className="block whitespace-nowrap">Community Building</span>
                            </div>
                            <p className="text-gold font-medium text-xl mb-8 pl-4 border-l-2 border-gold">
                                Growth Professional. Bridge Builder. Adoption Driver.
                            </p>
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
                                I am a Growth Professional with over five years of experience driving adoption for Web3 and FinTech companies. I specialize in turning technical potential into real market traction, helping blockchains and startup founders bridge the gap between building great products and getting users to actually care and adopt.
                            </p>
                            <p>
                                I bring a hybrid skill set across the full growth lifecycle, from Business Development and strategic partnerships to Product and Go to Market strategy. I design adoption playbooks, on-chain incentive models, and ecosystem integrations that unlock real usage, not just hype.
                            </p>
                            <p>
                                My background is rooted in activation, storytelling, and community building. I run social media and community programs that retain users, shape strong narratives, and position protocols as category leaders. Whether scaling engagement by triple digits or leading complex GTM launches, my focus stays the same: sustainable growth that turns innovation into impact.
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
