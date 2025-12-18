import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectImage1 from '../assets/IMG_1823.jpeg';
import projectImage2 from '../assets/IMG_2552.JPG';
import projectImage3 from '../assets/IMG_2562.JPG';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        id: 1,
        tag: "Ecosystem Growth",
        tags: ["Ecosystem Growth", "Content Writer"],
        title: "Avalanche Team1",
        description: "Ecosystem Contributor | Content Writer",
        subtitle: "Played an active role in growing the Avalanche ecosystem by supporting builders through developer outreach, technical education, and community led initiatives.",
        image: projectImage1,
        achievements: [
            "Hosted 10+ hands on onboarding events that guided new developers and builders into the Avalanche ecosystem and accelerated growth",
            "Wrote and published articles on Avalanche, breaking down ecosystem growth, trends, and key updates"
        ],
        link: "#"
    },
    {
        id: 2,
        tag: "Social Media",
        tags: ["Social Media", "Content Writer"],
        title: "ZNS Connect",
        description: "Social Media Manager | Community Developer | Content Writer",
        subtitle: "Owned ZNS Connect's online presence, turning product updates into content people actually engage with.",
        image: projectImage2,
        achievements: [
            "Built and moderated community channels, driving daily conversations and user feedback loops",
            "Created high signal content across X, LinkedIn, Discord, and Telegram that boosted reach and retention"
        ],
        link: "#"
    },
    {
        id: 3,
        tag: "Business Development",
        tags: ["Business Development", "Partnership Management"],
        title: "SeaFi AI",
        description: "Business Development Manager | Partnership Manager",
        subtitle: "Led outbound and inbound partnership efforts with Web3 and AI aligned products.",
        image: projectImage3,
        achievements: [
            "Sourced and closed strategic collaborations that expanded distribution and revenue opportunities",
            "Managed partner relationships end to end, from first convo to launch and post launch growth"
        ],
        link: "#"
    }
];

export default function Projects() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % caseStudies.length);
            }, 5000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying]);

    // Animate card when index changes
    useEffect(() => {
        gsap.fromTo(".case-study-card",
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
        );
    }, [activeIndex]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const handleDotClick = (index: number) => {
        setIsAutoPlaying(false);
        setActiveIndex(index);
    };

    const activeStudy = caseStudies[activeIndex];

    return (
        <section id="work" ref={sectionRef} className="py-32 bg-warm-gray relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                {/* Header */}
                <div className="mb-20 project-header">
                    <span className="text-sm uppercase tracking-[0.2em] text-charcoal/60 font-display mb-6 block">
                        Selected Work
                    </span>
                    <h2 className="font-serif text-heading-xl md:text-display-md text-near-black max-w-3xl">
                        Case Studies in <span className="italic text-gold">Ecosystem Growth</span>
                    </h2>
                </div>

                {/* Carousel - Desktop only, Stacked on Mobile */}
                <div className="relative">
                    {/* Desktop: Carousel */}
                    <div className="hidden lg:block">
                        <div
                            className="case-study-card"
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Image */}
                                <div className="order-2 lg:order-1">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                                        <img
                                            src={activeStudy.image}
                                            alt={activeStudy.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="order-1 lg:order-2 space-y-8">
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {(activeStudy.tags || [activeStudy.tag]).map((tag, idx) => (
                                                <span key={idx} className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider font-display rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-heading-lg font-serif text-near-black mb-4">
                                            {activeStudy.title}
                                        </h3>
                                        <p className="text-body-md font-medium text-near-black mb-4">
                                            {activeStudy.description}
                                        </p>
                                        <p className="text-body-md text-charcoal/70 leading-relaxed mb-8">
                                            {activeStudy.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {activeStudy.achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5"></div>
                                                <p className="text-charcoal/70">{achievement}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={activeStudy.link}
                                        className="inline-flex items-center gap-2 text-near-black font-display text-sm hover:text-gold transition-colors duration-300 group"
                                    >
                                        View Case Study
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Navigation Arrows - Desktop Only */}
                    <div className="hidden lg:flex gap-4 mt-12 justify-start">
                        <button
                            onClick={handlePrevious}
                            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                            aria-label="Previous case study"
                        >
                            <svg className="w-5 h-5 text-charcoal group-hover:text-near-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                            aria-label="Next case study"
                        >
                            <svg className="w-5 h-5 text-charcoal group-hover:text-near-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Navigation - Desktop Only */}
                    <div className="hidden lg:flex gap-3 mt-8 justify-start">
                        {caseStudies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-300 rounded-full ${index === activeIndex
                                    ? 'w-8 h-2 bg-gold'
                                    : 'w-2 h-2 bg-charcoal/20 hover:bg-charcoal/40'
                                    }`}
                                aria-label={`Go to case study ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter - Desktop Only */}
                    <div className="hidden lg:block mt-8 text-left">
                        <span className="text-sm text-charcoal/60 font-display">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Mobile: Stacked Blocks */}
                <div className="lg:hidden space-y-12">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="space-y-6">
                            {/* Tags - Before Image */}
                            <div className="flex flex-wrap gap-2">
                                {(study.tags || [study.tag]).map((tag, idx) => (
                                    <span key={idx} className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider font-display rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Image */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-heading-lg font-serif text-near-black mb-4">
                                        {study.title}
                                    </h3>
                                    <p className="text-body-md font-medium text-near-black mb-3">
                                        {study.description}
                                    </p>
                                    <p className="text-body-md text-charcoal/70 leading-relaxed">
                                        {study.subtitle}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {study.achievements.map((achievement, achIndex) => (
                                        <div key={achIndex} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5"></div>
                                            <p className="text-charcoal/70 text-sm">{achievement}</p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={study.link}
                                    className="inline-flex items-center gap-2 text-near-black font-display text-sm hover:text-gold transition-colors duration-300 group"
                                >
                                    View Case Study
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
