'use client';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
  Stack,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccountBalance,
  AttachMoney,
  DateRange,
  Link,
  LockClock,
  Timeline,
  Token,
  Person,
} from '@mui/icons-material';
import { useThemeMode } from '@/theme/theme-context';
import { themeExtra } from '@/theme/theme-extra';

type TokenInfoAccordionProps = {
  info: Record<string, string | number>;
};

const getIconForLabel = (label: string) => {
  switch (true) {
    case /supply/i.test(label) && !/total/i.test(label):
      return <AccountBalance fontSize='small' />;
    case /trade fees/i.test(label):
      return <AttachMoney fontSize='small' />;
    case /created/i.test(label):
      return <DateRange fontSize='small' />;
    case /developer address/i.test(label):
      return <Person fontSize='small' />;
    case /contract address/i.test(label):
      return <Link fontSize='small' />;
    case /locked/i.test(label):
      return <LockClock fontSize='small' />;
    case /total supply/i.test(label):
      return <Token fontSize='small' />;
    case /price change/i.test(label):
      return <Timeline fontSize='small' />;
    default:
      return <Token fontSize='small' />;
  }
};

export default function TokenInfoAccordion({ info }: TokenInfoAccordionProps) {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mt={4} sx={{ width: '100%' }}>
      <Typography
        variant='h6'
        fontWeight={700}
        mb={2}
        sx={{
          fontSize: isSmallScreen ? '1.1rem' : '1.25rem',
        }}>
        Coin Info
      </Typography>

      <Accordion
        defaultExpanded
        elevation={2}
        sx={{
          backgroundColor: isDarkMode
            ? themeExtra.purple.main
            : theme.palette.background.paper,
          border: '1px solid',
          borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
          borderRadius: isSmallScreen ? '12px' : '16px',
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            '& .MuiAccordionSummary-content': {
              fontWeight: 600,
              fontSize: isSmallScreen ? '0.95rem' : '1rem',
            },
            minHeight: isSmallScreen ? '48px' : '56px',
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
              px={isSmallScreen ? 2 : 3}
              py={isSmallScreen ? 1.5 : 2}
              sx={{
                '&:not(:last-child)': {
                  borderBottom: '1px solid',
                  borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
                },
              }}>
              <Stack
                direction='row'
                alignItems='center'
                gap={isSmallScreen ? 1 : 1.5}>
                {getIconForLabel(label)}
                <Typography
                  variant='body2'
                  sx={{
                    fontSize: isSmallScreen ? '0.8rem' : '0.875rem',
                  }}>
                  {label}
                </Typography>
              </Stack>
              <Typography
                variant='body2'
                fontWeight={600}
                sx={{
                  fontSize: isSmallScreen ? '0.8rem' : '0.875rem',
                  textAlign: 'right',
                  wordBreak: 'break-word',
                  maxWidth: isSmallScreen ? '40%' : '50%',
                }}>
                {value}
              </Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
