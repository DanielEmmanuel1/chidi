import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import team1Image1 from '../assets/IMG_1884.jpeg';
import team1Image2 from '../assets/IMG_4420.JPG';
import solanaImage1 from '../assets/IMG_2310.jpeg';
import solanaImage2 from '../assets/IMG_2314.jpeg';
import suiImage1 from '../assets/IMG_1156.jpeg';
import suiImage2 from '../assets/IMG_1805.JPG';

gsap.registerPlugin(ScrollTrigger);

type CommunityType = 'team1' | 'solana' | 'sui';

const communities = {
    team1: {
        name: "Avalanche Team1",
        tagline: "Community",
        title: "Avalanche",
        highlight: "Team1",
        description: "As a core contributor, I actively support the ecosystem through education, events, and technical guidance.",
        images: [team1Image1, team1Image2],
        contributions: [
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
        ],
        cta: "Join the Community"
    },
    solana: {
        name: "Solana Superteam",
        tagline: "Community",
        title: "Solana",
        highlight: "Superteam",
        description: "Active member of Superteam, contributing to Solana ecosystem growth through community building and developer advocacy.",
        images: [solanaImage1, solanaImage2],
        contributions: [
            {
                title: "Ecosystem Events",
                desc: "Organized and hosted local Solana meetups connecting builders and founders."
            },
            {
                title: "Developer Onboarding",
                desc: "Created onboarding materials and tutorials for developers new to Solana."
            },
            {
                title: "Project Support",
                desc: "Provided strategic guidance to early-stage Solana projects on GTM and growth."
            },
            {
                title: "Community Engagement",
                desc: "Built and nurtured local developer communities through workshops and networking events."
            }
        ],
        cta: "Learn More"
    },
    sui: {
        name: "Sui on Campus",
        tagline: "Community",
        title: "Sui",
        highlight: "on Campus",
        description: "Leading campus initiatives to introduce students to Sui blockchain technology and Web3 development.",
        images: [suiImage1, suiImage2],
        contributions: [
            {
                title: "Campus Workshops",
                desc: "Conducted hands-on Move programming workshops for university students."
            },
            {
                title: "Student Hackathons",
                desc: "Organized campus hackathons focused on building dApps on Sui."
            },
            {
                title: "Technical Mentorship",
                desc: "Mentored student teams on blockchain development and project architecture."
            },
            {
                title: "Educational Content",
                desc: "Created beginner-friendly resources for students entering Web3 development."
            }
        ],
        cta: "Get Involved"
    }
};

export default function Community() {
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState<CommunityType>('team1');
    const activeCommunity = communities[activeTab];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".community-content", {
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

    // Animate content when tab changes
    useEffect(() => {
        gsap.fromTo(".tab-content",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [activeTab]);

    return (
        <section id="community" ref={sectionRef} className="py-32 bg-off-white relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                {/* Tabs - Desktop Only */}
                <div className="mb-16 community-content hidden lg:block">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {(Object.keys(communities) as CommunityType[]).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-8 py-3 font-display text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${activeTab === key
                                    ? 'bg-gold text-near-black shadow-lg'
                                    : 'bg-white border border-charcoal/10 text-charcoal hover:border-gold/30'
                                    }`}
                            >
                                {communities[key].name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop: Tabbed Content */}
                <div className="tab-content hidden lg:block">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Left: Title */}
                        <div className="lg:col-span-2 community-content">
                            <span className="text-sm uppercase tracking-[0.2em] text-charcoal/60 font-display mb-6 block">
                                {activeCommunity.tagline}
                            </span>
                            <h2 className="font-serif text-heading-xl md:text-display-md text-near-black mb-8">
                                {activeCommunity.title} <span className="italic text-gold">{activeCommunity.highlight}</span>
                            </h2>
                            <p className="text-body-md text-charcoal/70 leading-relaxed mb-12">
                                {activeCommunity.description}
                            </p>

                            {/* Event Photos */}
                            <div className="grid grid-cols-2 gap-4 mb-12">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img
                                        src={activeCommunity.images[0]}
                                        alt={`${activeCommunity.name} event`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img
                                        src={activeCommunity.images[1]}
                                        alt={`${activeCommunity.name} engagement`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <a
                                href="#"
                                className="inline-block px-8 py-4 border border-near-black text-near-black font-display text-sm hover:bg-near-black hover:text-white transition-all duration-300 rounded-full"
                            >
                                {activeCommunity.cta}
                            </a>
                        </div>

                        {/* Right: Contributions - One Box with Dividers */}
                        <div className="lg:col-span-3">
                            <div className="bg-white border border-charcoal/10 rounded-2xl divide-y divide-charcoal/10">
                                {activeCommunity.contributions.map((item, index) => (
                                    <div
                                        key={index}
                                        className="community-content group p-8 first:rounded-t-2xl last:rounded-b-2xl hover:bg-gold/5 transition-all duration-500"
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
                </div>

                {/* Mobile: All Communities Stacked */}
                <div className="lg:hidden space-y-20">
                    {(Object.keys(communities) as CommunityType[]).map((key) => {
                        const community = communities[key];
                        return (
                            <div key={key} className="space-y-8">
                                {/* Title and Description */}
                                <div className="space-y-6">
                                    <span className="text-sm uppercase tracking-[0.2em] text-charcoal/60 font-display block">
                                        {community.tagline}
                                    </span>
                                    <h2 className="font-serif text-heading-xl text-near-black">
                                        {community.title} <span className="italic text-gold">{community.highlight}</span>
                                    </h2>
                                    <p className="text-body-md text-charcoal/70 leading-relaxed">
                                        {community.description}
                                    </p>
                                </div>

                                {/* Event Photos */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img
                                            src={community.images[0]}
                                            alt={`${community.name} event`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img
                                            src={community.images[1]}
                                            alt={`${community.name} engagement`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Contributions - One Box with Dividers */}
                                <div className="bg-white border border-charcoal/10 rounded-2xl divide-y divide-charcoal/10">
                                    {community.contributions.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-6 first:rounded-t-2xl last:rounded-b-2xl"
                                        >
                                            <h3 className="text-lg font-serif text-near-black mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href="#"
                                    className="inline-block px-8 py-4 border border-near-black text-near-black font-display text-sm hover:bg-near-black hover:text-white transition-all duration-300 rounded-full"
                                >
                                    {community.cta}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
