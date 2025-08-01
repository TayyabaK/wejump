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
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import { useThemeMode } from '@/theme/theme-context';

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

  return (
    <Box
      display='flex'
      flexDirection={isSmallScreen ? 'column' : 'row'}
      alignItems={isSmallScreen ? 'flex-start' : 'center'}
      justifyContent='space-between'
      flexWrap='wrap'
      gap={isSmallScreen ? 3 : 2}
      p={3}
      borderRadius={2}
      sx={{
        backgroundColor: theme.palette.background.default,
      }}>
      {/* Left: Logo + Name + Creator + Contract */}
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        flexWrap='wrap'
        gap={2}
        width={isSmallScreen ? '100%' : 'auto'}>
        <Avatar
          src={logoUrl}
          alt={name}
          sx={{
            width: 100,
            height: 100,
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
        <Box>
          <Typography
            variant='h5'
            fontWeight={700}
            color={theme.palette.text.primary}
            gutterBottom={isSmallScreen}>
            {name}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' mb={1}>
            Created by:{' '}
            <Box component='span' color='secondary.main'>
              {creator}
            </Box>
          </Typography>
          <Chip
            label={`Contract: ${contract}`}
            size='small'
            sx={{
              mt: 1,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontWeight: 600,
              border: `1px solid ${isDarkMode ? '#ffffff' : '#A9A9A9'}`,
            }}
          />
        </Box>
      </Box>

      {/* Center: Market Cap + Time */}
      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        spacing={1}
        alignItems={isSmallScreen ? 'flex-start' : 'center'}
        width={isSmallScreen ? '100%' : 'auto'}
        mt={isSmallScreen ? 1 : 0}>
        <Chip
          label={`Market Cap: $${marketCap.toLocaleString()}`}
          size={isSmallScreen ? 'medium' : 'small'}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            fontWeight: 700,
          }}
        />
        <Chip
          label={`Created: ${createdAt}`}
          size={isSmallScreen ? 'medium' : 'small'}
          sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: `1px solid ${isDarkMode ? '#ffffff' : '#A9A9A9'}`,
          }}
        />
      </Stack>

      {/* Right: Social Icons */}
      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        justifyContent={isSmallScreen ? 'flex-start' : 'flex-end'}
        width={isSmallScreen ? '100%' : 'auto'}
        mt={isSmallScreen ? 1 : 0}>
        <IconButton
          color={isDarkMode ? 'primary' : 'secondary'}
          href='https://twitter.com'
          target='_blank'
          size={isSmallScreen ? 'medium' : 'small'}>
          <TwitterIcon fontSize={isSmallScreen ? 'medium' : 'small'} />
        </IconButton>
        <IconButton
          color={isDarkMode ? 'primary' : 'secondary'}
          href='https://t.me'
          target='_blank'
          size={isSmallScreen ? 'medium' : 'small'}>
          <TelegramIcon fontSize={isSmallScreen ? 'medium' : 'small'} />
        </IconButton>
        <IconButton
          color={isDarkMode ? 'primary' : 'secondary'}
          href='https://yourwebsite.com'
          target='_blank'
          size={isSmallScreen ? 'medium' : 'small'}>
          <LanguageIcon fontSize={isSmallScreen ? 'medium' : 'small'} />
        </IconButton>
      </Stack>
    </Box>
  );
}
