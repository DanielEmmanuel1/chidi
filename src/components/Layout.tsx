import type { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import CookieConsent from './CookieConsent';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>0xChidi — Web3 Business Developer & Marketer</title>
                <meta name="description" content="Web3 Business Developer & Marketer focused on partnerships, GTM strategy, and community growth for the Avalanche ecosystem." />
            </Helmet>
            <CustomCursor />
            <CookieConsent />
            <Preloader />
            <Header />
            <main className="bg-near-black min-h-screen text-off-white overflow-visible">
                {children}
            </main>
        </HelmetProvider>
    );
}
