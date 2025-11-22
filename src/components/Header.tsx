import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Team1', href: '#team1' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleMenuClick = (href: string) => {
        setMenuOpen(false);
        setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-near-black/80 backdrop-blur-xl border-b ${scrolled ? 'border-white/20' : 'border-white/5'} py-6`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <a href="/" className="text-2xl font-serif font-bold text-white hover:text-gold transition-colors duration-300 relative z-50">
                        0xChidi
                    </a>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="relative z-50 flex flex-col items-center justify-center gap-1.5 group" aria-label="Toggle menu">
                        <span className="text-xs uppercase tracking-wider text-white/70 group-hover:text-gold transition-colors mb-1 font-display">
                            {menuOpen ? 'Close' : 'Menu'}
                        </span>
                        <div className="flex flex-col gap-1.5">
                            <span className={`w-8 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-8 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-8 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-40">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gradient-to-br from-near-black via-charcoal to-near-black" />
                        <div className="relative h-full flex flex-col justify-center items-center px-6">
                            <nav className="flex flex-col items-center gap-6 mb-16">
                                {menuItems.map((item, index) => (
                                    <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: index * 0.1, duration: 0.4 }}>
                                        <button onClick={() => handleMenuClick(item.href)} className="text-6xl md:text-7xl lg:text-8xl font-serif text-white hover:text-gold transition-colors duration-300">
                                            {item.name}
                                        </button>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
