import React, { useState } from 'react';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import MonthlyCalendar from './monthlyCalendar';
import WeeklyCalendar from './weeklyCalendar';

export default function FullCalendar() {
  const [calendarState, setCalendarState] = useState('WEEKLY');

  const toggleCalendarState = (event, newCalendarState) => {
    if (newCalendarState) {
      setCalendarState(newCalendarState);
    }
  };

  return (
    <Box>
      {calendarState === 'MONTHLY' && <MonthlyCalendar />}
      {calendarState === 'WEEKLY' && <WeeklyCalendar />}
      <Box sx={{ position: 'fixed', left: 'calc(50% - 86.5px)', bottom: '5%' }}>
        <ToggleButtonGroup
          value={calendarState}
          exclusive
          onChange={toggleCalendarState}
        >
          <ToggleButton value='MONTHLY' color='success'>
            Monthly
          </ToggleButton>
          <ToggleButton value='WEEKLY' color='success'>
            Weekly
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
