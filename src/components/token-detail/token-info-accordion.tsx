'use client';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useThemeMode } from '@/theme/theme-context';

type TokenInfoAccordionProps = {
  info: Record<string, string | number>;
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
              px={3}
              py={2}
              sx={{
                '&:not(:last-child)': {
                  borderBottom: '1px solid',
                  borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
                },
              }}>
              <Typography variant='body2'>{label}</Typography>
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
