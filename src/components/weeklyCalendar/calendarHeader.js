import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarFilter from '../bookingCalendar/calendarFilters';

export default function CalendarHeader({ filter, setFilter }) {
  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{ width: { xs: 'auto', md: '500px' } }}>
        <Typography variant='h4'>Weekly Calendar</Typography>
        <Typography
          variant='p'
          fontSize={14}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          The shared calendar across the company. You will be able to find
          information regarding the availability of employees, birthdays and
          anniversaries here.
        </Typography>
      </Box>
      <Box>
        <CalendarFilter filter={filter} setFilter={setFilter} orientation='horizontal' />
      </Box>
    </Box>
  );
}
