import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/sidebar';
import { ThemeProvider } from '../theme/theme-context';
import Navbar from '../components/navbar';
import { LanguageProvider } from '@/i18n/language-context';
import { Box } from '@mui/material';
import Footer from '@/components/footer';
import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'], // ✅ This enables bold/heavy font usage
  variable: '--font-sora',
});

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
      <body className={sora.variable}>
        <LanguageProvider>
          <ThemeProvider>
            {/* Sidebar should be first in DOM but with lower z-index */}
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                zIndex: 200,
              }}>
              <Sidebar />
            </Box>

            {/* Navbar container with higher z-index */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 100, // Higher than sidebar
              }}>
              <Navbar />
            </Box>

            {/* Main content */}
            <Box
              component='main'
              sx={{
                pt: 3,
                mt: { xs: '64px', md: '64px' }, // Match navbar height
                ml: { xs: 0, md: '72px' }, // Match sidebar width
                zIndex: 0, // Between navbar and sidebar
              }}>
              {children}
            </Box>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
