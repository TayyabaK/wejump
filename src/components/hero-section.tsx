'use client';

import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TokenCarousel from './token-carousel';
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '@/theme/theme-context';

const Hero = () => {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';

  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
          zIndex: 1,
          overflow: 'hidden',
          borderBottomLeftRadius: { xs: 24, md: 40 },
          borderBottomRightRadius: { xs: 24, md: 40 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        }}>
        {/* Content Box with max-width to match FeaturedTokens */}
        <Box
          sx={{
            textAlign: 'center',
          }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}>
            <Image
              src='/images/wejump.gif'
              alt='WeJump Logo'
              width={140}
              height={140}
              style={{
                borderRadius: '30%',
                margin: '0 auto',
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Typography
              variant='h3'
              component='h1'
              fontWeight={800}
              sx={{
                background: 'linear-gradient(to right, #fff, #fdea2e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                  lg: '3.5rem',
                },
                mt: 2,
                lineHeight: 1.2,
              }}>
              <Box
                sx={{
                  display: 'inline',
                  background: theme.palette.primary.main,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                Welcome to <strong>WeJump</strong>
              </Box>
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <Typography
              variant='subtitle1'
              color='white'
              sx={{
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 500,
                mt: 0.5,
                mb: 1,
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.1rem',
                },
                lineHeight: 1.6,
              }}>
              A bold leap into the memeverse. Discover tokens, buy/sell, vote,
              launch your own and vibe with the community.
            </Typography>
            {/* Create Token Button */}
            <Button
              variant='contained'
              color='secondary'
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                color: theme.palette.secondary.contrastText,
                mb: 1,
                borderRadius: 2,
                width: 200,
                height: 48,
                boxShadow: 'none',
                minWidth: 0,
                px: 2,
                '&:hover': {
                  boxShadow: theme.shadows[2],
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
                mt: 2,
              }}>
              Create a Token
            </Button>
          </motion.div>
          {/* Token Carousel */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              mt: { xs: 3, md: 4 },
            }}>
            <TokenCarousel />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
