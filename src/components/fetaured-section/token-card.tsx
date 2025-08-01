'use client';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  Avatar,
  LinearProgress,
  Tooltip,
  useTheme,
  IconButton,
  Chip,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface TokenCardProps {
  name: string;
  symbol: string;
  logo: string;
  marketCap: number;
  ca: string;
  updated: string;
}

const TokenCard: React.FC<TokenCardProps> = ({
  name,
  symbol,
  logo,
  marketCap,
  ca,
  updated,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const capColor = isDarkMode
    ? theme.palette.primary.main
    : theme.palette.secondary.main;

  return (
    <Card
      variant='outlined'
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 4,
        p: 3,
        pt: 4.5,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition:
          'transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: `0 12px 24px ${capColor}`,
          border: `1px solid ${capColor}`,
        },
        zIndex: 0,
      }}>
      {/* Floating Avatar */}
      <Avatar
        src={logo}
        alt={name}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          width: {
            xs: '25%',
            sm: '28%',
            md: '27%',
          },
          height: {
            xs: '55%',
            sm: '57%',
            md: '58%',
          },
          borderRadius: 2,
          boxShadow: theme.shadows[2],
          border: `2px solid ${
            isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
          }`,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Name & Symbol */}
      <Box mb={2} sx={{ textAlign: 'left' }}>
        <Typography
          variant='h5' // Changed from h6 to h5
          fontWeight={700}
          noWrap
          sx={{ display: 'block' }}>
          {name}
        </Typography>
        <Chip
          label={symbol}
          size='medium' // Changed from small to medium
          sx={{
            bgcolor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            color: 'text.secondary',
            height: 28, // Increased from 24
            fontSize: '0.875rem', // Increased from 0.75rem
            mt: 0.5,
          }}
        />
      </Box>

      {/* Contract Address */}
      <Box display='flex' alignItems='center' mb={3}>
        <Typography variant='body2' color='text.secondary' mr={1}>
          {'CA: '}
        </Typography>
        <Typography
          variant='body2' // Changed from caption to body2
          fontWeight={600}
          sx={{ fontFamily: 'monospace', mr: 1 }}>
          {ca?.slice(0, 6)}...{ca?.slice(-4)}
        </Typography>
        <Tooltip title='Copy Address'>
          <IconButton size='small' sx={{ p: 0.5 }}>
            <ContentCopyIcon sx={{ fontSize: 18 }} /> {/* Increased from 16 */}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Market Cap */}
      <Box mb={2}>
        <Box display='flex' alignItems='center' mb={0.5}>
          <TrendingUpIcon fontSize='medium' sx={{ color: capColor, mr: 1 }} />{' '}
          <Typography variant='body1' sx={{ color: capColor }}>
            {' '}
            MarketCap : ${marketCap.toLocaleString()}
          </Typography>
        </Box>
        <LinearProgress
          variant='determinate'
          value={Math.min((marketCap / 60000) * 100, 100)}
          sx={{
            height: 10, // Increased from 8
            width: '100%',
            borderRadius: 4,
            backgroundColor: isDarkMode
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,0.05)',
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              backgroundColor: capColor,
            },
          }}
        />
      </Box>

      {/* Footer Info */}
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mt='auto'>
        <Typography variant='body2' color='text.secondary'>
          {' '}
          {updated} ago
        </Typography>
        <Box
          sx={{
            bgcolor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
          }}>
          <Typography variant='body2' fontWeight={500}>
            {' '}
            {/* Changed from caption to body2 */}
            {Math.floor((marketCap / 60000) * 100)}%
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TokenCard;
