import React, { useState, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import useDates from '../../../hooks/useDate';
import CalendarFilter from './calendarFilters';
import CalendarDatePicker from './calendarDatePicker';
import { DayDiv, EmptyDiv } from './dayBlock';
import MiniCalendar from './miniCalendar';

const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

export default function MonthlyCalendar() {
  const [value, setValue] = useState(new Date().toISOString());
  const [filter, setFilter] = useState({
    leave: true,
    birthday: true,
    anniversary: true,
  });
  const { days } = useDates({ dates: value });
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
    <div style={{ padding: '15px', backgroundColor: 'ghostwhite' }}>
      <CalendarDatePicker
        value={value}
        setValue={setValue}
        days={days}
        handleClick={handleClick}
      />

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
            display: { xs: 'flex', md: 'flex' },
            flexDirection: { xs: 'row', md: 'column' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            width: { xs: '100%', md: '20%', lg: '15%' },
            backgroundColor: 'ghostwhite',
            // borderWidth: '1px 0px 1px 1px',
            // borderColor: 'lightgrey',
            // borderStyle: 'solid',
            height: { xs: 'auto', md: 'calc(65vh + 50px)' },
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '15px',
          }}
        >
          <CalendarFilter filter={filter} setFilter={setFilter} />
          <MiniCalendar
            value={value}
            days={days}
            filter={filter}
            handleClick={handleClick}
          />
        </Box>
        <Box
          sx={{
            // border: '1px solid gray',
            // borderRadius: '15px',
            overflow: 'hidden',
            width: { xs: '100%', sm: '100%', md: '80%', lg: '85%' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white'
            }}
          >
            {dayofWeek.map((day) => (
              <Box
                key={day}
                sx={{
                  width: 'calc(100% / 7 - 2px)',
                  mx: { xs: 0.2, md: 1.5 },
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
              height: '65vh',
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
                  <React.Fragment key={index}>
                    {Array.from({ length: day.hari }, (_, k) => (
                      <EmptyDiv key={k} day={day} />
                    ))}
                    <DayDiv
                      day={day}
                      filter={filter}
                      ref={divRef}
                      index={index}
                    />
                  </React.Fragment>
                );
              }

              return (
                <DayDiv
                  key={index}
                  day={day}
                  filter={filter}
                  ref={divRef}
                  index={index}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
