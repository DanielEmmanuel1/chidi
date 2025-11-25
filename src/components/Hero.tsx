import { useEffect, useRef, useMemo } from 'react';
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

    const smoothMouseX = useSpring(mouseX, { damping: 35, stiffness: 350 });
    const smoothMouseY = useSpring(mouseY, { damping: 35, stiffness: 350 });

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2800;
                const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2800;
                mouseX.set(x);
                mouseY.set(y);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-title', {
                y: 120,
                opacity: 0,
                duration: 1.4,
                ease: 'power4.out',
                delay: 0.5
            });

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

    const floatingImages = useMemo(() => {
        const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8, heroImage9, heroImage10];
        const sizes = [320, 360, 400, 440, 480, 520, 550];
        const result = [];

        for (let hZone = -5; hZone <= 5; hZone++) {
            for (let vZone = -3; vZone <= 3; vZone++) {
                const horizontalStart = hZone * 70;
                const verticalStart = vZone * 80;

                const randomImg = images[Math.floor(Math.random() * images.length)];
                const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

                const randomTop = `${Math.floor(Math.random() * 25) + verticalStart + 37.5}%`;
                const randomLeft = `${Math.floor(Math.random() * 25) + horizontalStart + 37.5}%`;

                result.push({
                    img: randomImg,
                    size: randomSize,
                    top: randomTop,
                    left: randomLeft
                });
            }
        }

        const viewportImages = [
            { top: '15%', left: '15%' },
            { top: '20%', left: '75%' },
            { top: '70%', left: '20%' },
            { top: '65%', left: '70%' }
        ];

        viewportImages.forEach(position => {
            const randomImg = images[Math.floor(Math.random() * images.length)];
            const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

            result.push({
                img: randomImg,
                size: randomSize,
                top: position.top,
                left: position.left
            });
        });

        return result;
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center bg-near-black overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none z-5"
                style={{
                    x: useTransform(smoothMouseX, (v) => -v),
                    y: useTransform(smoothMouseY, (v) => -v),
                    willChange: 'transform'
                }}
            >
                {floatingImages.map((item, index) => (
                    <div
                        key={index}
                        className="floating-img absolute"
                        style={{
                            top: item.top,
                            left: item.left,
                            width: `clamp(${item.size * 0.25}px, ${item.size * 0.06}vw, ${item.size}px)`,
                            height: `clamp(${item.size * 0.25}px, ${item.size * 0.06}vw, ${item.size}px)`
                        }}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
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

            <motion.div
                style={{ opacity }}
                className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left"
            >
                <h1 className="hero-title">
                    <span className="block text-white font-display text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] xxl:text-[16rem] font-bold tracking-tighter leading-[0.85]">
                        0xCHIDI
                    </span>
                </h1>
            </motion.div>

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