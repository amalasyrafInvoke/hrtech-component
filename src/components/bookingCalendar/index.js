import React, { useState } from 'react';
import { Box } from '@mui/material';
import useDates from '../../hooks/useDate';
import CalendarFilter from './calendarFilters';
import CalendarDatePicker from './calendarDatePicker';
import { DayDiv, EmptyDiv } from './dayBlock';

const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

export default function BookingCalendar() {
  const [value, setValue] = useState(new Date());
  const [filter, setFilter] = useState({
    leave: true,
    birthday: true,
    anniversary: true,
  });
  const { days } = useDates({ dates: value });

  return (
    <div style={{ padding: '15px' }}>
      <CalendarDatePicker value={value} setValue={setValue} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Box
          sx={{
            // display: { xs: 'none', md: 'block' },
            width: { xs: '100%', md: '15%' },
            backgroundColor: 'whitesmoke',
            height: { xs: 'auto', md: 'calc(75vh + 50px)' } ,
            borderRadius: '15px',
          }}
        >
          <CalendarFilter filter={filter} setFilter={setFilter} />
        </Box>
        <Box
          sx={{
            // border: '1px solid gray',
            // borderRadius: '15px',
            overflow: 'hidden',
            width: { xs: '100%', sm: '100%', md: '85%' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              // borderBottom: '1px solid gray',
            }}
          >
            {dayofWeek.map((day) => (
              <Box
                sx={{
                  width: 'calc(100% / 7 - 2px)',
                  mx: {xs: 0.2, md: 1.5},
                  fontWeight: 'bold',
                }}
              >
                {day}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              backgroundColor: 'white',
              height: '75vh',
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              overflow: 'scroll',
            }}
          >
            {days.map((day, index) => {
              if (index === 0) {
                return (
                  <>
                    {Array.from({ length: day.hari }, (_, k) => (
                      <EmptyDiv day={day} />
                    ))}
                    <DayDiv day={day} filter={filter} />
                  </>
                );
              }

              return <DayDiv day={day} filter={filter} />;
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
