'use client';

import React, { useState } from 'react';
import { Box, Button, Paper, useTheme, useMediaQuery } from '@mui/material';
import TokenInfoAccordion from './token-info-accordion';
import ActivityTable from './activity-table';
import TokenHoldersTable from './token-holders-table';
import Replies from './replies';

const coinInfo = {
  Supply: '1,000,000,000',
  Created: '7/30/2025, 11:57:54 PM',
  'Trade fees': '1.25%',
  'Contract Address': '6z2n...bonk',
  'Developer Address': '3SMx...eJrA',
};

const tabOptions = ['Coin Info', 'Replies', 'Activity', 'Top Holders'];

export default function TabsSection() {
  const [selectedTab, setSelectedTab] = useState('Coin Info');
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Custom Tab Buttons */}
      <Paper
        elevation={2}
        sx={{
          borderRadius: 2,
          p: 1,
          mb: 2,
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', sm: 'flex-start' },
          backgroundColor: theme.palette.background.default,
        }}>
        {tabOptions.map((opt) => (
          <Button
            key={opt}
            onClick={() => setSelectedTab(opt)}
            sx={{
              fontWeight: 600,
              fontSize: '0.875rem',
              borderRadius: '16px',
              py: 1.2,
              px: 2,
              textAlign: { xs: 'center', sm: 'left' },
              color:
                selectedTab === opt
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              backgroundColor:
                selectedTab === opt
                  ? theme.palette.primary.main
                  : isDark
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(0,0,0,0.04)',
              '&:hover': {
                backgroundColor:
                  selectedTab === opt
                    ? theme.palette.primary.dark
                    : isDark
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgba(0,0,0,0.07)',
                transform: 'scale(1.03)',
                boxShadow: theme.shadows[1],
              },
              transition: 'all 0.2s ease-in-out',
              textTransform: 'none',
            }}>
            {opt}
          </Button>
        ))}
      </Paper>

      {/* Tab Content */}
      <Box>
        {selectedTab === 'Replies' && <Replies />}
        {selectedTab === 'Coin Info' && <TokenInfoAccordion info={coinInfo} />}
        {selectedTab === 'Activity' && <ActivityTable />}
        {selectedTab === 'Top Holders' && <TokenHoldersTable />}
      </Box>
    </Box>
  );
}
