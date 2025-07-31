'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useTheme,
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
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
      <Toolbar
        sx={{
          py: 2,
          minHeight: '80px !important',
          px: { xs: 2, md: 6 }, // Match the padding with your FeaturedTokens component
        }}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          sx={{
            maxWidth: 'xl', // Match your container maxWidth
            margin: '0 auto', // Center the content
          }}>
          {/* Search bar - aligned with FeaturedTokens left edge */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                width: 300,
                backgroundColor: isDark
                  ? theme.palette.background.paper
                  : theme.palette.background.default,
                borderRadius: '24px',
                color: theme.palette.text.primary,
                border: `1px solid ${
                  isDark
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main
                }`,
                marginLeft: '72px', // Match your sidebar collapsed width
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

          {/* Right Side Controls */}
          <Box display='flex' alignItems='center' gap={1} ml='auto'>
            <IconButton
              onClick={toggleColorMode}
              color='inherit'
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
