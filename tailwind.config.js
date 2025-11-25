/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#000000',
                'near-black': '#0A0A0A',
                charcoal: '#1A1A1A',
                'dark-gray': '#2A2A2A',
                white: '#FFFFFF',
                'off-white': '#FAFAF9',
                'warm-gray': '#F5F5F4',
                gold: '#B8956A',
                'gold-light': '#D4C5A9',
                'gold-dark': '#8B7355',
                // New vibrant accent colors
                'accent-blue': '#3B82F6',
                'accent-purple': '#8B5CF6',
                'accent-cyan': '#06B6D4',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'display-xl': ['120px', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
                'display-lg': ['96px', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-md': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'heading-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
                'heading-lg': ['52px', { lineHeight: '1.15' }],
                'heading-md': ['40px', { lineHeight: '1.2' }],
                'body-xl': ['24px', { lineHeight: '1.6' }],
                'body-lg': ['20px', { lineHeight: '1.7' }],
                'body-md': ['18px', { lineHeight: '1.6' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                'laptop-lg': '1440px',
                xxl: '1600px',
                ultrawide: '2560px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
