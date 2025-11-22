import { useEffect, useRef, useState } from 'react';
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
    },
    {
        number: "05",
        title: "Content Marketing",
        description: "Create compelling narratives and thought leadership content that positions your protocol as an industry leader."
    }
];

export default function Services() {
    const sectionRef = useRef(null);
    const servicesContainerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const container = servicesContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            setScrollProgress(progress);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

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

    const getServiceOpacity = (index: number) => {
        const visibleCount = Math.floor(scrollProgress * (services.length - 2)) + 2;
        return index < visibleCount ? 1 : 0.3;
    };

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

                {/* Services Container - Scrollable on Desktop, Normal List on Mobile */}
                <div
                    ref={servicesContainerRef}
                    className="lg:h-[700px] lg:overflow-y-scroll overflow-x-hidden relative scroll-smooth"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <style>{`
                        #services div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    <div className="space-y-0 lg:pb-20">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-item group border-t border-charcoal/10 py-12 hover:bg-warm-gray/50 transition-all duration-500 px-8 -mx-8"
                                style={{
                                    opacity: window.innerWidth >= 1024 ? getServiceOpacity(index) : 1,
                                    transition: 'opacity 0.5s ease-out'
                                }}
                            >
                                <div className="grid md:grid-cols-12 gap-8 items-start">
                                    {/* Number */}
                                    <div className="md:col-span-2">
                                        <span className="service-number text-6xl font-serif text-gold/30 group-hover:text-gold transition-colors duration-500">
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
            </div>
        </section>
    );
}
