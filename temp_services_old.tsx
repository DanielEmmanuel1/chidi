import { useRef } from 'react';
import { motion } from 'framer-motion';

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
