'use client';

import React from 'react';
import { Box, Container, Typography} from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 4,
        mt: 6,
        backgroundColor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}>
      <Container maxWidth='md'>
        {/* Powered By Text */}
        <Typography
          variant='caption'
          color='text.secondary'
          align='center'
          display='block'>
          Powered by{' '}
          <a
            href='https://brdigitech.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <strong>BRDigitech</strong>
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
