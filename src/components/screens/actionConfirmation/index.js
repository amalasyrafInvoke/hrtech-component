import React from 'react';
import { Box, Typography, Dialog, Button } from '@mui/material';

export default function ActionConfirmation({ open, toggleDialog, text }) {
  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '15vh',
          my: 4,
        }}
      >
        <Typography variant='p'>{text}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '5vh',
          my: 2,
        }}
      >
        <Button
          onClick={toggleDialog}
          variant='outlined'
          sx={{
            mx: 2,
            borderColor: 'lightseagreen',
            color: 'lightseagreen',
            '&:hover': {
              borderColor: 'lightseagreen',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          sx={{
            mx: 2,
            backgroundColor: 'lightseagreen',
            '&:hover': {
              backgroundColor: 'lightseagreen',
            },
          }}
        >
          Confirm
        </Button>
      </Box>
    </Dialog>
  );
}
