import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarFilter from '../monthlyCalendar/calendarFilters';

export default function CalendarHeader({ filter, setFilter }) {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4},
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '500px' } }}>
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
        <CalendarFilter
          filter={filter}
          setFilter={setFilter}
          orientation='horizontal'
        />
      </Box>
    </Box>
  );
}
