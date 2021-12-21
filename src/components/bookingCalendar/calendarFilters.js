import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export default function CalendarFilter({ filter, setFilter }) {
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
      <h3>Filters</h3>
      <Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.leave}
                onChange={handleChange}
                name='leave'
                sx={{
                  color: 'pink',
                  '&.Mui-checked': {
                    color: 'pink',
                  },
                }}
              />
            }
            label={<h4 style={{ color: 'pink', margin: 0 }}>Leave</h4>}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={filter.birthday}
                onChange={handleChange}
                name='birthday'
                sx={{
                  color: 'thistle',
                  '&.Mui-checked': {
                    color: 'thistle',
                  },
                }}
              />
            }
            label={<h4 style={{ color: 'thistle', margin: 0 }}>Birthdays</h4>}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={filter.anniversary}
                onChange={handleChange}
                name='anniversary'
                sx={{
                  color: 'lightseagreen',
                  '&.Mui-checked': {
                    color: 'lightseagreen',
                  },
                }}
              />
            }
            label={
              <h4 style={{ color: 'lightseagreen', margin: 0 }}>
                Anniversaries
              </h4>
            }
          />
        </FormGroup>
      </Box>
    </Box>
  );
}
