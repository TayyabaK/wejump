import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/sidebar';
import { ThemeProvider } from '../theme/theme-context';
import Navbar from '../components/navbar';
import { LanguageProvider } from '@/i18n/language-context';
import { Box } from '@mui/material';

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
            {/* Sidebar should be first in DOM but with lower z-index */}
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                zIndex: 1, 
              }}>
              <Sidebar />
            </Box>

            {/* Navbar container with higher z-index */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 0, // Higher than sidebar
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
                zIndex: -1, // Between navbar and sidebar
              }}>
              {children}
            </Box>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
