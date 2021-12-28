import React, { useEffect } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { TextField, Box, Button, Typography } from '@mui/material';
import moment from 'moment';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function CalendarDatePicker({
  value,
  setValue,
  days,
  handleClick,
}) {
  const handleClickToday = (ev) => {
    setValue(new Date());
  };

  useEffect(() => {
    if (
      moment(value).isSame(new Date().toISOString(), 'day') &&
      moment(value).isSame(new Date().toISOString(), 'month')
    ) {
      const index = days.findIndex(
        (day) =>
          moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
          moment(day.fullDate).isSame(new Date().toISOString(), 'month')
      );
      handleClick(index);
    }
  }, [value, days, handleClick]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: { xs: 'flex-start', md: 'space-between' },
      }}
    >
      <Box sx={{ width: { xs: 'auto', md: '500px' }, mb: { xs: 0, md: 4 } }}>
        <h1>{moment(value).format('MMMM YYYY')}</h1>
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
      <Box sx={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
        <Button
          sx={[
            { backgroundColor: 'darkslategray', mx: 1 },
            {
              '&:hover': {
                opacity: '0.85',
                backgroundColor: 'darkslategray',
              },
            },
          ]}
          variant='contained'
          onClick={(ev) => handleClickToday(ev)}
        >
          Today
        </Button>
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
  );
}
