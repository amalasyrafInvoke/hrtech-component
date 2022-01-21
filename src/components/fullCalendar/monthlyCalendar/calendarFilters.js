import React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

const getFilterColor = (key) => {
  switch (key) {
    case 'LEAVE':
      return 'mistyrose';

    case 'BIRTHDAY':
      return 'thistle';

    case 'ANNIVERSARY':
      return 'indianred';

    default:
      return 'white';
  }
};

export default function CalendarFilter({ filter, setFilter, orientation }) {
  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
        Filters
      </Typography>
      <Box
        sx={
          ({
            mb: 1,
          },
          orientation === 'horizontal' && {
            mb: 0,
          })
        }
      >
        <FormGroup
          sx={
            ({
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
            },
            orientation === 'horizontal' && {
              flexDirection: { xs: 'column', md: 'row' },
            })
          }
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.leave}
                onChange={handleChange}
                name='leave'
                sx={{
                  color: getFilterColor('LEAVE'),
                  '&.Mui-checked': {
                    color: getFilterColor('LEAVE'),
                  },
                }}
              />
            }
            label={
              <h4 style={{ color: getFilterColor('LEAVE'), margin: 0 }}>
                Leave
              </h4>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={filter.birthday}
                onChange={handleChange}
                name='birthday'
                sx={{
                  color: getFilterColor('BIRTHDAY'),
                  '&.Mui-checked': {
                    color: getFilterColor('BIRTHDAY'),
                  },
                }}
              />
            }
            label={
              <h4 style={{ color: getFilterColor('BIRTHDAY'), margin: 0 }}>
                Birthdays
              </h4>
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={filter.anniversary}
                onChange={handleChange}
                name='anniversary'
                sx={{
                  color: getFilterColor('ANNIVERSARY'),
                  '&.Mui-checked': {
                    color: getFilterColor('ANNIVERSARY'),
                  },
                }}
              />
            }
            label={
              <h4 style={{ color: getFilterColor('ANNIVERSARY'), margin: 0 }}>
                Anniversaries
              </h4>
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
}
