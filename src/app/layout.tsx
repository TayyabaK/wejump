// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/sidebar';
import { ThemeProvider } from '../theme/theme-context';
import Navbar from '../components/navbar';
import { LanguageProvider } from '@/i18n/language-context';

export const metadata: Metadata = {
  title: 'WeJump – Meme Token Launchpad',
  description: 'Launch your memecoin on Solana in seconds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <Sidebar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
