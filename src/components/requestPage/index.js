import React, { useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RequestPageFilter from './requestPageFilter';

export default function MyRequest() {
  const [requestFilter, setRequestFilter] = useState('ALL');

  return (
    <Container maxWidth='lg' sx={{ height: '100vh', p: 4 }} disableGutters>
      {/* Page header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Typography variant='h6' sx={{ color: 'lightseagreen' }}>
          My Request
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              p: 1,
              border: '1px solid lightgray',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              mx: 0.5,
            }}
          >
            <FilterAltIcon sx={{ color: 'lightseagreen' }} />
          </Box>
          <Button
            sx={{
              backgroundColor: 'lightseagreen',
              color: 'white',
              py: 1,
              px: 2,
              borderRadius: 2,
              mx: 0.5,
            }}
          >
            New Application
          </Button>
        </Box>
      </Box>

      {/* Container for leave request list table */}
      <Box
        sx={{
          border: '1px solid #E4E4E4',
          my: 4,
          p: 4,
          height: '75vh',
          borderRadius: 2,
        }}
      >
        <RequestPageFilter requestFilter={requestFilter} setRequestFilter={setRequestFilter} />
      </Box>
    </Container>
  );
}
