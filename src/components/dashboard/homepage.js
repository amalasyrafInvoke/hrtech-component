import React from 'react';
import { Box, Typography } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Homepage() {
  return (
    <Box
      sx={{
        backgroundColor: 'whitesmoke',
        width: 'original',
        height: '100%',
        // p: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 4
        }}
      >
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Welcome Back, Invoke
        </Typography>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Typography variant='h5' sx={{ fontWeight: 'light' }}>
            Invoke Solutions Sdn Bhd
          </Typography>
          <Box
            sx={{
              ml: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <SupervisorAccountIcon
              sx={{
                backgroundColor: 'white',
                color: 'lightseagreen',
                p: 1,
                borderRadius: '8px',
                mr: 0.5,
              }}
            />
            <NotificationsIcon
              sx={{
                backgroundColor: 'lightseagreen',
                color: 'white',
                p: 1,
                borderRadius: '8px',
                ml: 0.5,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
