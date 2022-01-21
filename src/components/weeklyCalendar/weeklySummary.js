import React, { useEffect } from 'react';
import moment from 'moment';
import { Box, Typography, Button } from '@mui/material';
import WeeklyDiv from './weeklyDiv';

export default function WeeklySummary({
  value,
  setValue,
  days,
  handleClick,
  filter,
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
        px: 4,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          // border: '1px solid darkslategray',
          width: '100%',
          height: '450px',
          p: 4,
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            onClick={() => setValue(moment(value).subtract(1, 'week'))}
            variant='text'
            sx={[
              { mx: 1, color: 'darkslategray' },
              {
                '&:hover': {
                  opacity: '0.85',
                },
              },
            ]}
          >
            Previous Week
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              color: 'darkslategray',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                mr: 2,
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  display: { xs: 'none', md: 'block' },
                  fontWeight: 'bold',
                }}
              >
                Week {moment(value).format('ww')}
              </Typography>
              <Typography
                variant='p'
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                {moment(value).startOf('week').format('MMMM Do')} -{' '}
                {moment(value).endOf('week').format('MMMM Do')}
              </Typography>
            </Box>
            <Button
              sx={[
                { backgroundColor: 'lightseagreen', mx: 1 },
                {
                  '&:hover': {
                    opacity: '0.85',
                    backgroundColor: 'lightseagreen',
                  },
                },
              ]}
              variant='contained'
              onClick={(ev) => handleClickToday(ev)}
            >
              Today
            </Button>
          </Box>
          <Button
            onClick={() => setValue(moment(value).add(1, 'week'))}
            variant='text'
            sx={[
              { mx: 1, color: 'darkslategray' },
              {
                '&:hover': {
                  opacity: '0.85',
                },
              },
            ]}
          >
            Next Week
          </Button>
        </Box>

        <Box
          sx={{ display: 'flex', flexDirection: 'row', width: '100%', my: 4 }}
        >
          {days.map((day) => (
            <WeeklyDiv day={day} filter={filter} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
