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
        px: { xs: 0, md: 4 },
        py: { xs: 0, md: 2 },
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
          height: { xs: '300px', md: '400px' },
          p: { xs: 1, md: 4 },
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
            Prev
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              color: 'darkslategray',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                mr: { xs: 0, md: 2 },
              }}
            >
              <Typography
                variant='h6'
                sx={{
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
            Next
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            my: { xs: 2, md: 4 },
          }}
        >
          {days.map((day) => (
            <WeeklyDiv day={day} filter={filter} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
