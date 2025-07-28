// src/app/page.tsx
'use client';

import { Button, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth='md' sx={{ mt: 10 }}>
      <Typography variant='h3' gutterBottom>
        Welcome to WeJump 🚀
      </Typography>
      <Typography variant='body1'>
        Launch your Solana meme token instantly with fair bonding curve pricing.
      </Typography>
      <Button variant='contained' color='primary' sx={{ mt: 3 }}>
        Launch Token
      </Button>
    </Container>
  );
}
