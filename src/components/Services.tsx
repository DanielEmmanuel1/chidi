import { useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        number: "01",
        title: "Growth & Product Marketing",
        description: "Design data-driven GTM strategies and on-chain incentive models that accelerate user acquisition and optimize retention loops."
    },
    {
        number: "02",
        title: "Content Strategy & Writing",
        description: "Craft clear, compelling narratives and technical documentation that demystify complex protocols and establish category leadership."
    },
    {
        number: "03",
        title: "Social Media Growth",
        description: "Execute high-velocity content campaigns on X and Farcaster to expand reach, drive engagement, and dominate share of voice."
    },
    {
        number: "04",
        title: "Community Development",
        description: "Architect vibrant, self-sustaining communities through ambassador programs, governance education, and grassroots activation."
    },
    {
        number: "05",
        title: "Business Development",
        description: "Secure high-value commercial partnerships and infrastructure integrations that expand ecosystem utility and market presence."
    },
    {
        number: "06",
        title: "Event Management",
        description: "Curate immersive hackathons, side events, and developer workshops that foster deep connection and real-world collaboration."
    },
    {
        number: "07",
        title: "Partnership & Collab Management",
        description: "Nurture and scale strategic relationships post-deal, ensuring long-term alignment, co-marketing success, and ecosystem health."
    },
];

export default function Services() {
    const containerRef = useRef(null);



    return (
        <section id="services" ref={containerRef} className="py-32 bg-off-white relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-20">
                    {/* Sticky Header */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit mb-20 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-sm uppercase tracking-[0.2em] text-charcoal/60 font-display mb-6 block">
                                Services
                            </span>
                            <h2 className="font-serif text-heading-xl md:text-display-md text-near-black">
                                How I Help Web3 Projects <span className="italic text-gold">Scale</span>
                            </h2>
                            <p className="mt-8 text-body-md text-charcoal/70 leading-relaxed max-w-md">
                                Comprehensive solutions tailored for the decentralized web. From strategy to execution, I help you navigate the complexities of Web3.
                            </p>
                        </motion.div>
                    </div>

                    {/* Services List */}
                    <div className="lg:col-span-7 space-y-8">
                        {services.map((service, index) => (
                            <ServiceItem key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceItem({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5"
        >
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <span className="text-6xl font-serif text-gold/20 group-hover:text-gold transition-colors duration-500">
                    {service.number}
                </span>
                <div>
                    <h3 className="text-heading-md font-serif text-near-black mb-4 group-hover:text-gold transition-colors duration-500">
                        {service.title}
                    </h3>
                    <p className="text-body-md text-charcoal/70 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
