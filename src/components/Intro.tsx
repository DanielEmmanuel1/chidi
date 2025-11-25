import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section className="relative py-20 md:py-32 lg:py-40 bg-near-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h2 className="text-white/90 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8">
                        A <span className="text-[#F5C857] font-medium">Genius Web3</span> Business Developer
                    </h2>

                    <p className="text-white/60 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                        Focused on decentralized solutions, blockchain innovation, and community building.
                        Transforming ideas into impactful Web3 experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
