import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import heroImage1 from '../assets/IMG_1823.jpeg';
import heroImage2 from '../assets/IMG_2314.jpeg';
import heroImage3 from '../assets/IMG_2310.jpeg';
import heroImage4 from '../assets/IMG_2562.JPG';
import heroImage5 from '../assets/IMG_1884.jpeg';
import heroImage6 from '../assets/IMG_2552.JPG';
import heroImage7 from '../assets/IMG_1805.JPG';
import heroImage8 from '../assets/IMG_2565.JPG';
import heroImage9 from '../assets/IMG_2566.JPG';
import heroImage10 from '../assets/IMG_1156.jpeg';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse tracking
    const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
    const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                // Map mouse position to -400 to 400 range for 2x movement
                const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 800;
                const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 800;
                mouseX.set(x);
                mouseY.set(y);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the main heading with SplitText-like effect
            gsap.from('.hero-title', {
                y: 120,
                opacity: 0,
                duration: 1.4,
                ease: 'power4.out',
                delay: 0.5
            });

            // Animate the subtitle
            gsap.from('.hero-subtitle', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.8
            });

            // Animate floating images with stagger
            gsap.from('.floating-img', {
                scale: 0,
                opacity: 0,
                duration: 1.2,
                stagger: {
                    amount: 0.6,
                    from: 'random'
                },
                ease: 'back.out(1.5)',
                delay: 0.6
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Generate larger images spread across massive canvas
    const generateImages = () => {
        const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8, heroImage9, heroImage10];
        const sizes = ['20px', '25px', '30px', '35px', '40px', '45px', '50px'];
        const result = [];

        // Generate images with LOTS of spacing - only 4 per zone instead of 7
        for (let zone = -7; zone <= 8; zone++) {
            const zoneStart = zone * 100;
            const imagesPerZone = 4; // Reduced from 7 for more spacing

            for (let i = 0; i < imagesPerZone; i++) {
                const randomImg = images[Math.floor(Math.random() * images.length)];
                const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
                const randomTop = `${Math.floor(Math.random() * 70) + 10}%`; // More centered vertically
                const randomLeft = `${Math.floor(Math.random() * 60) + zoneStart + 20}%`; // More spacing horizontally

                result.push({
                    img: randomImg,
                    size: `w-[${randomSize}] h-[${randomSize}]`,
                    top: randomTop,
                    left: randomLeft
                });
            }
        }

        return result;
    };

    const floatingImages = generateImages();

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center bg-near-black overflow-hidden"
        >
            {/* Vast canvas of floating images that moves with mouse - NO OVERLAY */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none z-5"
                style={{
                    x: smoothMouseX,
                    y: smoothMouseY,
                }}
            >
                {floatingImages.map((item, index) => (
                    <div
                        key={index}
                        className={`floating-img absolute ${item.size}`}
                        style={{
                            top: item.top,
                            left: item.left,
                        }}
                    >
                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover brightness-110"
                                draggable={false}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Main Content - HIGH Z-INDEX */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left"
            >
                {/* Main Heading - Large and Bold like CLOU */}
                <h1 className="hero-title mb-6 md:mb-10">
                    <span className="block text-white font-display text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] xxl:text-[16rem] font-bold tracking-tighter leading-[0.85]">
                        0xCHIDI
                    </span>
                </h1>

                {/* Subtitle - Clean and simple */}
                <div className="hero-subtitle max-w-3xl">
                    <p className="text-white/70 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-relaxed">
                        A <span className="text-[#F5C857] font-medium">Genius Web3</span> Business Developer with focus on decentralized solutions, blockchain innovation, and community building.
                    </p>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-4 text-white/30"
                >
                    <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium">Scroll</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}