'use client';

import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Box,
  useTheme,
  useMediaQuery,
  Button,
  InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SearchIcon from '@mui/icons-material/Search';
import { useLanguage } from '@/i18n/language-context';
import { useThemeMode } from '@/theme/theme-context';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();
  const { t } = useLanguage();

  const menuItems = [
    { text: t.revenue, icon: <BarChartIcon /> },
    { text: t.creatorRewards, icon: <CardGiftcardIcon /> },
    { text: t.techLaunch, icon: <SettingsSuggestIcon /> },
    { text: t.leaderboard, icon: <LeaderboardIcon /> },
    { text: t.advanced, icon: <FlashOnIcon /> },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const isDark = mode === 'dark';

  return (
    <>
      {/* Mobile Toggle Button Only (No Branding) */}
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1300,
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
            backdropFilter: 'none',
          },
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRight: 'none',
            borderRadius: '16px',
            mx: 2,
            mt: 4,
            mb: 4,
            height: `calc(100vh - 64px)`,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: theme.shadows[2],
          },
        }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
          {/* Branding - only show on md+ */}
          <Box
            sx={{
              px: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}>
            <Avatar
              src='/icons/wejump.png'
              alt='logo'
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                boxShadow: theme.shadows[1],
              }}
            />
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                color: theme.palette.secondary.main,
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}>
              WeJump
            </Typography>
          </Box>

          <Divider sx={{ my: 2, mx: 2, borderRadius: '2px' }} />

          {/* Launch Button */}
          <Box px={2} pt={2}>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              sx={{
                fontWeight: 'bold',
                color: theme.palette.secondary.contrastText,
                mb: 2,
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: theme.shadows[2],
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
              startIcon={<RocketLaunchIcon />}>
              {t.launchToken}
            </Button>
          </Box>

          {/* Search bar on mobile  only */}
          {isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                mx: 2,
                mt: 1,
                backgroundColor: isDark
                  ? theme.palette.background.paper
                  : theme.palette.background.default,
                  border: `1px solid ${theme.palette.divider}`,
                }}>
              <SearchIcon
                fontSize='small'
                sx={{ mr: 1, color: 'text.secondary' }}
              />
              <InputBase
                placeholder='Search…'
                sx={{ fontSize: 14, minWidth: 120 }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
          )}

          <Divider sx={{ my: 2, mx: 2, borderRadius: '2px' }} />

          {/* Menu Items */}
          <Box sx={{ flex: 1, overflowY: 'auto', px: 1 }}>
            <List>
              {menuItems.map(({ text, icon }) => (
                <ListItem
                  disablePadding
                  key={text}
                  sx={{ borderRadius: '8px' }}>
                  <ListItemButton
                    sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                      borderRadius: '8px',
                      mx: 1,
                    }}>
                    <ListItemIcon
                      sx={{
                        color: isDark
                          ? theme.palette.primary.main
                          : theme.palette.primary.dark,
                        minWidth: '40px',
                      }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ mx: 2, borderRadius: '2px' }} />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
