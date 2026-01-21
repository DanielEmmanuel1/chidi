import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        company: "Avalanche Team1",
        roles: ["Ecosystem Contributor", "Content Writer"],
        description: "Created educational and ecosystem focused content to onboard users, highlight Avalanche projects, and support community growth across X and partner channels."
    },
    {
        id: 2,
        company: "SeaFi AI",
        roles: ["Business Development Manager", "Partnership Manager"],
        description: "Led partnerships and growth initiatives for an AI powered SeaFi platform, sourced strategic integrations, and drove adoption through B2B relationships and ecosystem deals."
    },
    {
        id: 3,
        company: "ZNS Connect",
        roles: ["Social Media Manager", "Community Developer", "Content Writer"],
        description: "Built and managed online communities, crafted brand voice and content strategy, and drove engagement across social platforms while supporting Web3 user onboarding."
    },
    {
        id: 4,
        company: "Creator Blockchain",
        roles: ["Social Media Manager", "Community Developer", "Content Writer"],
        description: "Managed social presence and community growth for a creator focused blockchain platform, delivered educational content, and amplified product launches and ecosystem updates."
    },
    {
        id: 5,
        company: "Ginakev Digital Academy",
        roles: ["Social Media Manager", "Community Manager", "Content Writer"],
        description: "Handled content, community engagement, and brand storytelling for a digital learning academy, boosting visibility, trust, and student engagement online."
    },
    {
        id: 6,
        company: "Development Edge",
        roles: ["Product Marketing Manager"],
        description: "Owned product positioning, messaging, and go to market strategy, translating product features into clear value propositions for target users and stakeholders."
    }
];

export default function ProfessionalExperience() {
    // We keep GSAP only for the main Section Header to preserve the existing entrance style
    const sectionRef = useRef(null);
    
    // --- DROPDOWN LOGIC ---
    const [expandedId, setExpandedId] = useState<number | null>(1); // Default first open
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        if (expandedId !== id) {
            setExpandedId(id);
        } else {
            // Optional: Uncomment below if you want to allow closing the active item
            // setExpandedId(null); 
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".experience-header", {
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

    return (
        <section id="experience" ref={sectionRef} className="py-32 bg-near-black relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                
                {/* Header (GSAP Animated) */}
                <div className="mb-20 experience-header">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/60 font-display mb-6 block">
                        Career Journey
                    </span>
                    <h2 className="font-serif text-heading-xl md:text-display-md text-white max-w-3xl">
                        Professional <span className="italic text-gold">Experience</span>
                    </h2>
                </div>

                {/* Experience Accordion List */}
                <div className="space-y-4">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-white/10"
                            onMouseEnter={() => setHoveredId(exp.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <button
                                onClick={() => toggleExpand(exp.id)}
                                className="w-full py-8 group text-left focus:outline-none"
                            >
                                <div className="grid md:grid-cols-12 gap-6 items-center">
                                    
                                    {/* Number */}
                                    <div className="md:col-span-2">
                                        <span className={`text-4xl md:text-5xl font-serif transition-colors duration-500 ${
                                            expandedId === exp.id || hoveredId === exp.id 
                                            ? 'text-gold' 
                                            : 'text-white/20'
                                        }`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Company Title + Chevron */}
                                    <div className="md:col-span-10 flex items-center justify-between pr-4">
                                        <h3 className={`text-2xl md:text-4xl font-serif transition-colors duration-300 ${
                                            expandedId === exp.id ? 'text-white' : 'text-white/70 group-hover:text-gold'
                                        }`}>
                                            {exp.company}
                                        </h3>
                                        
                                        {/* Rotating Chevron from Gallery Code */}
                                        <motion.div
                                            animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`ml-4 ${expandedId === exp.id ? 'text-gold' : 'text-white/40'}`}
                                        >
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                </div>
                            </button>

                            {/* Collapsible Content */}
                            <AnimatePresence>
                                {expandedId === exp.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid md:grid-cols-12 gap-6 pb-10">
                                            {/* Spacer to align with text above */}
                                            <div className="hidden md:block md:col-span-2"></div>
                                            
                                            <div className="md:col-span-10 space-y-6">
                                                {/* Roles */}
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.roles.map((role, roleIndex) => (
                                                        <span
                                                            key={roleIndex}
                                                            className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs uppercase tracking-wider font-display rounded-full border border-gold/20"
                                                        >
                                                            {role}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Description */}
                                                <p className="text-body-md text-white/70 leading-relaxed max-w-3xl">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}