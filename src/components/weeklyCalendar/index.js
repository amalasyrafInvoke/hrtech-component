import React, { useState, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import { useWeeklyDates } from '../../hooks/useDate';
import CalendarHeader from './calendarHeader';
import WeeklySummary from './weeklySummary';

export default function WeeklyCalendar() {
  const [value, setValue] = useState(new Date().toISOString());
  const [filter, setFilter] = useState({
    leave: true,
    birthday: true,
    anniversary: true,
  });
  const { days } = useWeeklyDates({ dates: value });
  const divRef = useRef([]);

  const scrollToDiv = (index) => {
    if (divRef.current[index]) {
      divRef.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleClick = useCallback((index) => {
    scrollToDiv(index);
  }, []);

  return (
    <Box sx={{ backgroundColor: 'ghostwhite', minHeight: '100vh' }}>
      <CalendarHeader filter={filter} setFilter={setFilter} />
      <WeeklySummary
        value={value}
        setValue={setValue}
        days={days}
        handleClick={handleClick}
        filter={filter}
      />
    </Box>
  );
}
