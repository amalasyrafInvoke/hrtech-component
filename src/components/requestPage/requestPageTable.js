import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import LeaveRequestCard from './leaveRequestCard';
import mockLeaveRequest from './mockLeaveRequest';

export default function RequestPageTable() {
  return (
    <Box
      sx={{
        minHeight: '50vh',
        my: 4,
        width: { xs: '1000px', md: '100%' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '50px',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            minWidth: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8D9593',
            textTransform: 'uppercase',
          }}
        >
          <Typography variant='p'>Request Details</Typography>
        </Box>
        <Box
          sx={{
            minWidth: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8D9593',
            textTransform: 'uppercase',
          }}
        >
          <Typography variant='p'>Duration</Typography>
        </Box>
        <Box
          sx={{
            minWidth: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8D9593',
            textTransform: 'uppercase',
          }}
        >
          <Typography variant='p'>Status</Typography>
        </Box>
        <Box
          sx={{
            minWidth: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8D9593',
            textTransform: 'uppercase',
          }}
        >
          <Typography variant='p'>Approval</Typography>
        </Box>
        <Box
          sx={{
            minWidth: '200px',
            display: 'flex',
            alignItems: 'center',
            color: '#8D9593',
            textTransform: 'uppercase',
          }}
        />
      </Box>
      <Divider sx={{ my: 1 }} />
      {mockLeaveRequest.map((item) => (
        <>
          <LeaveRequestCard item={item} />
          <Divider sx={{ my: 1 }} />
        </>
      ))}
    </Box>
  );
}
