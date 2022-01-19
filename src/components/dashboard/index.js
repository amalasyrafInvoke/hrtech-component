import React, { useEffect, useState } from 'react';
import { Box, Divider } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Logo1 from '../../resources/images/adnexio-logo.png';
import Logo2 from '../../resources/images/nex-logo.png';
import dashboardItems, { DashboardItem } from './dashboardItems';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export default function Dashboard() {
  let location = useLocation();
  const [dashboardSize, setDashboardSize] = useState('EXPANDED');

  useEffect(() => {

    if (location.pathname !== '/homepage') {
      setDashboardSize('COMPACT');
    } else {
      setDashboardSize('EXPANDED');
    }
  }, [location.pathname]);
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
          px: 4,
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          width: dashboardSize === 'EXPANDED' ? '15%' : '40px',
          borderRight:
            dashboardSize === 'EXPANDED' ? 'none' : '1px solid lightslategray',
        }}
      >
        <Box sx={{ height: '60px', display: 'flex', alignItems: 'center' }}>
          <img
            src={dashboardSize === 'EXPANDED' ? Logo1 : Logo2}
            alt='Adnexio Logo'
            width={dashboardSize === 'EXPANDED' ? 120 : 40}
            height={dashboardSize === 'EXPANDED' ? 60 : 40}
          />
          {dashboardSize === 'EXPANDED' ? (
            <CompareArrowsIcon
              sx={{
                backgroundColor: 'lightseagreen',
                color: 'white',
                ml: 4,
                p: 0.5,
                borderRadius: '8px',
              }}
            />
          ) : null}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {dashboardItems.map((item) => (
            <DashboardItem item={item} size={dashboardSize} />
          ))}

          <Divider variant='middle' />
        </Box>
      </Box>
      <Box sx={{ width: dashboardSize === 'EXPANDED' ? '85%' : 'inherit' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
