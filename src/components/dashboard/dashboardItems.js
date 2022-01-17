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
    items: [
      {
        title: 'Dashboard',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'dashboard',
      },
      {
        title: 'Job Ads',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment3',
      },
      {
        title: 'Candidate Board',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment4',
      },
      {
        title: 'Talent Bank',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment5',
      },
    ],
  },
  {
    title: 'Payroll',
    icon: <PaidIcon sx={{ mr: 2 }} />,
    link: '/payroll',
    items: [
      {
        title: 'Dashboard',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'dashboard',
      },
      {
        title: 'Dashboard1',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment3',
      },
      {
        title: 'Dashboard2',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment4',
      },
    ],
  },
  {
    title: 'Leave',
    icon: <CalendarTodayIcon sx={{ mr: 2 }} />,
    link: '/leave',
    items: [
      {
        title: 'Dashboard',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'dashboard',
      },
      {
        title: 'Dashboard1',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment3',
      },
      {
        title: 'Dashboard2',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment4',
      },
    ],
  },
  {
    title: 'Claim',
    icon: <ArticleIcon sx={{ mr: 2 }} />,
    link: '/claim',
    items: [
      {
        title: 'Dashboard Claim 1',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'dashboard',
      },
      {
        title: 'Dashboard Claim 2',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment3',
      },
      {
        title: 'Dashboard Claim 3',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment4',
      },
    ],
  },
  {
    title: 'Performance',
    icon: <WifiTetheringIcon sx={{ mr: 2 }} />,
    link: '/performance',
    items: [
      {
        title: 'Dashboard',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'dashboard',
      },
      {
        title: 'Dashboard1',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment3',
      },
      {
        title: 'Dashboard2',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment4',
      },
    ],
  },
  {
    title: 'Settings',
    icon: <SettingsIcon sx={{ mr: 2 }} />,
    link: '/settings',
    items: [
      {
        title: 'Dashboard',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'dashboard',
      },
      {
        title: 'Dashboard1',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment3',
      },
      {
        title: 'Dashboard2',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment4',
      },
    ],
  },
  {
    title: 'Support',
    icon: <HeadsetMicIcon sx={{ mr: 2 }} />,
    link: '/support',
    items: [
      {
        title: 'Dashboard',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'dashboard',
      },
      {
        title: 'Dashboard1',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment3',
      },
      {
        title: 'Dashboard2',
        icon: <GroupsIcon sx={{ mr: 2 }} />,
        link: 'recruitment4',
      },
    ],
  },
];

export const getDashboardItem = (parentRoute) => {
  let items = dashboardItems.find((item) => item.link === parentRoute);
  return items;
};

export const DashboardItem = ({ item, size }) => {
  let location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname === item.link) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [item.link, location.pathname]);

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

export const InnerDashboardItem = ({ item }) => {
  let location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname === item.link) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [item.link, location.pathname]);

  return (
    <Link
      underline='none'
      color='inherit'
      component={RouterLink}
      to={item.link}
      sx={{
        my: 2,
        py: 1,
        px: 2,
        borderRadius: 1,
        backgroundColor: active ? 'lightseagreen' : 'white',
        color: active ? 'white' : 'lightslategray',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {item.title}
    </Link>
  );
};

export default dashboardItems;
