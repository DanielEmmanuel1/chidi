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
                            <li>
                                <a href="#about" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#work" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://substack.com/@chidiugwu?r=467jfm&utm_medium=io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-gold transition-colors duration-300 text-sm"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider font-display text-white/40 mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li className="text-white/70 text-sm">Business Development</li>
                            <li className="text-white/70 text-sm">Partnership Management</li>
                            <li className="text-white/70 text-sm">Social Media Strategy</li>
                            <li className="text-white/70 text-sm">Community Building</li>
                            <li className="text-white/70 text-sm">Content Creation</li>
                            <li className="text-white/70 text-sm">Product Marketing</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider font-display text-white/40 mb-6">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:chidimj28@gmail.com" className="text-white/70 hover:text-gold transition-colors duration-300 text-sm">
                                    chidimj28@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://calendly.com/chidimj28"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-gold transition-colors duration-300 text-sm"
                                >
                                    Schedule a Call
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            {/* Twitter/X */}
                            <a
                                href="https://x.com/0xchidi?s=21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/50 hover:text-gold transition-colors duration-300"
                                aria-label="Twitter/X"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="http://linkedin.com/in/chidi-ugwu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/50 hover:text-gold transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            {/* Telegram */}
                            <a
                                href="https://t.me/Oxchidi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/50 hover:text-gold transition-colors duration-300"
                                aria-label="Telegram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                            </a>

                            {/* Substack */}
                            <a
                                href="https://substack.com/@chidiugwu?r=467jfm&utm_medium=io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/50 hover:text-gold transition-colors duration-300"
                                aria-label="Substack"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                                </svg>
                            </a>
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
