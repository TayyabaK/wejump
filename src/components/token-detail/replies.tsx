'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useThemeMode } from '@/theme/theme-context';
import { themeExtra } from '@/theme/theme-extra';
import { Person } from '@mui/icons-material';

const existingReplies = [
  {
    address: '9A72...PUVQ',
    comment: 'This project looks solid! Excited to see it grow 🚀',
  },
  {
    address: 'ALvU...ZgmS',
    comment:
      'Interesting tokenomics – I’d love to see more transparency on liquidity locks.',
  },
  {
    address: 'DMx6...Yhfq',
    comment: 'Looks promising. Will be watching the volume closely!',
  },
];

export default function Replies() {
  const [replyText, setReplyText] = useState('');
  const { mode } = useThemeMode();
  const isDarkMode = mode === 'dark';
  const theme = useTheme();

  const handleReplySubmit = () => {
    console.log('Reply submitted:', replyText);
    setReplyText('');
  };

  return (
    <Box mt={4}>
      <Typography variant='h6' fontWeight={700} mb={2}>
        Replies
      </Typography>

      {/* Replies List */}
      <Stack spacing={2} mb={2}>
        {existingReplies.map((reply, index) => (
          <Paper
            key={index}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: isDarkMode
                ? themeExtra.purple.dark
                : themeExtra.white.dark,
              color: isDarkMode
                ? themeExtra.purple.contrastText
                : themeExtra.white.contrastText,
            }}>
            <Box display='flex' alignItems='center' gap={1} flexDirection='row'>
              <Person
                sx={{
                  color: isDarkMode
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                }}
              />
              <Typography variant='body2' fontWeight={600} mb={0.5}>
                {reply.address}
              </Typography>
            </Box>
            <Typography
              variant='body2'
              sx={{
                mt: 1,
              }}>
              {reply.comment}
            </Typography>
          </Paper>
        ))}
      </Stack>

      {/* Default message if no replies (optional) */}
      {existingReplies.length === 0 && (
        <Paper sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant='body2'>
            No replies yet. Be the first to reply or leave a comment.
          </Typography>
        </Paper>
      )}

      {/* Reply Input Section */}
      <Paper sx={{ p: 2, borderRadius: 2 }}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            multiline
            minRows={3}
            placeholder='Write your reply...'
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            variant='outlined'
          />
          <Box display='flex' justifyContent='flex-end'>
            <Button
              variant='contained'
              color='primary'
              endIcon={<SendIcon />}
              onClick={handleReplySubmit}
              disabled={!replyText.trim()}
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                px: 3,
                py: 1,
              }}>
              Post Reply
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
