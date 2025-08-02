'use client';

import {
  Box,
  Typography,
  Chip,
  Avatar,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useThemeMode } from '@/theme/theme-context';
import { themeExtra } from '@/theme/theme-extra';

interface TokenHeaderProps {
  name: string;
  creator: string;
  contract: string;
  marketCap: number;
  createdAt: string;
  logoUrl: string;
}

export default function TokenHeader({
  name,
  creator,
  contract,
  marketCap,
  createdAt,
  logoUrl,
}: TokenHeaderProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';

  const handleCopyContract = () => {
    navigator.clipboard.writeText(contract);
    // You might want to add a toast notification here
  };

  return (
    <Box
      display='flex'
      flexDirection={isSmallScreen ? 'column' : 'row'}
      alignItems={isSmallScreen ? 'center' : 'center'}
      justifyContent='space-between'
      flexWrap='wrap'
      gap={isSmallScreen ? 3 : 2}
      p={3}
      borderRadius={2}
      sx={{
        backgroundColor: isDarkMode
          ? themeExtra.purple.main
          : theme.palette.background.default,
        border: `1px solid ${
          isDarkMode ? themeExtra.purple.light : theme.palette.divider
        }`,
        boxShadow: theme.shadows[2],
        textAlign: isSmallScreen ? 'center' : 'left',
      }}>
      {/* Left: Logo + Name + Creator + Contract */}
      <Box
        display='flex'
        flexDirection={isSmallScreen ? 'column' : 'row'}
        alignItems={isSmallScreen ? 'center' : 'center'}
        flexWrap='wrap'
        gap={2}
        width={isSmallScreen ? '100%' : 'auto'}>
        <Avatar
          src={logoUrl}
          alt={name}
          sx={{
            width: 100,
            height: 100,
            border: `3px solid ${theme.palette.primary.main}`,
            boxShadow: theme.shadows[4],
          }}
        />
        <Box
          display='flex'
          flexDirection='column'
          alignItems={isSmallScreen ? 'center' : 'flex-start'}>
          <Typography
            variant='h4'
            fontWeight={800}
            color={
              isDarkMode ? themeExtra.white.main : theme.palette.text.primary
            }
            gutterBottom
            sx={{
              background: isDarkMode
                ? `linear-gradient(135deg, ${themeExtra.white.main} 0%, ${themeExtra.white.dark} 100%)`
                : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>
            {name}
          </Typography>

          <Typography
            variant='subtitle1'
            color={isDarkMode ? themeExtra.white.shades[300] : 'text.secondary'}
            mb={1}
            textAlign={isSmallScreen ? 'center' : 'left'}>
            Created by:{' '}
            <Box
              component='span'
              color={
                isDarkMode
                  ? theme.palette.primary.light
                  : theme.palette.secondary.main
              }
              fontWeight={600}>
              {creator}
            </Box>
          </Typography>

          <Box display='flex' alignItems='center' gap={1}>
            <Chip
              label={`Contract Address: ${contract.slice(
                0,
                6
              )}...${contract.slice(-4)}`}
              size='small'
              sx={{
                backgroundColor: isDarkMode
                  ? themeExtra.purple.dark
                  : theme.palette.background.paper,
                color: isDarkMode
                  ? themeExtra.white.main
                  : theme.palette.text.primary,
                fontWeight: 600,
                border: `1px solid ${
                  isDarkMode ? themeExtra.purple.light : theme.palette.divider
                }`,
                borderRadius: 1,
              }}
            />
            <Tooltip title='Copy contract address'>
              <IconButton
                size='small'
                onClick={handleCopyContract}
                sx={{
                  color: isDarkMode
                    ? themeExtra.white.shades[300]
                    : theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}>
                <ContentCopyIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>

      {/* Center: Market Cap + Time */}
      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        spacing={1.5}
        alignItems={isSmallScreen ? 'center' : 'center'}
        justifyContent={isSmallScreen ? 'center' : 'center'}
        width={isSmallScreen ? '100%' : 'auto'}
        mt={isSmallScreen ? 1 : 0}>
        <Chip
          label={`Market Cap: $${marketCap.toLocaleString()}`}
          size={isSmallScreen ? 'medium' : 'small'}
          icon={
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: isDarkMode
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
                mr: 0.5,
              }}
            />
          }
          sx={{
            backgroundColor: isDarkMode
              ? themeExtra.purple.dark
              : theme.palette.primary.light,
            color: isDarkMode
              ? themeExtra.white.main
              : theme.palette.primary.contrastText,
            fontWeight: 700,
            px: 1.5,
            py: 1,
          }}
        />
        <Chip
          label={`Created: ${createdAt}`}
          size={isSmallScreen ? 'medium' : 'small'}
          sx={{
            backgroundColor: isDarkMode
              ? themeExtra.purple.light
              : theme.palette.background.paper,
            color: isDarkMode
              ? themeExtra.white.main
              : theme.palette.text.primary,
            border: `1px solid ${
              isDarkMode ? themeExtra.purple.dark : theme.palette.divider
            }`,
            px: 1.5,
            py: 1,
          }}
        />
      </Stack>

      {/* Right: Social Icons */}
      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        justifyContent={isSmallScreen ? 'center' : 'flex-end'}
        width={isSmallScreen ? '100%' : 'auto'}
        mt={isSmallScreen ? 2 : 0}>
        {[
          {
            icon: <TwitterIcon />,
            label: 'Twitter',
            url: 'https://twitter.com',
          },
          { icon: <TelegramIcon />, label: 'Telegram', url: 'https://t.me' },
          {
            icon: <LanguageIcon />,
            label: 'Website',
            url: 'https://yourwebsite.com',
          },
        ].map((social) => (
          <Tooltip key={social.label} title={social.label}>
            <IconButton
              href={social.url}
              target='_blank'
              size={isSmallScreen ? 'medium' : 'small'}
              sx={{
                color: isDarkMode
                  ? themeExtra.white.shades[300]
                  : theme.palette.text.secondary,
                backgroundColor: isDarkMode
                  ? themeExtra.purple.dark
                  : theme.palette.background.paper,
                border: `1px solid ${
                  isDarkMode ? themeExtra.purple.light : theme.palette.divider
                }`,
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: isDarkMode
                    ? themeExtra.purple.main
                    : theme.palette.primary.light,
                },
              }}>
              {social.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
}
