import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { EmptyDiv, DayDiv } from './dayBlock';

const dayofWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function MiniCalendar({ value, days, filter, handleClick }) {
  return (
    <Box sx={{ width: '100%', height: '250px' }}>
      <Typography sx={{ fontWeight: 'bold', p: 2 }} variant='h6'>
        {moment(value).format('MMMM YYYY')}
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {dayofWeek.map((day, index) => (
          <Box
            key={index}
            sx={{
              width: 'calc(100% / 7 - 4px)',
              mx: 0.8,
              fontWeight: 'bold',
              fontSize: '0.8rem',
            }}
          >
            {day}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          py: 1,
        }}
      >
        {days.map((day, index) => {
          if (index === 0) {
            return (
              <>
                {Array.from({ length: day.hari }, (_, k) => (
                  <EmptyDiv compact={true} />
                ))}
                <DayDiv
                  day={day}
                  filter={filter}
                  compact={true}
                  handleClick={() => handleClick(index)}
                />
              </>
            );
          }

          return (
            <DayDiv
              key={index}
              day={day}
              filter={filter}
              compact={true}
              handleClick={() => handleClick(index)}
            />
          );
        })}
      </Box>
    </Box>
  );
}
