import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { TextField, Box } from '@mui/material';
import useDates from '../../hooks/useDate';
import moment from 'moment';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

const DayDiv = ({ day }) => {
  return (
    <Box
      onClick={() =>
        alert(
          `hello ${moment(day).format('dddd')}, ${moment(day).format(
            'Do MMM YYYY'
          )} `
        )
      }
      sx={{
        backgroundColor: 'white',
        width: 'calc(100% / 7 - 2px)',
        minHeight: '150px',
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
          px: 1,
          color: 'gray',
        }}
      >
        <h5>{day.day}</h5>
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
        minHeight: '150px',
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

export default function BookingCalendar({ test }) {
  const [value, setValue] = useState(new Date());
  const { days } = useDates({ dates: value });

  return (
    <div style={{ padding: '15px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', md: 'space-between' },
        }}
      >
        <h1>{moment(value).format('MMMM YYYY')}</h1>
        <Box sx={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
          <ArrowCircleLeftIcon
            onClick={() => setValue(moment(value).subtract(1, 'month'))}
            htmlColor='darkslategray'
            sx={[
              { mx: 1 },
              {
                '&:hover': {
                  opacity: '0.85',
                },
              },
            ]}
          />
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label='Display dates'
              views={['year', 'month']}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <ArrowCircleRightIcon
            onClick={() => setValue(moment(value).add(1, 'month'))}
            htmlColor='darkslategray'
            sx={[
              { mx: 1 },
              {
                '&:hover': {
                  opacity: '0.85',
                },
              },
            ]}
          />
        </Box>
      </Box>

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
            width: '25%',
            backgroundColor: 'lightgray',
            height: 'calc(75vh + 50px)',
            borderRadius: '15px',
          }}
        ></Box>
        <Box
          sx={{
            border: '1px solid gray',
            borderRadius: '15px',
            overflow: 'hidden',
            width: { xs: '100%', md: '75%' },
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
                  textAlign: 'center',
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
              overflow: { xs: 'visible', md: 'scroll' },
            }}
          >
            {days.map((day, index) => {
              if (index === 0) {
                return (
                  <>
                    {Array.from({ length: day.hari }, (_, k) => (
                      <EmptyDiv day={day} />
                    ))}
                    <DayDiv day={day} />
                  </>
                );
              }

              return <DayDiv day={day} />;
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
