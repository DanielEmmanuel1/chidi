export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-near-black text-white py-20">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6 text-gold">0xChidi</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Web3 Business Developer & Marketer specializing in partnerships, GTM strategy, and community growth for the Avalanche ecosystem.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider font-display text-white/40 mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            {['About', 'Services', 'Work', 'Team1', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/70 hover:text-gold transition-colors duration-300 text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider font-display text-white/40 mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li className="text-white/70 text-sm">Web3 GTM Strategy</li>
                            <li className="text-white/70 text-sm">Partnerships & BD</li>
                            <li className="text-white/70 text-sm">Community Growth</li>
                            <li className="text-white/70 text-sm">Token Economics</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider font-display text-white/40 mb-6">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:hello@0xchidi.com" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    hello@0xchidi.com
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    Schedule a Call
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            {[
                                { name: 'Twitter', url: '#' },
                                { name: 'LinkedIn', url: '#' },
                                { name: 'GitHub', url: '#' },
                                { name: 'Telegram', url: '#' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="text-white/50 hover:text-gold transition-colors duration-300"
                                    aria-label={social.name}
                                >
                                    <span className="text-xs">{social.name.slice(0, 2)}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} 0xChidi. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300 text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300 text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
