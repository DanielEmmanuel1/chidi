import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(logoRef.current, {
            scale: 1.1,
            duration: 0.8,
            repeat: 1,
            yoyo: true,
            ease: "power2.inOut"
        })
            .to(logoRef.current, {
                rotation: 360,
                duration: 1.2,
                ease: "power2.inOut"
            }, "<")
            .to(preloaderRef.current, {
                opacity: 0,
                duration: 0.6,
                delay: 0.3,
                onComplete: () => {
                    if (preloaderRef.current) {
                        preloaderRef.current.style.display = 'none';
                    }
                }
            });
    }, []);

    return (
        <div ref={preloaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-off-white">
            <div ref={logoRef} className="w-20 h-20 bg-near-black rounded-full flex items-center justify-center">
                <span className="text-gold font-serif font-bold text-2xl">0x</span>
            </div>
        </div>
    );
}
