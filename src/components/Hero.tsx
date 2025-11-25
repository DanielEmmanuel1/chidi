import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage1 from '../assets/IMG_1823.jpeg';
import heroImage2 from '../assets/IMG_2314.jpeg';
import heroImage3 from '../assets/IMG_2310.jpeg';
import heroImageMobile from '../assets/IMG_1805.JPG';
import heroImage4 from '../assets/IMG_2562.JPG';
import heroImage5 from '../assets/IMG_1884.jpeg';
import heroImage6 from '../assets/IMG_2552.JPG';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    const [wordIndex, setWordIndex] = useState(0);
    const isMounted = useRef(false);

    const words = ["BUSINESS", "COMMUNITY", "MARKETING"];

    const slider1Images = [heroImage1, heroImage4, heroImage5, heroImage2];
    const slider2Images = [heroImage3, heroImage2, heroImage6, heroImage1];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });
            tl.from('.hero-char, .hero-img', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power3.out'
            });
            tl.from('.random-glow', {
                opacity: 0,
                scale: 0,
                duration: 2,
                stagger: 0.5,
                ease: 'power2.out'
            }, "-=1");
            tl.from('.mobile-hero-img', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, "-=0.5");
        }, heroRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            gsap.fromTo('.rotating-char',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
        } else {
            isMounted.current = true;
        }
        const timer = setTimeout(() => {
            gsap.to('.rotating-char', {
                y: -50,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => setWordIndex((prev) => (prev + 1) % words.length)
            });
        }, 2500);
        return () => clearTimeout(timer);
    }, [wordIndex]);

    const charStyle = {
        fontFamily: 'Bebas Neue, Arial, sans-serif',
        fontWeight: 400,
        letterSpacing: '0.02em',
    };

    const renderWord = (word: string, className = "text-white") => {
        return word.split('').map((char, i) => (
            <span
                key={i}
                className={`hero-char ${className} tracking-tighter uppercase relative -mr-1 md:-mr-2 lg:-mr-3 xl:-mr-4`}
                style={charStyle}
            >
                {char}
            </span>
        ));
    };

    return (
        <section
            ref={heroRef}
            className="relative bg-near-black overflow-hidden py-32 md:py-40 lg:py-48"
        >
            <style>{`
                .hero-char, .rotating-char {
                    font-size: clamp(80px, 22vw, 300px);
                    line-height: 0.85;
                    display: inline-block;
                }
                @media (min-width: 768px) {
                    .hero-char, .rotating-char {
                        font-size: clamp(140px, 18vw, 320px);
                        line-height: 0.8;
                    }
                }
                @media (min-width: 1024px) {
                    .hero-char, .rotating-char {
                        font-size: clamp(180px, 16vw, 380px);
                        line-height: 0.75;
                    }
                }
                @media (min-width: 1280px) {
                    .hero-char, .rotating-char {
                        font-size: clamp(220px, 18vw, 492px);
                        line-height: 0.7;
                    }
                }
            `}</style>

            {/* Background Glows */}
            <motion.div style={{ y: y1 }} className="random-glow absolute top-[15%] left-[10%] w-[40vw] h-[40vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></motion.div>
            <motion.div style={{ y: y2 }} className="random-glow absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></motion.div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col items-start md:items-center text-left md:text-center">

                    {/* Line 1: A [POLAROID] GENIUS WEB3 */}
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-12 lg:gap-16 xl:gap-24">
                        <div className="flex shrink-0">{renderWord("A")}</div>
                        <PolaroidSlider
                            images={slider1Images}
                            rotation="-rotate-6"
                            className="shrink-0"
                            hasGlow={true}
                            delay={0}
                        />
                        <div className="flex shrink-0">{renderWord("GENIUS")}</div>
                        <div className="flex shrink-0">{renderWord("WEB3")}</div>
                    </div>

                    {/* Line 2: BUSINESS/COMMUNITY/MARKETING [POLAROID] */}
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-12 lg:gap-16 xl:gap-24">
                        <div className="flex shrink-0">
                            {words[wordIndex].split('').map((char, i) => (
                                <span
                                    key={i}
                                    className="hero-char rotating-char text-[#F5C857] tracking-tighter uppercase relative -mr-1 md:-mr-2 lg:-mr-3 xl:-mr-4"
                                    style={charStyle}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                        <PolaroidSlider
                            images={slider2Images}
                            rotation="rotate-8"
                            className="shrink-0"
                            innerRotation="rotate-[-20deg]"
                            delay={1300}
                        />
                    </div>

                    {/* Line 3: DEVELOPER */}
                    <div className="flex items-center">
                        <div className="flex">{renderWord("DEVELOPER")}</div>
                    </div>
                </div>
            </div>

            {/* Mobile & Tablet Hero Image */}
            <div className="mobile-hero-img block lg:hidden w-full flex justify-center mt-12 px-4 relative z-20">
                <div className="relative w-full max-w-md">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-2xl pointer-events-none -z-10"></div>
                    <img
                        src={heroImageMobile}
                        alt="0xChidi"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60 hidden md:block">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs uppercase tracking-widest text-white/50 font-sans">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
                </div>
            </div>
        </section>
    );
}

function PolaroidSlider({ images, rotation, className, hasGlow = false, innerRotation = "", delay = 0 }: { images: string[], rotation: string, className?: string, hasGlow?: boolean, innerRotation?: string, delay?: number }) {
    const currentIndex = useRef(0);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        imageRefs.current.forEach((img, index) => {
            if (img) {
                gsap.set(img, { y: index === 0 ? 0 : '100%', opacity: index === 0 ? 1 : 0 });
            }
        });

        const startSlider = () => {
            return setInterval(() => {
                const idx = currentIndex.current;
                const nextIndex = (idx + 1) % images.length;
                const currentImg = imageRefs.current[idx];
                const nextImg = imageRefs.current[nextIndex];

                if (currentImg && nextImg) {
                    gsap.to(currentImg, { y: '-100%', opacity: 0, duration: 1, ease: 'power2.inOut' });
                    gsap.fromTo(nextImg,
                        { y: '100%', opacity: 0 },
                        { y: '0%', opacity: 1, duration: 1, ease: 'power2.inOut' }
                    );
                }
                currentIndex.current = nextIndex;
            }, 4000);
        };

        let intervalId: ReturnType<typeof setInterval>;
        const timeoutId = setTimeout(() => {
            intervalId = startSlider();
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [images.length, delay]);

    return (
        <div className={`hero-img transform ${rotation} flex-shrink-0 z-10 ${className}`}>
            {hasGlow && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-yellow-400/20 via-amber-300/10 to-transparent blur-2xl pointer-events-none -z-10"></div>
            )}
            <div className={`bg-white p-1 md:p-2 pb-4 md:pb-5 lg:pb-7 xl:pb-10 shadow-2xl ${innerRotation}`}>
                <div className="relative w-12 h-12 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-80 xl:h-80 overflow-hidden">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            ref={el => { imageRefs.current[index] = el }}
                            src={img}
                            alt=""
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}