// src/app/page.tsx
'use client';

import Hero from '@/components/hero-section';
import FeaturedTokens from '@/components/fetaured-section/featured-tokens';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTokens />
    </>
  );
}
