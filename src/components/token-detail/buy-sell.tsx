'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
  Button,
  Chip,
  useTheme,
  Divider,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const BuySellBox = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [tab, setTab] = useState<'buy' | 'sell'>('buy');
  const [slippage, setSlippage] = useState('5');
  const [amount, setAmount] = useState('0');

  const currentCap = 5194.99;
  const targetCap = 74548.24;
  const progress = (currentCap / targetCap) * 100;

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
        p: 2,
        bgcolor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}>
      {/* Market Cap Progress */}
      <Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='body2' fontWeight={600}>
            Market Cap Progress:
          </Typography>
          <Typography
            variant='body2'
            fontWeight={600}
            color={theme.palette.primary.dark}>
            {progress.toFixed(2)}%
          </Typography>
        </Box>
        <LinearProgress
          variant='determinate'
          value={progress}
          sx={{
            mt: 0.5,
            height: 8,
            borderRadius: 4,
            backgroundColor: isDark ? '#3c3c3c' : '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: theme.palette.primary.main,
              borderRadius: 4,
            },
          }}
        />
        <Box
          display='flex'
          justifyContent='space-between'
          mt={0.5}
          fontSize='0.85rem'
          color='text.secondary'>
          <Typography variant='caption'>
            Current: ${currentCap.toLocaleString()}
          </Typography>
          <Typography variant='caption'>
            Target: ${targetCap.toLocaleString()}
          </Typography>
        </Box>
      </Box>

      {/* Buy/Sell Toggle */}
      <ToggleButtonGroup
        value={tab}
        exclusive
        onChange={(e, newTab) => newTab && setTab(newTab)}
        fullWidth
        sx={{
          mt: 1,
          '& .MuiToggleButton-root': {
            flex: 1,
            fontWeight: 'bold',
            fontSize: '1rem',
            border: 'none',
            borderRadius: 1,
            color: theme.palette.text.primary,
            py: 1.2,
            '&.Mui-selected': {
              color: 'black',
              backgroundColor:
                tab === 'buy'
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
              '&:hover': {
                backgroundColor:
                  tab === 'buy'
                    ? theme.palette.primary.dark
                    : theme.palette.secondary.dark,
              },
            },
          },
        }}>
        <ToggleButton value='buy'>Buy</ToggleButton>
        <ToggleButton value='sell'>Sell</ToggleButton>
      </ToggleButtonGroup>

      {/* Slippage Field */}
      <TextField
        label='Slippage (%)'
        variant='outlined'
        value={slippage}
        onChange={(e) => setSlippage(e.target.value)}
        fullWidth
        InputProps={{
          sx: {
            borderRadius: 1.5,
          },
        }}
      />

      {/* Amount Field */}
      <TextField
        label='Amount'
        variant='outlined'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position='end'>SOL</InputAdornment>,
          sx: {
            borderRadius: 1.5,
          },
        }}
      />

      <Typography variant='caption' color='text.secondary'>
        ≈ 0 SOLANA
      </Typography>

      <Box display='flex' alignItems='center' gap={1}>
        <AttachMoneyIcon fontSize='small' color='success' />
        <Typography variant='body2' fontWeight={500}>
          0.00000 SOL
        </Typography>
      </Box>

      <Box display='flex' gap={1}>
        <Chip label='Half' size='small' color='primary' variant='outlined' />
        <Chip label='Max' size='small' color='primary' variant='outlined' />
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Connect Wallet Button */}
      <Button
        variant='contained'
        fullWidth
        sx={{
          bgcolor: '#BDBDBD',
          color: '#fff',
          fontWeight: 'bold',
          textTransform: 'none',
          py: 1.2,
          borderRadius: 2,
          '&:hover': {
            bgcolor: '#9e9e9e',
          },
        }}
        disabled>
        Connect Your Wallet
      </Button>
    </Box>
  );
};

export default BuySellBox;
