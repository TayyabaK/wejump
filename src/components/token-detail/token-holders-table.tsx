'use client';

import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Chip,
  Link,
  useTheme,
} from '@mui/material';
import { useThemeMode } from '@/theme/theme-context';
import { themeExtra } from '@/theme/theme-extra';

const holdersData = [
  { rank: 1, holder: '9A72...PUVQ', percent: 28.82 },
  { rank: 2, holder: 'D6sZ...PiXw', percent: 8.11 },
  { rank: 3, holder: 'FR37...CFDB', percent: 4.84 },
  { rank: 4, holder: '3VBP...VNiJ', percent: 2.35 },
  { rank: 5, holder: 'ALvU...ZgmS', percent: 2.32 },
  { rank: 6, holder: '2hyQ...4K4T', percent: 2.15 },
  { rank: 7, holder: 'BM5x...qXqq', percent: 1.61 },
  { rank: 8, holder: 'HnnT...kFAg', percent: 1.43 },
  { rank: 9, holder: '3DU5...UmTK', percent: 1.35 },
  { rank: 10, holder: 'DMx6...Yhfq', percent: 1.24 },
];

export default function TokenHoldersTable() {
  const { mode } = useThemeMode();
  const theme = useTheme();
  const isDarkMode = mode === 'dark';

  return (
    <Box mt={4}>
      <Typography variant='h6' fontWeight={700} mb={2}>
        Top Token Holders
      </Typography>

      <TableContainer component={Paper} elevation={2}>
        <Table size='small' sx={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '33%' }} />
            <col style={{ width: '33%' }} />
            <col style={{ width: '33%' }} />
          </colgroup>
          <TableHead
            sx={{
              backgroundColor: theme.palette.background.default,
              border: '1px solid',
              borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
              '& th': {
                fontWeight: 600,
                color: isDarkMode ? '#ffffff' : '#000',
              },
            }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Holder</TableCell>
              <TableCell align='right'>%</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {holdersData.map((row, index) => (
              <TableRow
                key={row.rank}
                sx={{
                  backgroundColor: isDarkMode
                    ? index % 2 === 0
                      ? themeExtra.purple.dark
                      : themeExtra.purple.main
                    : index % 2 === 0
                    ? themeExtra.white.light
                    : themeExtra.white.dark,
                  height: '48px',
                }}>
                <TableCell
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
                  }}>
                  {row.rank}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
                  }}>
                  <Box display='flex' alignItems='center' gap={1}>
                    <Chip
                      label={row.holder}
                      size='small'
                      sx={{ maxWidth: 'calc(100% - 32px)' }}
                    />
                    <Link
                      href={`https://solscan.io/account/${row.holder.replace(
                        '...',
                        ''
                      )}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      underline='none'>
                      🔗
                    </Link>
                  </Box>
                </TableCell>
                <TableCell
                  align='right'
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: isDarkMode ? '#ffffff' : '#A9A9A9',
                  }}>
                  {row.percent.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
