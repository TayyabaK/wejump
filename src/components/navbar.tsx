'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useTheme,
  Box,
  useMediaQuery,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useThemeMode } from '@/theme/theme-context';
import { useLanguage } from '@/i18n/language-context';
import LanguageSelector from './language-selector';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const Navbar = () => {
  const theme = useTheme();
  const { toggleColorMode, mode } = useThemeMode();
  const { t } = useLanguage();
  const isDark = mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [connected, setConnected] = useState(false);
  const [showWalletAddress, setShowWalletAddress] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleWalletConnection = () => {
    if (connected) {
      setShowWalletAddress(!showWalletAddress);
    } else {
      setConnected(true);
      setShowWalletAddress(true);
    }
  };

  const menuItems = [
    {
      text: t.revenue,
      icon: <BarChartIcon />,
      action: () => router.push('/revenue'),
    },
    {
      text: t.creatorRewards,
      icon: <CardGiftcardIcon />,
      action: () => router.push('/rewards'),
    },
    {
      text: t.techLaunch,
      icon: <SettingsSuggestIcon />,
      action: () => router.push('/tech'),
    },
    {
      text: t.leaderboard,
      icon: <LeaderboardIcon />,
      action: () => router.push('/leaderboard'),
    },
  ];

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
      {isMobile ? (
        <Toolbar sx={{ py: 2, minHeight: '110px !important', px: 2 }}>
          <Stack width='100%' spacing={1.5}>
            {/* Top Row - Centered Logo and Name */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                cursor: 'pointer',
                height: '60px',
              }}
              onClick={() => router.push('/')}>
              <Image
                src='/icons/wejump.png'
                alt='Logo'
                width={70}
                height={70}
                style={{ borderRadius: '50%' }}
              />
              <Typography
                variant='h5'
                sx={{
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  color: isDark
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                }}>
                WeJump
              </Typography>
            </Box>

            {/* Bottom Row - center Aligned Controls */}
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='100%'
              height='50px'>
              <Box display='flex' alignItems='center' gap={1} flexWrap='nowrap'>
                <IconButton
                  onClick={toggleColorMode}
                  size='medium'
                  sx={{
                    color: isDark
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                    p: 1,
                    height: '40px',
                    width: '40px',
                  }}>
                  {isDark ? (
                    <LightModeIcon fontSize='medium' />
                  ) : (
                    <DarkModeIcon fontSize='medium' />
                  )}
                </IconButton>

                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<AccountBalanceWalletIcon fontSize='medium' />}
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.primary.contrastText,
                    textTransform: 'none',
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    minWidth: '120px',
                    height: '40px',
                    whiteSpace: 'nowrap',
                    px: 1.5,
                  }}
                  onClick={toggleWalletConnection}>
                  {connected
                    ? showWalletAddress
                      ? '0x7f...3a4b'
                      : t.connectWallet
                    : t.connectWallet}
                </Button>

                {connected && showWalletAddress && (
                  <IconButton
                    size='medium'
                    color='secondary'
                    sx={{
                      p: 1,
                      height: '40px',
                      width: '40px',
                    }}>
                    <RocketLaunchIcon fontSize='medium' />
                  </IconButton>
                )}

                <IconButton
                  size='medium'
                  sx={{
                    p: 1,
                    height: '40px',
                    width: '40px',
                    color: isDark
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                    border: `1px solid ${
                      isDark
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main
                    }`,
                  }}>
                  <BarChartIcon fontSize='medium' />
                </IconButton>

                <LanguageSelector />

                {/* Menu Button with Text and Dropdown */}
                <Button
                  onClick={handleClick}
                  startIcon={<MenuIcon fontSize='medium' />}
                  sx={{
                    color: isDark
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                    fontSize: '0.85rem',
                    textTransform: 'none',
                    px: 1,
                    minWidth: '80px',
                    height: '40px',
                    whiteSpace: 'nowrap',
                  }}></Button>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      border: `1px solid ${
                        isDark
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main
                      }`,
                      '& .MuiMenuItem-root': {
                        minHeight: 48,
                        padding: '12px 16px',
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.text}
                      onClick={() => {
                        item.action();
                        handleClose();
                      }}>
                      <ListItemIcon sx={{ minWidth: '36px' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{ fontSize: '0.95rem' }}>
                        {item.text}
                      </ListItemText>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Stack>
        </Toolbar>
      ) : (
        <Toolbar sx={{ py: 2, minHeight: '80px !important', px: 6 }}>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'>
            {/* Left side - Logo with text */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
              }}
              onClick={() => router.push('/')}>
              <Image
                src='/icons/wejump.png'
                alt='Logo'
                width={100}
                height={100}
                style={{ borderRadius: '50%' }}
              />
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 700,
                  color: isDark
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                }}>
                WeJump
              </Typography>
            </Box>

            {/* Right Side Controls - Right Aligned */}
            <Box
              display='flex'
              alignItems='center'
              gap={2}
              sx={{
                marginLeft: 'auto',
              }}>
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

              {/* Connect Wallet Button - Toggles between text and address */}
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
                  minWidth: '160px', // Ensure consistent width
                }}
                onClick={toggleWalletConnection}>
                {connected
                  ? showWalletAddress
                    ? '0x7f...3a4b'
                    : t.connectWallet
                  : t.connectWallet}
              </Button>

              {/* Launch Token Button (only shows when connected and showing address) */}
              {connected && showWalletAddress && (
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<RocketLaunchIcon />}
                  sx={{
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 3,
                  }}>
                  {!isMobile ? 'Launch Token' : ''}
                </Button>
              )}

              <Button
                variant='outlined'
                startIcon={!isMobile ? <BarChartIcon /> : undefined}
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                  display: 'flex',
                  alignItems: 'center',
                  color: isDark
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                  border: `1px solid ${
                    isDark
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main
                  }`,
                }}>
                {!isMobile ? 'Advance' : <BarChartIcon />}
              </Button>

              <LanguageSelector />

              {/* Dropdown Menu */}
              <Button
                onClick={handleClick}
                startIcon={<MenuIcon />}
                sx={{
                  color: isDark
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                  fontSize: '1rem',
                  textTransform: 'none',
                  minWidth: '80px',
                  px: 1,
                  fontWeight: 600,
                }}>
                Menu
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={() => {
                      item.action();
                      handleClose();
                    }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Navbar;
