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
  const isBuy = mode === 'buy';

  const handleModeChange = (
    _: React.MouseEvent<HTMLElement>,
    newMode: 'buy' | 'sell'
  ) => {
    if (newMode !== null) setMode(newMode);
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: `1px solid ${
          isBuy ? theme.palette.primary.main : theme.palette.secondary.main
        }`,
        backgroundColor: theme.palette.background.paper,
        p: 3,
        width: { xs: '100%', sm: 360 },
        boxShadow: theme.shadows[2],
      }}>
      {/* Market Cap Progress */}
      <Box mb={2}>
        <Typography variant='body2' fontWeight={600} color='text.primary'>
          Market Cap Progress:{' '}
          <Typography
            component='span'
            color={isBuy ? 'primary.main' : 'secondary.main'}>
            7.15%
          </Typography>
        </Typography>
        <Box
          sx={{
            height: 6,
            backgroundColor: theme.palette.divider,
            borderRadius: 3,
            mt: 1,
            position: 'relative',
          }}>
          <Box
            sx={{
              width: '7.15%',
              backgroundColor: isBuy
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
              height: '100%',
              borderRadius: 3,
            }}
          />
        </Box>
        <Stack direction='row' justifyContent='space-between' mt={1}>
          <Typography variant='caption' color='text.secondary'>
            Current: $9,293.48
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            Target: $69,007.40
          </Typography>
        </Stack>
      </Box>

      {/* Toggle Buttons */}
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        fullWidth
        sx={{ mb: 3 }}>
        <ToggleButton
          value='buy'
          sx={{
            fontWeight: 700,
            color: isBuy
              ? theme.palette.primary.contrastText
              : theme.palette.text.primary,
            backgroundColor: isBuy ? theme.palette.primary.main : 'transparent',
            '&:hover': {
              backgroundColor: isBuy
                ? theme.palette.primary.dark
                : theme.palette.action.hover,
            },
            py: 1.5,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}>
          Buy
        </ToggleButton>
        <ToggleButton
          value='sell'
          sx={{
            fontWeight: 700,
            color: !isBuy
              ? theme.palette.secondary.contrastText
              : theme.palette.text.primary,
            backgroundColor: !isBuy
              ? theme.palette.secondary.main
              : 'transparent',
            '&:hover': {
              backgroundColor: !isBuy
                ? theme.palette.secondary.dark
                : theme.palette.action.hover,
            },
            py: 1.5,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
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
            '& fieldset': {
              borderColor: isBuy
                ? theme.palette.primary.light
                : theme.palette.secondary.light,
            },
            '&:hover fieldset': {
              borderColor: isBuy
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            },
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
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
                color: isBuy
                  ? theme.palette.primary.contrastText
                  : theme.palette.secondary.contrastText,
                fontWeight: 600,
              }}
            />
          ),
        }}
        sx={{
          mb: 0.5,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.divider,
            },
          },
        }}
      />

      <Typography variant='caption' color='text.secondary'>
        ≈ 0 {isBuy ? 'Nutter' : 'SOL'}
      </Typography>

      {/* Balance */}
      <Typography
        variant='body2'
        color={isBuy ? 'primary.main' : 'secondary.main'}
        fontWeight={600}
        mt={1.5}
        mb={1}>
        Balance: {isBuy ? '0.00000 SOL' : '0 Nutter'}
      </Typography>

      {/* Half / Max */}
      <Stack direction='row' spacing={1} mt={1} mb={2}>
        <Button
          size='small'
          variant='outlined'
          sx={{
            color: isBuy
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
            borderColor: isBuy
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
            '&:hover': {
              borderColor: isBuy
                ? theme.palette.primary.dark
                : theme.palette.secondary.dark,
            },
            flex: 1,
            py: 0.5,
          }}>
          Half
        </Button>
        <Button
          size='small'
          variant='outlined'
          sx={{
            color: isBuy
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
            borderColor: isBuy
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
            '&:hover': {
              borderColor: isBuy
                ? theme.palette.primary.dark
                : theme.palette.secondary.dark,
            },
            flex: 1,
            py: 0.5,
          }}>
          Max
        </Button>
      </Stack>

      {/* Action Button */}
      <Button
        variant='contained'
        fullWidth
        disabled
        sx={{
          mt: 1,
          py: 1.5,
          fontWeight: 700,
          backgroundColor: theme.palette.action.disabledBackground,
          color: theme.palette.text.disabled,
          '&:hover': {
            backgroundColor: theme.palette.action.disabled,
          },
        }}>
        {isBuy ? 'Buy Nutter' : 'Sell Nutter'}
      </Button>
    </Box>
  );
}
