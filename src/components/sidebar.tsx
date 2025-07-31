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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { useLanguage } from '@/i18n/language-context';
import { useThemeMode } from '@/theme/theme-context';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();
  const { t } = useLanguage();
  const isDarkMode = mode === 'dark';
  const router = useRouter();

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

  const toggleCollapse = () => {
    if (!isMobile) {
      setCollapsed(!collapsed);
    }
  };

  const isDark = mode === 'dark';
  const drawerWidth = 240;
  const collapsedWidth = 72;
  const currentWidth = isMobile
    ? drawerWidth
    : collapsed
    ? collapsedWidth
    : drawerWidth;
  const shouldShowText = !collapsed || isMobile;

  return (
    <>
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
        open={isMobile ? open : true}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        BackdropProps={{
          onClick: toggleDrawer,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: currentWidth,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRight: 'none',
            borderRadius: isMobile ? '16px' : '0 16px 16px 0',
            mx: isMobile ? 2 : 0,
            mt: isMobile ? 4 : 0,
            mb: isMobile ? 4 : 0,
            height: isMobile ? `calc(100vh - 64px)` : '100vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: theme.shadows[2],
            zIndex: 1,
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
          },
        }}
        onMouseEnter={toggleCollapse}
        onMouseLeave={toggleCollapse}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
          {/* Branding */}
          <Box
            onClick={() => router.push('/')}
            sx={{
              px: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              minHeight: 80,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.85,
              },
            }}>
            <Avatar
              src='/icons/wejump.png'
              alt='logo'
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                boxShadow: theme.shadows[1],
              }}
            />
            {shouldShowText && (
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  color: isDarkMode
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  whiteSpace: 'nowrap',
                }}>
                WeJump
              </Typography>
            )}
          </Box>

          <Divider
            sx={{ my: 1, mx: shouldShowText ? 2 : 1, borderRadius: '2px' }}
          />

          {/* Launch Button */}
          <Box px={shouldShowText ? 2 : 1} pt={1}>
            <Button
              fullWidth={shouldShowText}
              variant='contained'
              color='secondary'
              sx={{
                fontWeight: 'bold',
                color: theme.palette.secondary.contrastText,
                mb: 1,
                borderRadius: 2,
                boxShadow: 'none',
                minWidth: 0,
                px: shouldShowText ? 2 : 1.5,
                '&:hover': {
                  boxShadow: theme.shadows[2],
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}
              startIcon={shouldShowText ? <RocketLaunchIcon /> : null}>
              {shouldShowText ? t.launchToken : <RocketLaunchIcon />}
            </Button>
          </Box>

          <Divider
            sx={{ my: 1, mx: shouldShowText ? 2 : 1, borderRadius: '2px' }}
          />

          {/* Menu Items */}
          <Box sx={{ flex: 1, overflowY: 'auto', px: 0 }}>
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
                      mx: shouldShowText ? 1 : 0.5,
                      px: shouldShowText ? 2 : 1,
                      justifyContent: shouldShowText ? 'flex-start' : 'center',
                    }}>
                    <ListItemIcon
                      sx={{
                        color: isDark
                          ? theme.palette.primary.main
                          : theme.palette.primary.dark,
                        minWidth: 0,
                        mr: shouldShowText ? 2 : 'auto',
                        justifyContent: 'center',
                      }}>
                      {icon}
                    </ListItemIcon>
                    {shouldShowText && (
                      <ListItemText
                        primary={text}
                        sx={{
                          '& .MuiTypography-root': {
                            fontWeight: 'medium',
                          },
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ mx: shouldShowText ? 2 : 1, borderRadius: '2px' }} />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
