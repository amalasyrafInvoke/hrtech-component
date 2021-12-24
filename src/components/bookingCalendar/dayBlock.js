import React, { useEffect, useState, useRef } from 'react';
import { Box, Icon, Popover, Typography, Button } from '@mui/material';
import moment from 'moment';
import mockCalendarEvents from '../../resources/mockCalendarEvents';

const getFilterColor = (key) => {
  switch (key) {
    case 'LEAVE':
      return 'pink';

    case 'BIRTHDAY':
      return 'thistle';

    case 'ANNIVERSARY':
      return 'lightseagreen';

    default:
      return 'white';
  }
};

export const DayDiv = ({ day, filter }) => {
  const [filteredArray, setFilteredArray] = useState([]);

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

  useEffect(() => {
    getFilteredEvents();
  }, [filter]);

  return (
    <Box
      // onClick={() =>
      //   alert(
      //     `hello ${moment(day.fullDate).format('dddd')}, ${moment(
      //       day.fullDate
      //     ).format('Do MMM YYYY')} `
      //   )
      // }
      sx={{
        backgroundColor:
          moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
          moment(day.fullDate).isSame(new Date().toISOString(), 'month')
            ? 'darkslategray'
            : 'white',
        color:
          moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
          moment(day.fullDate).isSame(new Date().toISOString(), 'month') &&
          'white',
        width: 'calc(100% / 7 - 8px)',
        minHeight: '250px',
        maxHeight: '250px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderTop:
          moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
          moment(day.fullDate).isSame(new Date().toISOString(), 'month')
            ? '4px solid #EEBC1D'
            : '4px solid gray',
        m: { xs: 0.5, md: 0.5 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          px: { xs: 0, md: 0.5 },
          color: 'gray',
        }}
      >
        <h6
          style={{
            color:
              moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
              moment(day.fullDate).isSame(new Date().toISOString(), 'month') &&
              '#EEBC1D',
            padding: '5px',
            marginBlock: 0,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderRadius: '50%',
          }}
        >
          {day.day < 10 ? `0${day.day}` : day.day}
        </h6>
      </Box>
      {/* <Box sx={{ my: 0.5 }}> */}
      {filteredArray.map((event) => {
        if (moment(day.fullDate).isSame(new Date(event.dates))) {
          return <_renderDayEvents event={event} />;
        }
      })}
      {/* </Box> */}
    </Box>
  );
};

const _renderDayEvents = ({ event }) => {
  const [openPopever, setOpenPopever] = useState(false);
  const popoverAnchor = useRef(null);

  const _renderButton = ({ title, color, textColor }) => {
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
                backgroundColor:
                  event.type === 'LEAVE'
                    ? 'pink'
                    : event.type === 'BIRTHDAY'
                    ? 'thistle'
                    : 'lightseagreen',
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
                backgroundColor:
                  event.type === 'LEAVE'
                    ? 'pink'
                    : event.type === 'BIRTHDAY'
                    ? 'thistle'
                    : 'lightseagreen',
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
                        <_renderButton
                          color='white'
                          textColor='pink'
                          title='Reject'
                        />
                        <_renderButton
                          color='pink'
                          textColor='white'
                          title={'Approve'}
                        />
                      </>
                    );

                  case 'BIRTHDAY':
                    return (
                      <>
                        <_renderButton
                          color='thistle'
                          textColor='white'
                          title={'Wish Birthday'}
                        />
                      </>
                    );
                  case 'ANNIVERSARY':
                    return (
                      <>
                        <_renderButton
                          color='lightseagreen'
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

export const EmptyDiv = ({}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: 'calc(100% / 7 - 8px)',
        minHeight: '250px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        m: 0.5,
        // borderTop: '3px solid lightgray',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      ></Box>
    </Box>
  );
};
