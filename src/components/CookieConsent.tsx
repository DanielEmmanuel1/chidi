import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem('cookieConsent');
        if (!hasAccepted) {
            setTimeout(() => setShowBanner(true), 2000);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookieConsent', 'all');
        setShowBanner(false);
        setShowPreferences(false);
    };

    const acceptNecessary = () => {
        localStorage.setItem('cookieConsent', 'necessary');
        setShowBanner(false);
        setShowPreferences(false);
    };

    return (
        <>
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        className="fixed bottom-6 left-6 z-50 max-w-md w-full"
                    >
                        <div className="bg-charcoal/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-start gap-4">
                                <div className="text-2xl">🍪</div>
                                <div className="flex-1">
                                    <h3 className="text-white font-serif text-lg mb-2">We value your privacy</h3>
                                    <p className="text-white/70 text-sm mb-4">
                                        We use cookies to enhance your browsing experience.
                                    </p>
                                    <div className="flex gap-3">
                                        <button onClick={acceptAll} className="px-6 py-2 bg-gold text-near-black rounded-full text-sm font-display hover:bg-gold-light transition-colors duration-300">
                                            Accept All
                                        </button>
                                        <button onClick={acceptNecessary} className="px-6 py-2 bg-white/10 text-white rounded-full text-sm font-display hover:bg-white/20 transition-colors duration-300">
                                            Necessary Only
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showPreferences && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm" onClick={() => setShowPreferences(false)}>
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-charcoal border border-white/10 rounded-2xl p-8 max-w-md w-full">
                            <h2 className="text-2xl font-serif text-white mb-6">Cookie Preferences</h2>
                            <div className="flex gap-3">
                                <button onClick={acceptAll} className="flex-1 px-6 py-3 bg-gold text-near-black rounded-full font-display hover:bg-gold-light transition-colors duration-300">
                                    Accept All
                                </button>
                                <button onClick={acceptNecessary} className="flex-1 px-6 py-3 bg-white/10 text-white rounded-full font-display hover:bg-white/20 transition-colors duration-300">
                                    Save
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
