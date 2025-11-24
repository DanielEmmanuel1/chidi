import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';


export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.1,
            easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out for buttery feel
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        let rafId: number;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return <>{children}</>;
}
