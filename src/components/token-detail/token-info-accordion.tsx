'use client';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccountBalanceWallet,
  AttachMoney,
  Code,
  DateRange,
  Group,
  Link,
  LockClock,
  ShowChart,
  Storage,
  Timeline,
  Token,
  TrendingUp,
} from '@mui/icons-material';
import { useThemeMode } from '@/theme/theme-context';

type TokenInfoAccordionProps = {
  info: Record<string, string | number>;
};

const getIconForLabel = (label: string) => {
  switch (label.toLowerCase()) {
    case 'contract':
      return <Code fontSize='small' />;
    case 'market cap':
      return <AttachMoney fontSize='small' />;
    case 'holders':
      return <Group fontSize='small' />;
    case 'launch date':
      return <DateRange fontSize='small' />;
    case 'liquidity':
      return <AccountBalanceWallet fontSize='small' />;
    case 'volume':
      return <ShowChart fontSize='small' />;
    case 'price':
      return <TrendingUp fontSize='small' />;
    case 'website':
      return <Link fontSize='small' />;
    case 'blockchain':
      return <Storage fontSize='small' />;
    case 'locked':
      return <LockClock fontSize='small' />;
    case 'total supply':
      return <Token fontSize='small' />;
    case 'price change':
      return <Timeline fontSize='small' />;
    default:
      return <Token fontSize='small' />;
  }
};

export default function TokenInfoAccordion({ info }: TokenInfoAccordionProps) {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';

  return (
    <Box mt={4}>
      <Typography variant='h6' fontWeight={700} mb={2}>
        Coin Info
      </Typography>

      <Accordion
        defaultExpanded
        elevation={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: '1px solid',
          borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            '& .MuiAccordionSummary-content': {
              fontWeight: 600,
            },
          }}>
          <Typography>About Coin</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {Object.entries(info).map(([label, value]) => (
            <Box
              key={label}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              px={3}
              py={2}
              sx={{
                '&:not(:last-child)': {
                  borderBottom: '1px solid',
                  borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
                },
              }}>
              <Stack direction='row' alignItems='center' gap={1.5}>
                {getIconForLabel(label)}
                <Typography variant='body2'>{label}</Typography>
              </Stack>
              <Typography variant='body2' fontWeight={600}>
                {value}
              </Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
