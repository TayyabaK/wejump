'use client';

import { Box, useMediaQuery, useTheme, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BoltIcon from '@mui/icons-material/Bolt';

const tokens = [
  { name: 'USELESS COIN', symbol: 'USELESS', logo: '/sample/token-1.webp' },
  { name: 'Ani Grok Companion', symbol: 'Ani', logo: '/sample/token-2.webp' },
  { name: 'just memecoin', symbol: 'memecoin', logo: '/sample/token-3.jpeg' },
  { name: 'Doge Killer', symbol: 'LEASH', logo: '/sample/token-4.webp' },
  { name: 'Shiba Inu', symbol: 'SHIB', logo: '/sample/token-5.webp' },
];

const TokenCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => setActiveIndex(prev => (prev + 1) % tokens.length), 1500);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (i: number) => ((i % tokens.length) + tokens.length) % tokens.length;
  const baseSize = isMobile ? 160 : 260;
  const spacing = isMobile ? 100 : 160;
  const yOffset = isMobile ? 20 : 30;

  const cardPositions = [
    { offset: -2, scale: 0.7, zIndex: 1, x: -spacing * 1.8, y: yOffset * 2, opacity: 0.6, variant: 'subtitle2' },
    { offset: -1, scale: 0.85, zIndex: 2, x: -spacing, y: yOffset, opacity: 0.8, variant: 'subtitle1' },
    { offset: 0, scale: 1, zIndex: 3, x: 0, y: 0, opacity: 1, variant: 'h6', transition: { type: 'spring', stiffness: 300, damping: 20 } },
    { offset: 1, scale: 0.85, zIndex: 2, x: spacing, y: yOffset, opacity: 0.8, variant: 'subtitle1' },
    { offset: 2, scale: 0.7, zIndex: 1, x: spacing * 1.8, y: yOffset * 2, opacity: 0.6, variant: 'subtitle2' }
  ];

  interface CardProps {
    offset: number;
    scale: number;
    zIndex: number;
    x: number;
    y: number;
    opacity: number;
    variant: string;
    transition?: object;
  }

  const renderCard = ({
    offset,
    scale,
    zIndex,
    x,
    y,
    opacity,
    variant,
    transition = { duration: 0.5 }
  }: CardProps) => {
    const i = getIndex(activeIndex + offset);
    const isCenter = offset === 0;
    
    return (
      <motion.div
        key={`${offset}-${tokens[i].name}`}
        initial={{ opacity: 0, x: x + (offset < 0 ? -100 : 100), y: isCenter ? 50 : y, scale: isCenter ? 0.9 : 1 }}
        animate={{ opacity, x, y, scale, zIndex }}
        exit={{ opacity: 0, x: x + (offset < 0 ? -100 : 100), scale: isCenter ? 0.9 : 1 }}
        transition={transition}
        style={{
          position: 'absolute',
          width: baseSize,
          height: baseSize,
          borderRadius: 16,
          background: theme.palette.background.paper,
          boxShadow: theme.shadows[isCenter ? 6 : offset % 2 ? 3 : 2],
          overflow: 'hidden',
        }}
      >
        <Box sx={{
          height: baseSize - 80,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
        }}>
          <Image
            src={tokens[i].logo}
            alt={tokens[i].name}
            width={baseSize - 60}
            height={baseSize - 60}
            style={{ objectFit: 'contain', borderRadius: 8 }}
            priority={isCenter}
          />
        </Box>
        <Box sx={{ p: isCenter ? 2 : offset % 2 ? 1.5 : 1, textAlign: 'center', height: 80 }}>
          <Typography variant={variant} fontWeight={600} noWrap>
            {tokens[i].name}
          </Typography>
          <Typography variant={isCenter ? 'body2' : 'caption'} color='text.secondary'>
            {tokens[i].symbol}
          </Typography>
        </Box>
      </motion.div>
    );
  };

  return (
    <Box sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: baseSize * 1.6,
      overflow: 'visible',
      my: 2,
    }}>
      <AnimatePresence>
        {cardPositions.map(renderCard)}
      </AnimatePresence>

      <Box sx={{
        position: 'absolute',
        right: { xs: 8, sm: 16 },
        zIndex: 4,
        color: theme.palette.secondary.main,
      }}>
        <BoltIcon sx={{
          fontSize: isMobile ? 24 : 32,
          animation: 'pulse 1.5s infinite',
          '@keyframes pulse': {
            '0%': { opacity: 0.6, transform: 'scale(1)' },
            '50%': { opacity: 1, transform: 'scale(1.2)' },
            '100%': { opacity: 0.6, transform: 'scale(1)' },
          },
        }} />
      </Box>
    </Box>
  );
};

export default TokenCarousel;