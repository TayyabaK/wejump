'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import TokenCard from './token-card';

interface TokenData {
  name: string;
  symbol: string;
  logo: string;
  marketCap: string;
  contract: string;
  time: string;
  progress: number; // 0 to 100
}

const mockTokens: TokenData[] = [
  {
    name: 'PJ',
    symbol: 'PJ',
    logo: '/sample/token-1.webp',
    marketCap: '$28',
    contract: '9ju5...bonk',
    time: '1m ago',
    progress: 5,
  },
  {
    name: 'Stick',
    symbol: 'STK',
    logo: '/sample/token-2.webp',
    marketCap: '$15.1K',
    contract: 'CJED...bonk',
    time: '21m ago',
    progress: 35,
  },
  {
    name: 'USD',
    symbol: 'USD',
    logo: '/sample/token-3.jpeg',
    marketCap: '$51.9K',
    contract: '7WXA...bonk',
    time: '54m ago',
    progress: 80,
  },
  {
    name: 'TitTok',
    symbol: 'TTK',
    logo: '/sample/token-4.webp',
    marketCap: '$14.9K',
    contract: '9v4a...bonk',
    time: '3m ago',
    progress: 30,
  },
  {
    name: 'SUS',
    symbol: 'SUS',
    logo: '/sample/token-5.webp',
    marketCap: '$39K',
    contract: 'B13G...bonk',
    time: '14m ago',
    progress: 65,
  },
  {
    name: 'usb',
    symbol: 'USB',
    logo: '/sample/token-6.webp',
    marketCap: '$9.8K',
    contract: 'bjU9...bonk',
    time: '7m ago',
    progress: 20,
  },
];

const FeaturedTokens = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Typography variant='h4' fontWeight='bold' mb={1}>
        Featured Coins
      </Typography>
      <Typography variant='subtitle1' color='text.secondary' mb={4}>
        The hottest tokens everyone&apos;s watching right now.
      </Typography>

      <Grid container spacing={3}>
        {mockTokens.map((token, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TokenCard token={token} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedTokens;