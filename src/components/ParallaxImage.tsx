import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({ src, alt }: { src: string, alt: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <div ref={ref} className="aspect-[4/5] rounded-2xl overflow-hidden relative group w-full h-full">
            <motion.div
                style={{ y, scale }}
                className="w-full h-[120%] -mt-[10%] relative"
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>
    );
}
