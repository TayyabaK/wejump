'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeMode } from '@/theme/theme-context';

const Footer = () => {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';
  return (
    <Box
      component='footer'
      sx={{
        py: 4,
        mt: 6,
        backgroundColor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
        ml: { xs: 0, md: '72px' },
      }}>
      <Container
        maxWidth='xl'
        sx={{
          px: { xs: 2, md: 6 },
        }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}>
          {/* Left side - Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href='/' passHref>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none', // Add this to remove underline
                  '&:hover': {
                    textDecoration: 'none', // Also remove on hover
                  },
                }}>
                <Image
                  src='/icons/wejump.png'
                  alt='WeJump Logo'
                  width={80}
                  height={80}
                  style={{ borderRadius: '50%' }}
                />
                <Typography
                  variant='h6'
                  sx={{
                    ml: 2,
                    fontWeight: 'bold',
                    color: isDarkMode
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                    display: { xs: 'none', sm: 'block' },
                    textDecoration: 'none', // Additional safeguard
                  }}>
                  WeJump
                </Typography>
              </Box>
            </Link>
          </Box>

          {/* Right side - Social Icons */}
          <Box sx={{ display: 'flex' }}>
            <IconButton
              aria-label='Instagram'
              href='https://www.instagram.com/wejump.fun'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'error.main',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}>
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label='X'
              href='https://x.com/wejumpf93898?s=11&t=6dMgLw5r6a4Tf5za_M6aew'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}>
              <XIcon />
            </IconButton>
          </Box>
        </Stack>

        {/* Powered By Text - Centered below */}
        <Typography
          variant='caption'
          color='text.secondary'
          align='center'
          display='block'
          sx={{ mt: 3 }}>
          Powered by{' '}
          <a
            href='https://brdigitech.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <strong>BRDigitech</strong>
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
