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
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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

  const capColor = theme.palette.secondary.main;

  return (
    <Card
      variant='outlined'
      sx={{
        width: 360,
        height: 200, 
        boxShadow: 2,
        bgcolor: 'background.paper',
        borderRadius: 3,
        px: 2,
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'left',
        transition: '0.3s',
        '&:hover': {
          boxShadow: 4,
          transform: 'translateY(-4px)',
        },
      }}>
      {/* Left Side Content */}
      <Box flex={1} pr={2}>
        <Box display='flex' alignItems='center' gap={1}>
          <Typography fontWeight='bold' variant='subtitle1' noWrap>
            {name}
          </Typography>
          <Typography
            variant='caption'
            color='text.secondary'
            sx={{
              bgcolor:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(0,0,0,0.05)',
              px: 1,
              py: 0.5,
              borderRadius: 1,
            }}>
            {symbol}
          </Typography>
        </Box>

        <Box display='flex' alignItems='center' gap={0.5} mt={0.5}>
          <Typography variant='caption' color='text.secondary'>
            CA:
          </Typography>
          <Typography
            variant='caption'
            fontWeight={600}
            sx={{ fontFamily: 'monospace' }}>
            {ca?.slice(0, 4)}...{ca?.slice(-4)}
          </Typography>
          <Tooltip title='Copy Address'>
            <ContentCopyIcon
              sx={{
                fontSize: 14,
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.text.primary,
                },
              }}
            />
          </Tooltip>
        </Box>

        <Typography variant='caption' color='text.secondary' mt={1}>
          Updated {updated} ago
        </Typography>

        <Box mt={2}>
          <Typography
            variant='body2'
            sx={{ color: capColor,
              fontWeight: 300, 
              mb: 0.5,
             }}>
            Market Cap: ${marketCap.toLocaleString()}
          </Typography>
          <LinearProgress
            variant='determinate'
            value={Math.min((marketCap / 60000) * 100, 100)}
            sx={{
              mt: 1,
              borderRadius: 5,
              height: 8,
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(0,0,0,0.05)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: capColor,
              },
            }}
          />
        </Box>
      </Box>

      {/* Right Side Image - Larger */}
      <Avatar
        src={logo}
        alt={name}
        sx={{
          width: 180, // Increased from 72
          height: 180, // Increased from 72
          borderRadius: 2,
          boxShadow: theme.shadows[2],
        }}
        variant='rounded'
      />
    </Card>
  );
};

export default TokenCard;
