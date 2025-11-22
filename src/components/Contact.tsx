export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-near-black relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-30"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
                <div className="text-center mb-20">
                    <span className="text-sm uppercase tracking-[0.2em] text-gold font-display mb-6 block">
                        Get in Touch
                    </span>
                    <h2 className="font-serif text-heading-xl md:text-display-md text-white mb-8">
                        Let's Build Something <span className="italic text-gold">Remarkable</span>
                    </h2>
                    <p className="text-body-md text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Ready to scale your Web3 project? I'm always open to discussing new opportunities, partnerships, and innovative ideas.
                    </p>
                </div>

                {/* Contact Options */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <a
                        href="mailto:hello@0xchidi.com"
                        className="group p-10 bg-charcoal/50 border border-white/10 rounded-2xl hover:border-gold/50 hover:bg-charcoal transition-all duration-500"
                    >
                        <div className="text-gold mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-300">
                            Email
                        </h3>
                        <p className="text-white/60 text-sm">
                            hello@0xchidi.com
                        </p>
                    </a>

                    <a
                        href="#"
                        className="group p-10 bg-charcoal/50 border border-white/10 rounded-2xl hover:border-gold/50 hover:bg-charcoal transition-all duration-500"
                    >
                        <div className="text-gold mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-300">
                            Schedule a Call
                        </h3>
                        <p className="text-white/60 text-sm">
                            Book a 15-minute intro
                        </p>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-8 pt-12 border-t border-white/10">
                    {[
                        { name: 'Twitter', url: '#' },
                        { name: 'LinkedIn', url: '#' },
                        { name: 'GitHub', url: '#' },
                        { name: 'Telegram', url: '#' }
                    ].map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="text-white/60 hover:text-gold font-display text-sm transition-colors duration-300"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="text-center mt-20 pt-12 border-t border-white/10">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} 0xChidi. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
