import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { getDashboardItem, InnerDashboardItem } from './dashboardItems';

export default function InnerDashboard({ parent }) {
  const [dashboardItem, setDashboardItem] = useState({});
  const [innerList, setInnerList] = useState([]);

  useEffect(() => {
    if (parent) {
      let items = getDashboardItem(parent);
      setDashboardItem(items);
      setInnerList(items.items);
    }
  }, [parent]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '15%',
          px: 4,
          py: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant='h6'
            sx={{ color: 'lightseagreen', fontWeight: 'bold' }}
          >
            {dashboardItem && dashboardItem.title}
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 2,
            px: 2,
          }}
        >
          {innerList.length
            ? dashboardItem.items.map((item) => (
                <InnerDashboardItem item={item} parent={parent} />
              ))
            : null}
        </Box>
      </Box>
      <Box sx={{ width: '85%' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
