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
            className="relative bg-near-black py-32 md:py-40 lg:py-48 overflow-visible"
        >
            <style>{`
                .hero-char, .rotating-char {
                    font-size: clamp(80px, 22vw, 300px);
                    line-height: 0.85;
                    display: inline-block;
                }
                @media (min-width: 768px) {
                    .hero-char, .rotating-char {
                        font-size: clamp(100px, 14vw, 180px);
                        line-height: 0.85;
                    }
                }
                @media (min-width: 1024px) {
                    .hero-char, .rotating-char {
                        font-size: clamp(120px, 12vw, 200px);
                        line-height: 0.82;
                    }
                }
                @media (min-width: 1280px) {
                    .hero-char, .rotating-char {
                        font-size: clamp(160px, 14vw, 280px);
                        line-height: 0.8;
                    }
                }
                @media (min-width: 1536px) {
                    .hero-char, .rotating-char {
                        font-size: clamp(220px, 18vw, 492px);
                        line-height: 0.78;
                    }
                }
            `}</style>

            {/* Background Glows */}
            <motion.div style={{ y: y1 }} className="random-glow absolute top-[15%] left-[10%] w-[40vw] h-[40vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></motion.div>
            <motion.div style={{ y: y2 }} className="random-glow absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></motion.div>

            {/* Main Content */}
            <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 overflow-visible">
                <div className="flex flex-col items-start md:items-center text-left md:text-center gap-0 overflow-visible">

                    {/* Line 1: A+[IMG] <--gap--> GENIUS WEB3 */}
                    <div className="flex flex-col md:flex-row items-start md:items-center overflow-visible mb-0 md:-mb-4 lg:-mb-6 xl:-mb-16 2xl:-mb-20">
                        {/* Mobile: A GENIUS with polaroid */}
                        <div className="flex items-center gap-2 mb-0 md:hidden">
                            <div className="flex">{renderWord("A")}</div>
                            <div className="flex">{renderWord("GENIUS")}</div>
                            <div className="ml-2">
                                <PolaroidSlider
                                    images={slider1Images}
                                    rotation="-rotate-6"
                                    hasGlow={true}
                                    delay={0}
                                />
                            </div>
                        </div>
                        {/* Mobile: WEB3 */}
                        <div className="flex items-center mb-0 md:hidden">
                            <div className="flex">{renderWord("WEB3")}</div>
                        </div>
                        {/* Desktop: Original layout */}
                        <div className="hidden md:flex md:flex-wrap lg:flex-nowrap items-center justify-center gap-3 md:gap-3 lg:gap-6 xl:gap-12 2xl:gap-96 overflow-visible">
                            <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 overflow-visible">
                                <div className="flex">{renderWord("A")}</div>
                                <PolaroidSlider
                                    images={slider1Images}
                                    rotation="-rotate-6"
                                    hasGlow={true}
                                    delay={0}
                                />
                            </div>
                            <div className="flex items-center gap-2 md:gap-4 lg:gap-4 xl:gap-8 2xl:gap-16">
                                <div className="flex">{renderWord("GENIUS")}</div>
                                <div className="flex">{renderWord("WEB3")}</div>
                            </div>
                        </div>
                    </div>

                    {/* Line 2: BUSINESS/COMMUNITY/MARKETING [IMG] */}
                    <div className="relative flex items-center overflow-visible mb-0 md:-mb-4 lg:-mb-6 xl:-mb-14 2xl:-mb-6">
                        <div className="flex items-center gap-2 md:gap-0">
                            <div className="flex">
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
                        </div>
                    </div>

                    {/* Desktop: Fixed Polaroid for Line 2 - fixed to viewport */}
                    <div className="hidden md:block absolute md:right-[18%] lg:right-4 xl:right-8 2xl:right-96 top-1/2 md:translate-y-[-60%] lg:-translate-y-1/2 z-10">
                        <PolaroidSlider
                            images={slider2Images}
                            rotation="rotate-8"
                            innerRotation="rotate-[-20deg]"
                            delay={1300}
                        />
                    </div>

                    {/* Line 3: DEVELOPER */}
                    <div className="flex items-center mb-0 md:mb-0">
                        <div className="flex items-center gap-2 md:gap-0">
                            <div className="flex">{renderWord("DEVELOPER")}</div>
                            {/* Mobile: Polaroid at end of DEVELOPER */}
                            <div className="md:hidden ml-2">
                                <PolaroidSlider
                                    images={slider2Images}
                                    rotation="rotate-8"
                                    innerRotation="rotate-[-20deg]"
                                    delay={1300}
                                />
                            </div>
                        </div>
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

function PolaroidSlider({ images, rotation, hasGlow = false, innerRotation = "", delay = 0 }: { images: string[], rotation: string, hasGlow?: boolean, innerRotation?: string, delay?: number }) {
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
        <div className="hero-img flex-shrink-0 overflow-visible" style={{ transform: `rotate(${rotation === "-rotate-6" ? "-6deg" : "8deg"})`, zIndex: 15 }}>
            {hasGlow && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-yellow-400/20 via-amber-300/10 to-transparent blur-2xl pointer-events-none -z-10"></div>
            )}
            <div className={`bg-white p-0.5 md:p-0.5 lg:p-1 xl:p-2 pb-1 md:pb-1 lg:pb-1.5 xl:pb-3 2xl:pb-20 shadow-2xl overflow-visible ${innerRotation}`} >
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-28 lg:h-28 xl:w-48 xl:h-48 2xl:w-[25rem] 2xl:h-[25rem] overflow-hidden">
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