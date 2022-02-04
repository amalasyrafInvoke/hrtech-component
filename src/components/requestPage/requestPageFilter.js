import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const requestFilterList = [
  { title: 'All Request', value: 'ALL' },
  { title: 'Approved', value: 'APPROVED' },
  { title: 'Pending', value: 'PENDING' },
  { title: 'Rejected', value: 'REJECTED' },
  { title: 'Withdrawn', value: 'WITHDRAWN' },
];

export default function RequestPageFilter({ requestFilter, setRequestFilter }) {
  const handleFilter = (event, newFilter) => {
    if (newFilter) {
      setRequestFilter(newFilter);
    }
  };

  return (
    <ToggleButtonGroup
      value={requestFilter}
      exclusive
      onChange={handleFilter}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {requestFilterList.map((list) => (
        <ToggleButton
          value={list.value}
          sx={{
            px: 5,
            py: 1,
            border: '1px solid #E4E4E4',
            color: '#8D9593',
          }}
        >
          {list.title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
