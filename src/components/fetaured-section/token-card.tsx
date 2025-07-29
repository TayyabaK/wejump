// components/TokenCard.tsx
'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, LinearProgress, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface TokenCardProps {
  name: string;
  symbol: string;
  logo: string;
  marketCap: number;
  ca: string;
  updated: string;
}

const TokenCard: React.FC<TokenCardProps> = ({ name, symbol, logo, marketCap, ca, updated }) => {
  const capColor: 'error' | 'warning' | 'primary' =
    marketCap > 50000 ? 'error' : marketCap > 20000 ? 'warning' : 'primary';

  return (
    <Card
      variant='outlined'
      sx={{
        width: 280,
        borderRadius: 4,
        p: 1.5,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 4,
          transform: 'translateY(-4px)',
        },
      }}>
      <Box display='flex' alignItems='center' gap={2}>
        <Avatar
          src={logo}
          alt={name}
          sx={{ width: 56, height: 56, borderRadius: 2 }}
          variant='rounded'
        />
        <Box>
          <Typography fontWeight='bold' variant='subtitle1' noWrap>
            {name}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {updated} ago
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ px: 0.5, pb: '8px!important' }}>
        <Box display='flex' alignItems='center' gap={0.5} mt={0.5}>
          <Typography variant='caption' color='text.secondary'>CA:</Typography>
          <Typography
            variant='caption'
            fontWeight={600}
            sx={{ fontFamily: 'monospace' }}>
            {ca?.slice(0, 4)}...{ca?.slice(-4)}
          </Typography>
          <Tooltip title='Copy Address'>
            <ContentCopyIcon sx={{ fontSize: 14, color: 'text.secondary', cursor: 'pointer' }} />
          </Tooltip>
        </Box>

        <Box mt={1}>
          <Typography
            variant='body2'
            fontWeight='bold'
            sx={{ color: `${capColor}.main` }}>
            Market Cap: ${marketCap?.toLocaleString()}
          </Typography>
          <LinearProgress
            variant='determinate'
            value={Math.min((marketCap / 60000) * 100, 100)}
            color={capColor}
            sx={{ mt: 0.5, borderRadius: 5, height: 6 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TokenCard;
