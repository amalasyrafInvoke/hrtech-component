import { useState, useEffect } from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import PaidIcon from '@mui/icons-material/Paid';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const dashboardItems = [
  {
    title: 'Homepage',
    icon: <DashboardIcon sx={{ mr: 2 }} />,
    link: '/homepage',
  },
  {
    title: 'Recruitment',
    icon: <GroupsIcon sx={{ mr: 2 }} />,
    link: '/recruitment',
  },
  {
    title: 'Payroll',
    icon: <PaidIcon sx={{ mr: 2 }} />,
    link: '/payroll',
  },
  {
    title: 'Leave',
    icon: <CalendarTodayIcon sx={{ mr: 2 }} />,
    link: '/leave',
  },
  {
    title: 'Claim',
    icon: <ArticleIcon sx={{ mr: 2 }} />,
    link: '/claim',
  },
  {
    title: 'Performance',
    icon: <WifiTetheringIcon sx={{ mr: 2 }} />,
    link: '/performance',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon sx={{ mr: 2 }} />,
    link: '/settings',
  },
  {
    title: 'Support',
    icon: <HeadsetMicIcon sx={{ mr: 2 }} />,
    link: '/support',
  },
];

export const DashboardItem = ({ item, size }) => {
  let params = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (params.pathname === item.link) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [item.link, params.pathname]);

  return (
    <Link
      underline='none'
      color='inherit'
      component={RouterLink}
      to={item.link}
      sx={{
        my: 2,
        py: 1,
        px: size === 'EXPANDED' ? 2 : 1,
        borderRadius: size === 'EXPANDED' ? 1 : '50%',
        backgroundColor: active ? 'lightseagreen' : 'white',
        color: active ? 'white' : 'lightslategray',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {item.icon} {size === 'EXPANDED' ? item.title : null}
    </Link>
  );
};

export default dashboardItems;
