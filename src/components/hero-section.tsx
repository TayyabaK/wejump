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
        bgcolor: 'linear-gradient(to right, #fdea2e, #f40968)',
        py: { xs: 2, md: 1 },
        mt: 5,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        background: 'linear-gradient(135deg, #FDEA2E, #F40968)',
        zIndex: -1,
      }}>
      {/* Optional animated background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/icons/wejump-bg.png')",
          backgroundRepeat: 'repeat',
          opacity: 0.05,
          zIndex: -1,
        }}
      />

      <Container
        maxWidth='xl'
        sx={{ position: 'relative', zIndex: 0, textAlign: 'center' , mt: 4, mb: 6 }}>
        <Box sx={{ maxWidth: 1440, mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}>
            <Image
              src='/icons/wejump.png'
              alt='WeJump Logo'
              width={120}
              height={120}
              style={{
                borderRadius: '50%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}>
            <Typography
              variant='h3'
              component='h1'
              fontWeight={800}
              mt={1}
              sx={{
                background: 'linear-gradient(to right, #fff, #fdea2e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              Welcome to WeJump
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}>
            <Typography
              variant='subtitle1'
              mt={1}
              color='white'
              sx={{ maxWidth: 500, mx: 'auto', fontWeight: 500 }}>
              A bold leap into the memeverse. Discover tokens, vote, launch and
              vibe with the community.
            </Typography>
          </motion.div>
        </Box>
        {/* Token Carousel */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <TokenCarousel />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
