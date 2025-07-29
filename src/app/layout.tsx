// src/app/layout.tsx
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
            <Box sx={{ pt: '64px' }}>
              <Navbar />
              <Sidebar />
              <Box
                component='main'
                sx={{
                  flexGrow: 1,
                  p: 3,
                  ml: { md: '280px' }, // Match sidebar width
                }}>
                {children}
              </Box>
            </Box>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
