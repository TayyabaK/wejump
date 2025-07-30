'use client';

import React from 'react';
import { Box, Typography, useTheme, Container } from '@mui/material';
import TokenCard from './token-card';

const mockTokens = [
  {
    name: 'PJ',
    symbol: 'PJ',
    logo: '/sample/token-1.webp',
    marketCap: 28,
    ca: '9ju5...bonk',
    updated: '1m',
  },
  {
    name: 'Stick',
    symbol: 'STK',
    logo: '/sample/token-2.webp',
    marketCap: 15100,
    ca: 'CJED...bonk',
    updated: '21m',
  },
  {
    name: 'USD',
    symbol: 'USD',
    logo: '/sample/token-3.jpeg',
    marketCap: 51900,
    ca: '7WXA...bonk',
    updated: '54m',
  },
  {
    name: 'TitTok',
    symbol: 'TTK',
    logo: '/sample/token-4.webp',
    marketCap: 14900,
    ca: '9v4a...bonk',
    updated: '3m',
  },
  {
    name: 'SUS',
    symbol: 'SUS',
    logo: '/sample/token-5.webp',
    marketCap: 39000,
    ca: 'B13G...bonk',
    updated: '14m',
  },
  {
    name: 'usb',
    symbol: 'USB',
    logo: '/sample/token-6.webp',
    marketCap: 9800,
    ca: 'bjU9...bonk',
    updated: '7m',
  },
];

const FeaturedTokens = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        mt: 4,
        py: 4,
        px: 0,
        backgroundColor: 'background.default',
      }}>
      <Container maxWidth='xl' sx={{ px: { xs: 2, md: 6 } }}>
        <Box
          sx={{
            maxWidth: 1460,
            mx: 'auto',
            textAlign: 'center',
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography variant='h4' fontWeight='bold' mb={1}>
            Featured Coins
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' mb={4}>
            The hottest tokens everyone&apos;s watching right now.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              width: '100%',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(1, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(4, 1fr)',
              },
              justifyItems: 'center',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              gap: 2,
              rowGap: 4, // Additional vertical gap control if needed
            }}>
            {mockTokens.map((token, index) => (
              <TokenCard key={index} {...token} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedTokens;
