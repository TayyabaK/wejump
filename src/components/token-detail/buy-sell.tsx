'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  useTheme,
  Chip,
  Stack,
} from '@mui/material';

export default function BuySellWidget() {
  const theme = useTheme();
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');

  const handleModeChange = (
    _: React.MouseEvent<HTMLElement>,
    newMode: 'buy' | 'sell'
  ) => {
    if (newMode !== null) setMode(newMode);
  };

  const isBuy = mode === 'buy';

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: `1px solid ${
          isBuy ? theme.palette.primary.main : theme.palette.secondary.main
        }`,
        backgroundColor: theme.palette.background.paper,
        p: 2,
        width: 360,
      }}>
      {/* Market Cap Progress */}
      <Box mb={2}>
        <Typography variant='body2' fontWeight={600}>
          Market Cap Progress:{' '}
          <Typography component='span' color='primary'>
            7.15%
          </Typography>
        </Typography>
        <Box
          sx={{
            height: 6,
            backgroundColor: '#ccc',
            borderRadius: 3,
            mt: 0.5,
            position: 'relative',
          }}>
          <Box
            sx={{
              width: '7.15%',
              backgroundColor: isBuy ? '#00b0ff' : '#00b0ff',
              height: '100%',
              borderRadius: 3,
            }}
          />
        </Box>
        <Stack direction='row' justifyContent='space-between' mt={0.5}>
          <Typography variant='caption'>Current: $9,293.48</Typography>
          <Typography variant='caption'>Target: $69,007.40</Typography>
        </Stack>
      </Box>

      {/* Toggle Buttons */}
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        fullWidth
        sx={{ mb: 2 }}>
        <ToggleButton
          value='buy'
          sx={{
            fontWeight: 600,
            color: isBuy ? 'white' : undefined,
            backgroundColor: isBuy ? 'green' : undefined,
            ':hover': { backgroundColor: isBuy ? 'green' : undefined },
          }}>
          Buy
        </ToggleButton>
        <ToggleButton
          value='sell'
          sx={{
            fontWeight: 600,
            color: !isBuy ? 'white' : undefined,
            backgroundColor: !isBuy ? theme.palette.error.main : undefined,
            ':hover': {
              backgroundColor: !isBuy ? theme.palette.error.main : undefined,
            },
          }}>
          Sell
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Slippage */}
      <TextField
        label='Slippage (%)'
        type='number'
        fullWidth
        size='small'
        defaultValue={5}
        sx={{
          mb: 2,
          '& .MuiOutlinedInput-root': {
            borderColor: isBuy
              ? theme.palette.success.main
              : theme.palette.error.main,
          },
        }}
      />

      {/* Amount */}
      <TextField
        label='Amount'
        type='number'
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <Chip
              label={isBuy ? 'SOL' : '$Nutter'}
              size='small'
              sx={{
                bgcolor: isBuy
                  ? theme.palette.success.main
                  : theme.palette.error.main,
                color: 'white',
              }}
            />
          ),
        }}
        sx={{ mb: 0.5 }}
      />

      <Typography variant='caption' color='text.secondary'>
        ≈ 0 {isBuy ? 'Pixiu' : 'SOL'}
      </Typography>

      {/* Balance */}
      <Typography
        variant='body2'
        color={isBuy ? theme.palette.success.main : theme.palette.error.main}
        fontWeight={600}
        mt={1}>
        {isBuy ? '0.00000 SOL' : '0 Pixiu'}
      </Typography>

      {/* Half / Max */}
      <Stack direction='row' spacing={1} mt={1}>
        <Chip
          label='Half'
          size='small'
          color={isBuy ? 'primary' : 'secondary'}
          variant='outlined'
        />
        <Chip
          label='Max'
          size='small'
          color={isBuy ? 'primary' : 'secondary'}
          variant='outlined'
        />
      </Stack>

      {/* Enter Amount Button */}
      <Button
        variant='contained'
        fullWidth
        disabled
        sx={{ mt: 2, backgroundColor: '#ccc', color: 'white' }}>
        Enter Amount
      </Button>
    </Box>
  );
}
