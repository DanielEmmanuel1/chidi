import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import team1Image1 from '../assets/IMG_1884.jpeg';
import team1Image2 from '../assets/IMG_4420.JPG';

gsap.registerPlugin(ScrollTrigger);

export default function Team1() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".team1-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="team1" ref={sectionRef} className="py-32 bg-off-white relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Left: Title */}
                    <div className="lg:col-span-2 team1-content">
                        <span className="text-sm uppercase tracking-[0.2em] text-charcoal/60 font-display mb-6 block">
                            Community
                        </span>
                        <h2 className="font-serif text-heading-xl md:text-display-md text-near-black mb-8">
                            Avalanche <span className="italic text-gold">Team1</span>
                        </h2>
                        <p className="text-body-md text-charcoal/70 leading-relaxed mb-12">
                            As a core contributor, I actively support the ecosystem through education, events, and technical guidance.
                        </p>

                        {/* Event Photos */}
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img
                                    src={team1Image1}
                                    alt="Avalanche community event"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img
                                    src={team1Image2}
                                    alt="Avalanche speaking engagement"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <a
                            href="#"
                            className="inline-block px-8 py-4 border border-near-black text-near-black font-display text-sm hover:bg-near-black hover:text-white transition-all duration-300 rounded-full"
                        >
                            Join the Community
                        </a>
                    </div>

                    {/* Right: Contributions */}
                    <div className="lg:col-span-3 space-y-6">
                        {[
                            {
                                title: "Developer Workshops",
                                desc: "Led technical sessions on subnet architecture and VM customization for 200+ developers."
                            },
                            {
                                title: "Content Creation",
                                desc: "Authored quarterly ecosystem reports and technical guides reaching 50K+ readers."
                            },
                            {
                                title: "Community AMAs",
                                desc: "Host bi-weekly discussions with ecosystem founders and core contributors."
                            },
                            {
                                title: "Hackathon Mentorship",
                                desc: "Mentored winning teams at Avalanche Summit, focusing on real-world use cases."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="team1-content group p-8 bg-white border border-charcoal/10 rounded-2xl hover:border-gold/30 hover:shadow-lg transition-all duration-500"
                            >
                                <h3 className="text-xl font-serif text-near-black mb-3 group-hover:text-gold transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
