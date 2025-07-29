'use client';

import { Box, useMediaQuery, useTheme, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tokens.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (i: number) =>
    ((i % tokens.length) + tokens.length) % tokens.length;

  const baseSize = isMobile ? 160 : 260; // Increased height
  const spacing = isMobile ? 100 : 160;
  const yOffset = isMobile ? 20 : 30;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: baseSize * 1.6, // Adjusted container height
        overflow: 'visible',
        my: 2,
      }}>
      {/* Left Arrow Icon */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 8, sm: 16 },
          zIndex: 4,
          color: theme.palette.primary.main,
        }}>
        <ArrowForwardIosIcon
          sx={{
            transform: 'rotate(180deg)',
            fontSize: isMobile ? 24 : 32,
          }}
        />
      </Box>

      <AnimatePresence>
        {/* Left Stack (-2 position) */}
        {[-2].map((offset) => {
          const i = getIndex(activeIndex + offset);
          const scale = 0.7;
          const zIndex = 1;
          const x = -spacing * 1.8;
          const y = yOffset * 2;
          const opacity = 0.6;

          return (
            <motion.div
              key={`left-${tokens[i].name}`}
              initial={{ opacity: 0, x: x - 100, y }}
              animate={{ opacity, x, y, scale, zIndex }}
              exit={{ opacity: 0, x: x - 100 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                width: baseSize,
                height: baseSize,
                borderRadius: 16,
                background: theme.palette.background.paper,
                boxShadow: theme.shadows[2],
                overflow: 'hidden',
              }}>
              <Box
                sx={{
                  height: baseSize - 80, // Adjusted image container height
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
                }}>
                <Image
                  src={tokens[i].logo}
                  alt={tokens[i].name}
                  width={baseSize - 60}
                  height={baseSize - 60}
                  style={{
                    objectFit: 'contain',
                    borderRadius: 8,
                  }}
                />
              </Box>
              <Box sx={{ p: 1, textAlign: 'center', height: 80 }}>
                <Typography variant='subtitle2' fontWeight={600} noWrap>
                  {tokens[i].name}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  {tokens[i].symbol}
                </Typography>
              </Box>
            </motion.div>
          );
        })}

        {/* Left Card (-1 position) */}
        {[-1].map((offset) => {
          const i = getIndex(activeIndex + offset);
          const scale = 0.85;
          const zIndex = 2;
          const x = -spacing;
          const y = yOffset;
          const opacity = 0.8;

          return (
            <motion.div
              key={`left-${tokens[i].name}`}
              initial={{ opacity: 0, x: x - 100, y }}
              animate={{ opacity, x, y, scale, zIndex }}
              exit={{ opacity: 0, x: x - 100 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                width: baseSize,
                height: baseSize,
                borderRadius: 16,
                background: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                overflow: 'hidden',
              }}>
              <Box
                sx={{
                  height: baseSize - 80,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
                }}>
                <Image
                  src={tokens[i].logo}
                  alt={tokens[i].name}
                  width={baseSize - 60}
                  height={baseSize - 60}
                  style={{
                    objectFit: 'contain',
                    borderRadius: 8,
                  }}
                />
              </Box>
              <Box sx={{ p: 1.5, textAlign: 'center', height: 80 }}>
                <Typography variant='subtitle1' fontWeight={600} noWrap>
                  {tokens[i].name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {tokens[i].symbol}
                </Typography>
              </Box>
            </motion.div>
          );
        })}

        {/* Center Card (0 position) */}
        {[0].map((offset) => {
          const i = getIndex(activeIndex + offset);
          const scale = 1;
          const zIndex = 3;
          const x = 0;
          const y = 0;
          const opacity = 1;

          return (
            <motion.div
              key={`center-${tokens[i].name}`}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity, scale, x, y, zIndex }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                position: 'absolute',
                width: baseSize,
                height: baseSize,
                borderRadius: 16,
                background: theme.palette.background.paper,
                boxShadow: theme.shadows[6],
                overflow: 'hidden',
              }}>
              <Box
                sx={{
                  height: baseSize - 80,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
                }}>
                <Image
                  src={tokens[i].logo}
                  alt={tokens[i].name}
                  width={baseSize - 60}
                  height={baseSize - 60}
                  style={{
                    objectFit: 'contain',
                    borderRadius: 8,
                  }}
                  priority
                />
              </Box>
              <Box sx={{ p: 2, textAlign: 'center', height: 80 }}>
                <Typography variant='h6' fontWeight={700} noWrap>
                  {tokens[i].name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {tokens[i].symbol}
                </Typography>
              </Box>
            </motion.div>
          );
        })}

        {/* Right Card (1 position) */}
        {[1].map((offset) => {
          const i = getIndex(activeIndex + offset);
          const scale = 0.85;
          const zIndex = 2;
          const x = spacing;
          const y = yOffset;
          const opacity = 0.8;

          return (
            <motion.div
              key={`right-${tokens[i].name}`}
              initial={{ opacity: 0, x: x + 100, y }}
              animate={{ opacity, x, y, scale, zIndex }}
              exit={{ opacity: 0, x: x + 100 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                width: baseSize,
                height: baseSize,
                borderRadius: 16,
                background: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                overflow: 'hidden',
              }}>
              <Box
                sx={{
                  height: baseSize - 80,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
                }}>
                <Image
                  src={tokens[i].logo}
                  alt={tokens[i].name}
                  width={baseSize - 60}
                  height={baseSize - 60}
                  style={{
                    objectFit: 'contain',
                    borderRadius: 8,
                  }}
                />
              </Box>
              <Box sx={{ p: 1.5, textAlign: 'center', height: 80 }}>
                <Typography variant='subtitle1' fontWeight={600} noWrap>
                  {tokens[i].name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {tokens[i].symbol}
                </Typography>
              </Box>
            </motion.div>
          );
        })}

        {/* Right Stack (2 position) */}
        {[2].map((offset) => {
          const i = getIndex(activeIndex + offset);
          const scale = 0.7;
          const zIndex = 1;
          const x = spacing * 1.8;
          const y = yOffset * 2;
          const opacity = 0.6;

          return (
            <motion.div
              key={`right-stack-${tokens[i].name}`}
              initial={{ opacity: 0, x: x + 100, y }}
              animate={{ opacity, x, y, scale, zIndex }}
              exit={{ opacity: 0, x: x + 100 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                width: baseSize,
                height: baseSize,
                borderRadius: 16,
                background: theme.palette.background.paper,
                boxShadow: theme.shadows[2],
                overflow: 'hidden',
              }}>
              <Box
                sx={{
                  height: baseSize - 80,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
                }}>
                <Image
                  src={tokens[i].logo}
                  alt={tokens[i].name}
                  width={baseSize - 60}
                  height={baseSize - 60}
                  style={{
                    objectFit: 'contain',
                    borderRadius: 8,
                  }}
                />
              </Box>
              <Box sx={{ p: 1, textAlign: 'center', height: 80 }}>
                <Typography variant='subtitle2' fontWeight={600} noWrap>
                  {tokens[i].name}
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  {tokens[i].symbol}
                </Typography>
              </Box>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Right Colorful Icon */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: 8, sm: 16 },
          zIndex: 4,
          color: theme.palette.secondary.main,
        }}>
        <BoltIcon
          sx={{
            fontSize: isMobile ? 24 : 32,
            animation: 'pulse 1.5s infinite',
            '@keyframes pulse': {
              '0%': { opacity: 0.6, transform: 'scale(1)' },
              '50%': { opacity: 1, transform: 'scale(1.2)' },
              '100%': { opacity: 0.6, transform: 'scale(1)' },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TokenCarousel;