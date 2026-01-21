export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-white relative overflow-hidden">
            {/* Background gradient - subtle gold */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
                <div className="text-center mb-20">
                    <span className="text-sm uppercase tracking-[0.2em] text-gold font-display mb-6 block">
                        Get in Touch
                    </span>
                    <h2 className="font-serif text-heading-xl md:text-display-md text-near-black mb-8">
                        Let's Build Something <span className="italic text-gold">Remarkable</span>
                    </h2>
                    <p className="text-body-md text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
                        Ready to scale your Web3 project? I'm always open to discussing new opportunities, partnerships, and innovative ideas.
                    </p>
                </div>

                {/* Contact Options */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <a
                        href="mailto:chidimj28@gmail.com"
                        className="group p-10 bg-warm-gray border border-charcoal/10 rounded-2xl hover:border-gold/50 hover:bg-gold/5 transition-all duration-500"
                    >
                        <div className="text-gold mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-near-black mb-2 group-hover:text-gold transition-colors duration-300">
                            Email
                        </h3>
                        <p className="text-charcoal/60 text-sm">
                            chidimj28@gmail.com
                        </p>
                    </a>

                    <a
                        href="https://calendly.com/chidimj28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-10 bg-warm-gray border border-charcoal/10 rounded-2xl hover:border-gold/50 hover:bg-gold/5 transition-all duration-500"
                    >
                        <div className="text-gold mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif text-near-black mb-2 group-hover:text-gold transition-colors duration-300">
                            Schedule a Call
                        </h3>
                        <p className="text-charcoal/60 text-sm">
                            Book a 15-minute intro
                        </p>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 pt-12 border-t border-charcoal/10">
                    {/* Twitter/X */}
                    <a
                        href="https://x.com/0xchidi?s=21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-full border border-charcoal/10 hover:border-gold hover:bg-gold/5 transition-all duration-300"
                        aria-label="Twitter/X"
                    >
                        <svg className="w-5 h-5 text-charcoal/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="http://linkedin.com/in/chidi-ugwu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-full border border-charcoal/10 hover:border-gold hover:bg-gold/5 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-5 h-5 text-charcoal/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>

                    {/* Telegram */}
                    <a
                        href="https://t.me/Oxchidi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-full border border-charcoal/10 hover:border-gold hover:bg-gold/5 transition-all duration-300"
                        aria-label="Telegram"
                    >
                        <svg className="w-5 h-5 text-charcoal/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                    </a>

                    {/* Substack */}
                    <a
                        href="https://substack.com/@chidiugwu?r=467jfm&utm_medium=io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-full border border-charcoal/10 hover:border-gold hover:bg-gold/5 transition-all duration-300"
                        aria-label="Substack"
                    >
                        <svg className="w-5 h-5 text-charcoal/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
