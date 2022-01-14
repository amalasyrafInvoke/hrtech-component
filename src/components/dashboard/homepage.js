import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Homepage() {
  return (
    <Box sx={{ backgroundColor: 'ghostwhite', width: 'original', height: '90vh', p: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Welcome Back, Invoke
        </Typography>
        <Box>
          <Typography variant='h5' sx={{ fontWeight: 'light' }}>Invoke Solutions Sdn Bhd</Typography>
        </Box>
      </Box>
    </Box>
  );
}
