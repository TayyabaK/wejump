'use client';

import React from 'react';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
  Stack,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useThemeMode } from '@/theme/theme-context';
import { useLanguage } from '@/i18n/language-context';
import LanguageSelector from './language-selector';

const Navbar = () => {
  const theme = useTheme();
  const { toggleColorMode, mode } = useThemeMode();
  const { t } = useLanguage();
  const isDark = mode === 'dark';

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Left side: Logo/Brand */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Image
            src="/icons/wejump.png"
            alt="WeJump Logo"
            height={40}
            width={40}
            style={{
              objectFit: 'contain',
              borderRadius: '50%',
            }}
          />
          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontWeight: 700,
              color: theme.palette.secondary.main,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            WeJump
          </Typography>
        </Stack>

        {/* Right side: Controls */}
        <Stack direction="row" alignItems="center" spacing={1}>
          {/* Theme Toggle */}
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            sx={{
              color: isDark
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            }}
          >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Language Selector */}
          <LanguageSelector />

          {/* Wallet Button */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AccountBalanceWalletIcon />}
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.contrastText,
              textTransform: 'none',
              px: 3,
              borderRadius: 2,
            }}
            onClick={() => alert('Connect Wallet logic goes here')}
          >
            {t.connectWallet}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;