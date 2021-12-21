import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { TextField, Box } from '@mui/material';
import moment from 'moment';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function CalendarDatePicker({ value, setValue }) {
  return (
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
  );
}
