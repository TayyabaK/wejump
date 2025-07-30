'use client';

import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TokenCarousel from './token-carousel';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        py: { xs: 4, sm: 6, md: 8 },
        mt: { xs: 2, md: 0.25 },
        borderBottomLeftRadius: { xs: 24, md: 40 },
        borderBottomRightRadius: { xs: 24, md: 40 },
        background: 'linear-gradient(135deg, #FDEA2E, #F40968)',
        zIndex: 0,
      }}
    >
      {/* Optional animated background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/icons/wejump-bg.png')",
          backgroundRepeat: 'repeat',
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      <Container
        maxWidth='xl'
        sx={{
          width: '100%',
          px: { xs: 2, sm: 4, md: 6 },
          mx: 'auto',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src='/icons/wejump.png'
            alt='WeJump Logo'
            width={120}
            height={120}
            style={{
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              margin: '0 auto',
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
            }}
          >
            Welcome to WeJump
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
            }}
          >
            A bold leap into the memeverse. Discover tokens, vote, launch and
            vibe with the community.
          </Typography>
        </motion.div>

        {/* Token Carousel */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            mt: { xs: 3, md: 4 },
          }}
        >
          <TokenCarousel />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
