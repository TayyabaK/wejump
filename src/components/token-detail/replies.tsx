'use client';

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Replies() {
  return (
    <Box mt={4}>
      <Typography variant='h6' fontWeight={700} mb={2}>
        Replies
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant='body2'>
          No replies yet. Be the first to reply or leave a comment.
        </Typography>
      </Paper>
    </Box>
  );
}
