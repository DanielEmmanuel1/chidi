import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        number: "01",
        title: "Web3 GTM Strategy",
        description: "Design product-market-fit playbooks and on-chain incentive flows that drive measurable community growth."
    },
    {
        number: "02",
        title: "Partnerships & BD",
        description: "Secure integrations and channel partnerships. Negotiate launch terms and co-marketing initiatives."
    },
    {
        number: "03",
        title: "Community Growth",
        description: "Design token-gated experiences and reward programs that increase engagement and retention."
    },
    {
        number: "04",
        title: "Token Economics",
        description: "Structure sustainable tokenomics and liquidity programs aligned with long-term value creation."
    }
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-32 bg-off-white relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <span className="text-sm uppercase tracking-[0.2em] text-charcoal/60 font-display mb-6 block">
                        Services
                    </span>
                    <h2 className="font-serif text-heading-xl md:text-display-md text-near-black">
                        How I Help Web3 Projects <span className="italic text-gold">Scale</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="space-y-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-item group border-t border-charcoal/10 py-12 hover:bg-warm-gray/50 transition-all duration-500 px-8 -mx-8"
                        >
                            <div className="grid md:grid-cols-12 gap-8 items-start">
                                {/* Number */}
                                <div className="md:col-span-2">
                                    <span className="text-6xl font-serif text-gold/30 group-hover:text-gold transition-colors duration-500">
                                        {service.number}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="md:col-span-4">
                                    <h3 className="text-heading-md font-serif text-near-black group-hover:text-gold transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-6">
                                    <p className="text-body-md text-charcoal/70 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
