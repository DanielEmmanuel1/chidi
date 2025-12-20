import { useEffect, useRef, useMemo, useState } from 'react';
import gsap from 'gsap';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// --- ASSET IMPORTS ---
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

// --- CONFIGURATION ---
const MIN_IMAGE_SIZE = 250;
const MAX_IMAGE_SIZE = 380;
const MARGIN_MIN = 40;
const MARGIN_MAX = 80;
const CANVAS_PADDING = 100;

// --- TYPES ---
interface HeroImageData {
    id: number;
    img: string;
}

interface PositionedImage extends HeroImageData {
    x: number;
    y: number;
    size: number;
    margin: number;
}

// --- ALGORITHM: RESPONSIVE PACKING ---
const generatePositions = (images: string[], screenWidth: number): { items: PositionedImage[], width: number, height: number } => {
    // 1. DETERMINE SCALE FACTOR
    let scaleFactor = 1.0;
    if (screenWidth < 640) scaleFactor = 0.5;
    else if (screenWidth < 1024) scaleFactor = 0.7;
    else if (screenWidth < 1440) scaleFactor = 0.9;

    // Initial World Size
    // We start wide to encourage horizontal spread
    let currentWorldWidth = 5500 * scaleFactor;
    let currentWorldHeight = 3500 * scaleFactor;

    const data = images.map((img, index) => ({ id: index, img }));
    const shuffledData = [...data].sort(() => Math.random() - 0.5);

    let success = false;
    let resultingImages: PositionedImage[] = [];
    let attempts = 0;

    // Phase 1: Placement
    while (!success && attempts < 15) {
        attempts++;
        resultingImages = [];
        const placedCircles: { x: number; y: number; r: number; margin: number }[] = [];
        let allPlaced = true;

        for (const item of shuffledData) {
            let placed = false;
            let placementAttempts = 0;

            const size = (Math.random() * (MAX_IMAGE_SIZE - MIN_IMAGE_SIZE) + MIN_IMAGE_SIZE) * scaleFactor;
            const radius = size / 2;
            const margin = (Math.random() * (MARGIN_MAX - MARGIN_MIN) + MARGIN_MIN) * scaleFactor;
            const padding = CANVAS_PADDING * scaleFactor;

            while (!placed && placementAttempts < 800) {
                const availableWidth = currentWorldWidth - (padding * 2) - size;
                const availableHeight = currentWorldHeight - (padding * 2) - size;

                const x = (Math.random() - 0.5) * availableWidth;
                const y = (Math.random() - 0.5) * availableHeight;

                let overlapping = false;

                for (const circle of placedCircles) {
                    const dx = circle.x - x;
                    const dy = circle.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const requiredDistance = circle.r + radius + circle.margin + margin;

                    if (distance < requiredDistance) {
                        overlapping = true;
                        break;
                    }
                }

                if (!overlapping) {
                    placed = true;
                    placedCircles.push({ x, y, r: radius, margin });
                    resultingImages.push({ ...item, x, y, size, margin });
                }
                placementAttempts++;
            }

            if (!placed) {
                allPlaced = false;
                break;
            }
        }

        if (allPlaced) {
            success = true;
        } else {
            // Expand mostly horizontally to ensure we fit all images
            currentWorldWidth += (1200 * scaleFactor);
            currentWorldHeight += (800 * scaleFactor);
        }
    }

    // Phase 2: Shrink-Wrap Calculation
    if (resultingImages.length === 0) return { items: [], width: 0, height: 0 };

    const minX = Math.min(...resultingImages.map(m => m.x - m.size / 2));
    const maxX = Math.max(...resultingImages.map(m => m.x + m.size / 2));
    const minY = Math.min(...resultingImages.map(m => m.y - m.size / 2));
    const maxY = Math.max(...resultingImages.map(m => m.y + m.size / 2));

    const contentWidth = maxX - minX;
    const contentHeight = maxY - minY;

    const padding = CANVAS_PADDING * scaleFactor;
    
    // Strict Shrink Wrap with forced minimum width for panning effect
    const finalWorldWidth = Math.max(contentWidth + padding * 2, screenWidth * 1.8); // Reduced multiplier slightly for 30 images
    const finalWorldHeight = Math.max(contentHeight + padding * 2, window.innerHeight * 1.2);

    // Re-center
    const offsetX = (minX + maxX) / 2;
    const offsetY = (minY + maxY) / 2;

    const centeredImages = resultingImages.map(m => ({
        ...m,
        x: m.x - offsetX,
        y: m.y - offsetY
    }));

    return { items: centeredImages, width: finalWorldWidth, height: finalWorldHeight };
};

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setScreenWidth(window.innerWidth);
            }, 500);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const rawImages = useMemo(() => [
        heroImage1, heroImage2, heroImage3, heroImage4, heroImage5, 
        heroImage6, heroImage7, heroImage8, heroImage9, heroImage10
    ], []);

    // REDUCED TO 3 SETS (30 Images Total) - Less crowded
    const allImages = useMemo(() => [...rawImages, ...rawImages, ...rawImages], [rawImages]);

    const { items: floatingImages, width: worldWidth, height: worldHeight } = useMemo(
        () => generatePositions(allImages, screenWidth), 
        [allImages, screenWidth]
    );

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
            const { innerWidth, innerHeight } = window;
            
            const maxTranslateX = Math.max(0, (worldWidth - innerWidth) / 2);
            const maxTranslateY = Math.max(0, (worldHeight - innerHeight) / 2);

            const mouseXNormalized = (e.clientX / innerWidth - 0.5) * 2; 
            const mouseYNormalized = (e.clientY / innerHeight - 0.5) * 2; 

            mouseX.set(-mouseXNormalized * maxTranslateX);
            mouseY.set(-mouseYNormalized * maxTranslateY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [worldWidth, worldHeight, mouseX, mouseY]);

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
                    amount: 0.8,
                    from: 'random'
                },
                ease: 'back.out(1.5)',
                delay: 0.2
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center bg-near-black overflow-hidden bg-black"
        >
            <motion.div
                className="absolute top-1/2 left-1/2 z-5"
                style={{
                    x: smoothMouseX,
                    y: smoothMouseY,
                    width: 0, 
                    height: 0,
                    willChange: 'transform'
                }}
            >
                {floatingImages.map((item, index) => (
                    <div
                        key={index}
                        className="floating-img absolute"
                        style={{
                            left: item.x,
                            top: item.y,
                            marginLeft: -item.size / 2,
                            marginTop: -item.size / 2,
                            width: item.size,
                            height: item.size,
                        }}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-full object-cover brightness-[0.85] hover:brightness-110 transition-all duration-500"
                                draggable={false}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left pointer-events-none"
            >
                <h1 className="hero-title mix-blend-difference">
                    <div className="flex flex-col leading-[0.85]">
                        <span className="block text-white font-display text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] xxl:text-[16rem] font-bold tracking-tighter">
                            Chidi
                        </span>
                        <span className="block text-gold font-serif italic text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] xxl:text-[16rem] tracking-tighter ml-8 md:ml-24 lg:ml-32 text-[#D4AF37]">
                            Ugwu
                        </span>
                    </div>
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