// src/app/page.tsx
'use client';

import { Container } from '@mui/material';
import Hero from '@/components/hero-section';
import FeaturedTokens from '@/components/fetaured-section/featured-tokens';

export default function Home() {
  return (
    <Container>
      <Hero />
      <FeaturedTokens />
    </Container>
  );
}
