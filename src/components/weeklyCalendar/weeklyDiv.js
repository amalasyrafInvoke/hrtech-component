import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button, Icon, Popover } from '@mui/material';
import moment from 'moment';
import mockCalendarEvents from '../../resources/mockCalendarEvents';

const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

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

const RenderDayEvents = ({ event }) => {
  const [openPopever, setOpenPopever] = useState(false);
  const popoverAnchor = useRef(null);

  const RenderButton = ({ title, color, textColor }) => {
    return (
      <Button
        sx={[
          {
            backgroundColor: color ? color : 'darkslategray',
            color: textColor ? textColor : 'black',
            p: 1,
          },
          {
            '&:hover': {
              opacity: '0.75',
              backgroundColor: color,
            },
          },
        ]}
      >
        {title}
      </Button>
    );
  };

  return (
    <>
      <Box
        sx={[
          {
            fontSize: '0.75rem',
            borderRadius: '7px',
            py: 1,
            my: 0.75,
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
            width: '100%',
          },
          {
            backgroundColor: getFilterColor(event.type),
          },
        ]}
        ref={popoverAnchor}
        onMouseOver={() => setOpenPopever(true)}
        onMouseLeave={() => setOpenPopever(false)}
      >
        <Icon sx={{ mx: { xs: 0, md: 1.5, lg: 3 } }}>{event.icon}</Icon>
        <Typography
          variant='body2'
          sx={{ display: { xs: 'none', md: 'block' } }}
        >{`${event.employeeName}'s`}</Typography>
      </Box>
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={openPopever}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        disableRestoreFocus
        PaperProps={{
          sx: { pointerEvents: 'auto' },
          onMouseOver: () => setOpenPopever(true),
          onMouseLeave: () => setOpenPopever(false),
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            width: '300px',
            height: '300px',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={[
              { position: 'absolute', top: 0, width: '100%', height: '10px' },
              {
                backgroundColor: getFilterColor(event.type),
              },
            ]}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              my: '20px',
            }}
          >
            <Box
              sx={{
                backgroundColor: getFilterColor(event.type),
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '75px',
                height: '75px',
                p: 1,
                m: '1rem auto',
              }}
            >
              <Icon sx={{ fontSize: 50, textAlign: 'center' }}>
                {event.icon}
              </Icon>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                {`${event.employeeName}'s ${event.name}`}
              </Typography>
              <Typography variant='p' sx={{ fontStyle: 'italic' }}>
                {moment(event.dates).format('DD MMMM YYYY')}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                my: 3,
              }}
            >
              {(() => {
                switch (event.type) {
                  case 'LEAVE':
                    return (
                      <>
                        <RenderButton
                          color='white'
                          textColor='mistyrose'
                          title='Reject'
                        />
                        <RenderButton
                          color='mistyrose'
                          textColor='white'
                          title={'Approve'}
                        />
                      </>
                    );

                  case 'BIRTHDAY':
                    return (
                      <>
                        <RenderButton
                          color='thistle'
                          textColor='white'
                          title={'Wish Birthday'}
                        />
                      </>
                    );
                  case 'ANNIVERSARY':
                    return (
                      <>
                        <RenderButton
                          color='indianred'
                          textColor='white'
                          title={'Congratulate'}
                        />
                      </>
                    );

                  default:
                    return null;
                }
              })()}
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default function WeeklyDiv({ day, filter }) {
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    const getFilteredEvents = () => {
      let events = mockCalendarEvents.filter(function (item) {
        for (var key in filter) {
          if (
            item.type.toLowerCase() === key.toLowerCase() &&
            filter[key] !== false
          )
            return true;
        }
        return false;
      });

      setFilteredArray(events);
    };
    getFilteredEvents();
  }, [filter]);

  return (
    <Box
      sx={{
        backgroundColor:
          moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
          moment(day.fullDate).isSame(new Date().toISOString(), 'month')
            ? 'lightseagreen'
            : 'ghostwhite',
        p: 1,
        width: 'calc(100% / 7)',
        mx: 0.5,
        height: '350px',
        borderRadius: 2,
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 0.5,
          color:
            moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
            moment(day.fullDate).isSame(new Date().toISOString(), 'month') &&
            'white',
        }}
      >
        <Typography variant='p'>{dayofWeek[day.hari]}</Typography>
        <Typography variant='p'>{day.day}</Typography>
      </Box>
      <Box sx={{ p: 1, my: 2 }}>
        {filteredArray.map((event, index) => {
          if (moment(day.fullDate).isSame(new Date(event.dates))) {
            return <RenderDayEvents key={index} event={event} />;
          }
          return null;
        })}
      </Box>
    </Box>
  );
}
