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

    // Define image sets for each slider
    const slider1Images = [heroImage1, heroImage4, heroImage5, heroImage2];
    const slider2Images = [heroImage3, heroImage2, heroImage6, heroImage1];
    const slider3Images = [heroImage2, heroImage5, heroImage3, heroImage4];

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

            // Animate mobile image
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
                onComplete: () => {
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            });
        }, 2500);

        return () => clearTimeout(timer);
    }, [wordIndex]);

    const charStyle = {
        fontFamily: 'Bebas Neue, Arial, sans-serif',
        fontWeight: 400,
        letterSpacing: '0.02em',
    };

    const responsiveFontStyle = `
        .hero-char, .rotating-char {
            font-size: clamp(80px, 22vw, 300px);
            line-height: 0.75;
            display: inline-block;
        }
        
        @media (min-width: 768px) {
            .hero-char, .rotating-char {
                font-size: clamp(110px, 15vw, 240px);
                line-height: 0.7;
            }
        }
        
        @media (min-width: 1024px) {
            .hero-char, .rotating-char {
                font-size: clamp(120px, 13vw, 220px);
                line-height: 0.65;
            }
        }
        
        @media (min-width: 1280px) {
            .hero-char, .rotating-char {
                font-size: clamp(160px, 16vw, 270px);
                line-height: 0.6;
            }
        }
    `;

    const renderWord = (word: string, className = "text-white", zIndex = "z-30") => {
        return word.split('').map((char, i) => (
            <span
                key={i}
                className={`hero-char ${className} ${zIndex} tracking-tighter uppercase relative -mr-1 md:-mr-2 lg:-mr-3`}
                style={charStyle}
            >
                {char}
            </span>
        ));
    };

    return (
        <section
            ref={heroRef}
            className="md:h-screen flex justify-center relative bg-near-black overflow-hidden flex flex-col md:justify-center pt-40 md:pt-0"
        >
            <style>{responsiveFontStyle}</style>

            {/* Background Glows */}
            <motion.div style={{ y: y1 }} className="random-glow absolute top-[15%] left-[10%] w-[40vw] h-[40vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></motion.div>
            <motion.div style={{ y: y2 }} className="random-glow absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-gradient-radial from-yellow-400/10 via-amber-300/5 to-transparent blur-3xl pointer-events-none z-0"></motion.div>

            <div className="w-fit md:mt-20 mx-0 md:mx-auto px-4 md:px-8 relative z-10 flex flex-col items-start md:items-center mb-12 md:mb-0">

                {/* Line 1: A GENIUS [IMG] */}
                <div className="relative w-full flex flex-wrap md:flex-nowrap items-center justify-start md:justify-start md:mr-72 mb-0 md:-mb-16 lg:-mb-20 xl:-mb-24">
                    <span className="hero-char text-white z-50 tracking-tighter uppercase relative mr-4 md:mr-8 lg:mr-12 xl:mr-16 -mr-1 md:-mr-2 lg:-mr-3" style={charStyle}>A</span>

                    <div className="flex">
                        {renderWord("GENIUS", "text-white", "z-50")}
                    </div>

                    {/* Polaroid Image 1 - moved to end */}
                    <PolaroidSlider
                        images={slider1Images}
                        rotation="-rotate-6"
                        className="ml-2 md:ml-4 lg:ml-8 xl:ml-12 mt-2 md:mt-0"
                        hasGlow={true}
                        delay={0}
                    />
                </div>

                {/* Line 2: WEB3 [IMG] [ROTATING] */}
                <div className="relative md:mr-[50%] w-full flex flex-wrap md:flex-nowrap items-center justify-start md:justify-center mb-0 md:-mb-16 lg:-mb-20 xl:-mb-24">
                    <div className="flex">
                        {renderWord("WEB3", "text-white", "z-50")}
                    </div>

                    {/* Polaroid Image 2 */}
                    <PolaroidSlider
                        images={slider2Images}
                        rotation="rotate-8"
                        className="md:mr-40"
                        innerRotation="rotate-[-20deg]"
                        delay={1300}
                    />

                    {/* Rotating Word - Higher placement on mobile */}
                    <div className="flex mt-2 md:mt-0 lg:w-0 lg:overflow-visible lg:whitespace-nowrap lg:-ml-32">
                        {words[wordIndex].split('').map((char, i) => (
                            <span
                                key={i}
                                className="hero-char rotating-char text-[#F5C857] z-50 tracking-tighter uppercase relative -mr-1 md:-mr-2 lg:-mr-3"
                                style={charStyle}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Line 3: DEVELOPER [IMG] */}
                <div className="relative w-full flex flex-wrap md:flex-nowrap items-center justify-start md:justify-center mt-0 md:mt-0">
                    <div className="flex">
                        {renderWord("DEVELOPER", "text-white", "z-50")}
                    </div>

                    {/* Polaroid Image 3 - Always visible */}
                    <PolaroidSlider
                        images={slider3Images}
                        rotation="rotate-12"
                        className="ml-2 md:ml-4 lg:ml-8 xl:ml-12 mt-2 md:mt-0"
                        delay={2600}
                    />
                </div>
            </div>

            {/* Mobile Only Hero Image */}
            <div className="mobile-hero-img md:hidden w-full flex justify-center mt-8 px-0 relative z-20">
                <div className="relative w-full max-w-md px-4">
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
        // Initial setup
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