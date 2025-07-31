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

const activityData = [
  {
    age: '3h ago',
    type: 'Buy',
    sol: 4.95,
    nutter: '13,115,891.111',
    account: 'EH4d...ghdx',
  },
  {
    age: '3h ago',
    type: 'Buy',
    sol: 3.035,
    nutter: '7,489,612.343',
    account: 'nigg...m5zS',
  },
  {
    age: '3h ago',
    type: 'Buy',
    sol: 0.05,
    nutter: '138,593.39',
    account: 'h5Uj...oiVJ',
  },
  {
    age: '3h ago',
    type: 'Sell',
    sol: 0.65395312,
    nutter: '1,848,277.676',
    account: '9hZS...wGTJ',
  },
  {
    age: '3h ago',
    type: 'Buy',
    sol: 0.05,
    nutter: '137,020.634',
    account: '7ctd...ducq',
  },
  {
    age: '3h ago',
    type: 'Buy',
    sol: 0.180304966,
    nutter: '495,155.335',
    account: '9A9o...3URC',
  },
  {
    age: '3h ago',
    type: 'Sell',
    sol: 0.166119601,
    nutter: '467,864.5',
    account: 'FK47...jJMZ',
  },
];

export default function ActivityTable() {
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';
  return (
    <Box mt={4}>
      <Typography variant='h6' fontWeight={700} mb={2}>
        Activity
      </Typography>

      <TableContainer component={Paper} elevation={2}>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>SOL</TableCell>
              <TableCell>Nutter</TableCell>
              <TableCell>Account</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activityData.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:not(:last-child)': {
                    borderBottom: '1px solid',
                    borderColor: isDarkMode ? 'white' : 'grey',
                  },
                  height: '48px', // Increased row height (1.5x default)
                }}>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.type}
                    size='small'
                    sx={{
                      bgcolor: row.type === 'Buy' ? '#e0f7e9' : '#ffe0e0',
                      color: row.type === 'Buy' ? '#2e7d32' : '#d32f2f',
                      fontWeight: 600,
                    }}
                  />
                </TableCell>
                <TableCell>{Number(row.sol).toFixed(3)}</TableCell>
                <TableCell>{row.nutter}</TableCell>
                <TableCell align='right'>
                  <Box
                    display='flex'
                    justifyContent='flex-end'
                    alignItems='center'
                    gap={1}>
                    <Chip label={row.account} size='small' />
                    <Link
                      href={`https://solscan.io/account/${row.account.replace(
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
