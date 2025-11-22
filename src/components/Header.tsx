import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/IMG_1156.jpeg';
import aboutImage from '../assets/IMG_2562.JPG';
import servicesImage from '../assets/IMG_5210.JPG';
import workImage from '../assets/IMG_8170.JPG';
import contactImage from '../assets/IMG_2566.JPG';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const menuItems = [
        { name: 'About', href: '#about', image: aboutImage },
        { name: 'Services', href: '#services', image: servicesImage },
        { name: 'Work', href: '#work', image: workImage },
        { name: 'Team', href: '#team1', image: heroImage },
        { name: 'Contact', href: '#contact', image: contactImage }
    ];

    const handleMenuClick = (href: string) => {
        setMenuOpen(false);
        setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const currentImage = hoveredItem
        ? menuItems.find(item => item.name === hoveredItem)?.image
        : menuItems[0].image;

    return (
        <>
            {/* Header - Hidden when menu is open */}
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-near-black/80 backdrop-blur-xl border-b ${scrolled ? 'border-white/20' : 'border-white/5'} py-6`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <a href="/" className="text-2xl font-serif font-bold text-white hover:text-gold transition-colors duration-300">
                        0xChidi
                    </a>
                    <button onClick={() => setMenuOpen(true)} className="flex flex-col items-center justify-center gap-1.5 group" aria-label="Open menu">
                        <span className="text-xs uppercase tracking-wider text-white/70 group-hover:text-gold transition-colors mb-1 font-display">
                            Menu
                        </span>
                        <div className="flex flex-col gap-1.5">
                            <span className="w-8 h-[2px] bg-white"></span>
                            <span className="w-8 h-[2px] bg-white"></span>
                            <span className="w-8 h-[2px] bg-white"></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Full-screen menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-50">
                        {/* Close button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="fixed top-6 right-6 lg:right-12 z-50 flex flex-col items-center justify-center gap-1.5 group"
                            aria-label="Close menu"
                        >
                            <span className="text-xs uppercase tracking-wider text-white/70 group-hover:text-gold transition-colors mb-1 font-display">
                                Close
                            </span>
                            <div className="flex flex-col gap-1.5">
                                <span className="w-8 h-[2px] bg-white rotate-45 translate-y-2"></span>
                                <span className="w-8 h-[2px] bg-white opacity-0"></span>
                                <span className="w-8 h-[2px] bg-white -rotate-45 -translate-y-2"></span>
                            </div>
                        </button>

                        <div className="grid lg:grid-cols-2 h-full">
                            {/* Left side - Image gallery with card shuffle */}
                            <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="relative w-full max-w-md aspect-[3/4]">
                                        {/* Background stacked cards - static */}
                                        <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform rotate-6 opacity-30"></div>
                                        <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform rotate-3 opacity-50"></div>

                                        {/* Animated card stack - poker shuffle effect */}
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImage}
                                                initial={{
                                                    scale: 0.8,
                                                    rotate: -15,
                                                    x: -100,
                                                    opacity: 0,
                                                    zIndex: 0
                                                }}
                                                animate={{
                                                    scale: 1,
                                                    rotate: 0,
                                                    x: 0,
                                                    opacity: 1,
                                                    zIndex: 10
                                                }}
                                                exit={{
                                                    scale: 0.9,
                                                    rotate: 8,
                                                    x: 50,
                                                    y: -20,
                                                    opacity: 0.3,
                                                    zIndex: 0
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: [0.43, 0.13, 0.23, 0.96]
                                                }}
                                                className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white"
                                            >
                                                <img
                                                    src={currentImage}
                                                    alt="Portfolio preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Menu items */}
                            <div className="relative bg-near-black flex flex-col justify-center items-start px-12 lg:px-24">
                                <nav className="flex flex-col gap-4">
                                    {menuItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                            onMouseEnter={() => setHoveredItem(item.name)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <button
                                                onClick={() => handleMenuClick(item.href)}
                                                className={`text-4xl md:text-5xl lg:text-6xl font-light text-left transition-all duration-300 ${hoveredItem === item.name ? 'text-gold' : 'text-white'
                                                    }`}
                                            >
                                                {item.name}
                                            </button>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
