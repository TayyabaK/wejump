'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  InputBase,
  Paper,
  Button,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TokenCard from './token-card';

const mockTokens = [
  {
    name: 'PJ',
    symbol: 'PJ',
    logo: '/sample/token-1.webp',
    marketCap: 28,
    ca: '9ju5...jump',
    updated: '1m',
  },
  {
    name: 'Stick',
    symbol: 'STK',
    logo: '/sample/token-2.webp',
    marketCap: 15100,
    ca: 'CJED...jump',
    updated: '21m',
  },
  {
    name: 'USD',
    symbol: 'USD',
    logo: '/sample/token-3.jpeg',
    marketCap: 51900,
    ca: '7WXA...jump',
    updated: '54m',
  },
  {
    name: 'TitTok',
    symbol: 'TTK',
    logo: '/sample/token-4.webp',
    marketCap: 14900,
    ca: '9v4a...jump',
    updated: '3m',
  },
  {
    name: 'SUS',
    symbol: 'SUS',
    logo: '/sample/token-5.webp',
    marketCap: 39000,
    ca: 'B13G...jump',
    updated: '14m',
  },
  {
    name: 'usb',
    symbol: 'USB',
    logo: '/sample/token-6.webp',
    marketCap: 9800,
    ca: 'bjU9...jump',
    updated: '7m',
  },
];

const filterOptions = [
  'Last Trade',
  'Creation Time',
  'Heating Up',
  'Watchlist',
  'All Tokens',
];

const FeaturedTokens = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState('Last Trade');
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'relative',
        mt: 4,
        py: 4,
        px: 0,
        backgroundColor: 'background.default',
        zIndex: 0,
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
          <Typography variant='subtitle1' color='text.secondary' mb={2}>
            The hottest tokens everyone&apos;s watching right now.
          </Typography>

          {/* Filter Bar */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 4,
              width: '100%',
            }}>
            {/* Search */}
            <Paper
              component='form'
              sx={{
                p: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                width: 250,
                borderRadius: '24px',
                backgroundColor: theme.palette.background.paper,
                boxShadow: 'none',
                border: `1px solid ${isDark ? theme.palette.primary.main : theme.palette.secondary.main}`,
              }}>
              <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
              <InputBase
                placeholder='Search tokens...'
                sx={{ flex: 1, fontSize: '0.9rem' }}
              />
            </Paper>

            {/* Buttons */}
            {filterOptions.map((opt) => (
              <Button
                key={opt}
                onClick={() => setSelected(opt)}
                startIcon={opt === 'All Tokens' ? <SearchIcon /> : null}
                sx={{
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  borderRadius: '16px',
                  px: 2.5,
                  py: 1.2,
                  color:
                    selected === opt
                      ? theme.palette.primary.contrastText
                      : theme.palette.text.primary,
                  backgroundColor:
                    selected === opt
                      ? theme.palette.primary.main
                      : isDark
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(0,0,0,0.04)',
                  '&:hover': {
                    backgroundColor:
                      selected === opt
                        ? theme.palette.primary.dark
                        : isDark
                        ? 'rgba(255,255,255,0.08)'
                        : 'rgba(0,0,0,0.07)',
                    transform: 'scale(1.03)',
                    boxShadow: theme.shadows[1],
                  },
                  transition: 'all 0.2s ease-in-out',
                  textTransform: 'none',
                }}>
                {opt}
              </Button>
            ))}
          </Box>

          {/* Token Grid */}
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
            }}>
            {[...Array(6)]
              .flatMap(() => mockTokens)
              .map((token, index) => (
                <TokenCard key={index} {...token} />
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedTokens;
