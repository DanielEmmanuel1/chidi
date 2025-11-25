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
        tag: "Featured",
        title: "Avalanche Team1 Contributions",
        description: "Active contributor to the Avalanche ecosystem, supporting builders through developer outreach, technical content, and community events that accelerate adoption.",
        image: projectImage1,
        achievements: [
            "Led 10+ developer workshops on subnet architecture",
            "Authored quarterly \"State of Avalanche\" reports",
            "Mentored 3 winning teams at Avalanche Summit"
        ],
        link: "#"
    },
    {
        id: 2,
        tag: "Partnerships",
        title: "DeFi Protocol Strategic Partnership",
        description: "Facilitated key partnerships between emerging DeFi protocols and established liquidity providers, resulting in $50M+ TVL growth.",
        image: projectImage2,
        achievements: [
            "Negotiated partnerships with 5 major liquidity providers",
            "Structured co-marketing campaigns reaching 200K+ users",
            "Coordinated cross-chain integration strategy"
        ],
        link: "#"
    },
    {
        id: 3,
        tag: "Community Growth",
        title: "NFT Community Launch & Scale",
        description: "Led community growth strategy for NFT project from 0 to 50K+ members, implementing token-gated experiences and engagement programs.",
        image: projectImage3,
        achievements: [
            "Grew Discord community from 0 to 50K members in 6 months",
            "Designed and launched token-gated rewards program",
            "Achieved 85% community retention rate"
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
                                        <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider font-display rounded-full mb-6">
                                            {activeStudy.tag}
                                        </span>
                                        <h3 className="text-heading-lg font-serif text-near-black mb-6">
                                            {activeStudy.title}
                                        </h3>
                                        <p className="text-body-md text-charcoal/70 leading-relaxed mb-8">
                                            {activeStudy.description}
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
                            {/* Tag - Before Image */}
                            <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs uppercase tracking-wider font-display rounded-full">
                                {study.tag}
                            </span>

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
                                    <p className="text-body-md text-charcoal/70 leading-relaxed">
                                        {study.description}
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
