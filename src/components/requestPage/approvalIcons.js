import React from 'react';
import { Box } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export default function ApprovalIcons({ approver, status, time }) {

  const renderStatus = (status) => {
    switch (status) {
      case 'APPROVED':
        return (
          <Box
            sx={{
              position: 'absolute',
              backgroundColor: '#27AE60',
              p: 2,
              borderRadius: '50%',
              opacity: 0.9,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <DoneIcon sx={{ color: 'white' }} />
          </Box>
        );

      case 'REJECTED':
        return (
          <Box
            sx={{
              position: 'absolute',
              backgroundColor: '#EB5757',
              p: 2,
              borderRadius: '50%',
              opacity: 0.9,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ClearIcon sx={{ color: 'white' }} />
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#E4E4E4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        borderRadius: '50%',
        position: 'relative',
      }}
    >
      <FaceIcon sx={{ color: '#8D9593' }} />
      {renderStatus(status)}
    </Box>
  );
}
