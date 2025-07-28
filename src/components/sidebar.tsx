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


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();
  const {t} = useLanguage();

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
      {/* Mobile Toggle */}
      {isMobile && (
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            top: 10,
            left: 10,
            zIndex: 1300,
            color: theme.palette.text.primary,
          }}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={open}
        onClose={toggleDrawer}
        BackdropProps={{
          sx: {
            backgroundColor: 'transparent',
            backdropFilter: 'none',
          },
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRight: 'none',
          },
        }}>
        {/* Branding */}
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            src='/icons/wejump.png'
            alt='logo'
            sx={{ width: 80, height: 80, borderRadius: '50%' }}
          />
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>
            WeJump
          </Typography>
        </Box>

        <Divider sx={{ borderColor: theme.palette.divider || '#ccc' }} />

        {/* Menu */}
        <List>
          {menuItems.map(({ text, icon }) => (
            <ListItem disablePadding key={text}>
              <ListItemButton
                sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.background.paper,
                  },
                }}>
                <ListItemIcon
                  sx={{
                    color: isDark
                      ? theme.palette.primary.main
                      : theme.palette.primary.dark,
                  }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ borderColor: theme.palette.divider || '#ccc', my: 2 }} />

        {/* Launch Button */}
        <Box px={2}>
          <Button
            fullWidth
            variant='contained'
            color='secondary'
            sx={{
              fontWeight: 'bold',
              color: theme.palette.secondary.contrastText,
            }}
            startIcon={<RocketLaunchIcon />}>
           {t.launchToken}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
