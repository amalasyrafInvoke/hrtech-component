import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LeaveDetailsCard from './leaveDetailsCard';

export default function LeaveBalanceDetails() {
  const [leaveType, setLeaveType] = useState('Annual Leave');

  const handleChange = (event) => {
    setLeaveType(event.target.value);
  };
  return (
    <Container maxWidth='lg' sx={{ height: '100vh' }} disableGutters>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowBackIcon
              sx={{
                width: '40px',
                height: '40px',
                color: 'lightseagreen',
                mr: 2,
              }}
            />
            <Typography
              variant='h5'
              sx={{ color: 'lightseagreen', fontWeight: 'bold' }}
            >
              Leave Balance
            </Typography>
          </Box>
          <Button
            variant='outlined'
            sx={{
              backgroundColor: 'lightseagreen',
              color: 'white',
              border: '1px solid lightseagreen',
              py: 1,
              px: 2,
              '&:hover': {
                opacity: '0.85',
                backgroundColor: 'lightseagreen',
                borderColor: 'lightseagreen',
              },
            }}
          >
            New Request
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            border: '1px solid lightgray',
            borderRadius: 2,
            mx: 4,
          }}
        >
          <TextField
            select
            value={leaveType}
            onChange={handleChange}
            sx={{
              width: 1 / 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'lightseagreen',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'lightseagreen',
                },
              },
              '& .MuiSelect-select': {
                color: 'lightseagreen',
              },
            }}
          >
            <MenuItem value='Annual Leave'>Annual Leave</MenuItem>
            <MenuItem value='Medical Leave'>Medical Leave</MenuItem>
            <MenuItem value='Work From Home'>Work From Home</MenuItem>
          </TextField>

          <LeaveDetailsCard detailsType='ENTITLEMENT' />
          <LeaveDetailsCard detailsType='DEDUCTION' />
          <LeaveDetailsCard detailsType='BALANCE' />
          <LeaveDetailsCard detailsType='LIMIT' />
          <LeaveDetailsCard />
        </Box>
      </Box>
    </Container>
  );
}
