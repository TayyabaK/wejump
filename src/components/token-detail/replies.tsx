'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Replies() {
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    // Handle reply submission logic here
    console.log('Reply submitted:', replyText);
    setReplyText('');
  };

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

      {/* Reply Input Section */}
      <Paper sx={{ p: 2, borderRadius: 2, mt: 2 }}>
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

      {/* Replies List */}
    </Box>
  );
}
