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
  Box,
  InputBase,
  useMediaQuery,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useThemeMode } from '@/theme/theme-context';
import { useLanguage } from '@/i18n/language-context';
import LanguageSelector from './language-selector';

const Navbar = () => {
  const theme = useTheme();
  const { toggleColorMode, mode } = useThemeMode();
  const { t } = useLanguage();
  const isDark = mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pl: { xs: 2, md: 4 },
          pr: 2,
          pb: 6,
          pt: 5,
          mb: 2,
          minHeight: '64px !important',
        }}>
        {/* Left: Company Logo + Name + (optional search) */}
        <Stack direction='row' alignItems='center' spacing={2}>
          {/* Always show logo and name */}
          <Box display='flex' alignItems='center' gap={1}>
            <Image
              src='/icons/wejump.png'
              alt='WeJump Logo'
              height={40}
              width={40}
              style={{
                objectFit: 'contain',
                borderRadius: '50%',
              }}
            />
            <Typography
              variant='h6'
              component='h1'
              sx={{
                fontWeight: 700,
                color: theme.palette.secondary.main,
              }}>
              WeJump
            </Typography>
          </Box>

          {/* Search on md+ */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                ml: 10,
                backgroundColor: isDark
                  ? theme.palette.background.paper
                  : theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
                color: theme.palette.text.primary,
              }}>
              <SearchIcon
                fontSize='small'
                sx={{ mr: 1, color: 'text.secondary' }}
              />
              <InputBase
                placeholder='Search Tokens'
                sx={{ fontSize: 14, minWidth: 120 }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
          )}
        </Stack>

        {/* Right: Theme toggle, Language selector, Wallet button */}
        <Box display='flex' alignItems='center' gap={1}>
          <IconButton
            onClick={toggleColorMode}
            color='inherit'
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            sx={{
              color: isDark
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            }}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <LanguageSelector />

          <Button
            variant='contained'
            color='primary'
            startIcon={<AccountBalanceWalletIcon />}
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.contrastText,
              textTransform: 'none',
              px: 3,
              borderRadius: 2,
            }}
            onClick={() => alert('Connect Wallet logic goes here')}>
            {isMobile ? '' : t.connectWallet}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
