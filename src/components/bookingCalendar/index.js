import React, { useEffect, useState } from 'react';
import { Box, Icon } from '@mui/material';
import useDates from '../../hooks/useDate';
import moment from 'moment';
import CalendarFilter from './calendarFilters';
import mockCalendarEvents from '../../resources/mockCalendarEvents';
import CalendarDatePicker from './calendarDatePicker';

const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

const getFilterColor = (key) => {
  switch (key) {
    case 'LEAVE':
      return 'pink';

    case 'BIRTHDAY':
      return 'thistle';

    case 'ANNIVERSARY':
      return 'lightseagreen';

    default:
      return 'white';
  }
};

const DayDiv = ({ day, filter }) => {
  const [filteredArray, setFilteredArray] = useState([]);

  const getFilteredEvents = () => {
    let events = mockCalendarEvents.filter(function (item) {
      for (var key in filter) {
        if (
          item.type.toLowerCase() === key.toLowerCase() &&
          filter[key] !== false
        )
          return true;
      }
      return false;
    });

    setFilteredArray(events);
  };

  useEffect(() => {
    getFilteredEvents();
  }, [filter]);

  return (
    <Box
      onClick={() =>
        alert(
          `hello ${moment(day.fullDate).format('dddd')}, ${moment(
            day.fullDate
          ).format('Do MMM YYYY')} `
        )
      }
      sx={{
        backgroundColor: 'white',
        width: 'calc(100% / 7 - 2px)',
        minHeight: '200px',
        maxHeight: '200px',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        border: '1px solid lightgray',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
          px: 1,
          color: 'gray',
        }}
      >
        <p
          style={{
            backgroundColor:
              moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
              moment(day.fullDate).isSame(new Date().toISOString(), 'month') &&
              'black',
            color:
              moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
              moment(day.fullDate).isSame(new Date().toISOString(), 'month') &&
              'white',
            padding: '5px',
            fontSize: '0.75rem',
            borderRadius: '50%',
          }}
        >
          {day.day < 10 ? `0${day.day}` : day.day}
        </p>
      </Box>
      <Box sx={{ my: 2 }}>
        {filteredArray.map((event) => {
          if (
            moment(day.fullDate).isSame(new Date(event.dates))
          ) {
            return (
              <Box
                sx={[
                  {
                    fontSize: '0.75rem',
                    mx: 1,
                    borderRadius: '7px',
                    px: 1,
                    display: 'flex',
                    alignItems: 'center',
                  },
                  {
                    backgroundColor: getFilterColor(event.type),
                  },
                ]}
              >
                <Icon sx={{ mr: 1 }}>{event.icon}</Icon>
                <p>{`${event.employeeName}'s ${event.name}`}</p>
              </Box>
            );
          } else return;
        })}
      </Box>
    </Box>
  );
};

const EmptyDiv = ({}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: 'calc(100% / 7 - 2px)',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        border: '1px solid lightgray',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      ></Box>
    </Box>
  );
};

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
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '20%',
            backgroundColor: 'whitesmoke',
            height: 'calc(75vh + 50px)',
            borderRadius: '15px',
          }}
        >
          <CalendarFilter filter={filter} setFilter={setFilter} />
        </Box>
        <Box
          sx={{
            border: '1px solid gray',
            borderRadius: '15px',
            overflow: 'hidden',
            width: { xs: '100%', md: '80%' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid gray',
            }}
          >
            {dayofWeek.map((day) => (
              <Box
                sx={{
                  width: 'calc(100% / 7 - 2px)',
                  mx: 1.5
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
