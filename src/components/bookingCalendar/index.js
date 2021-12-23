import React, { useEffect, useState, useRef } from 'react';
import { Box, Icon, Popover, Typography, Button } from '@mui/material';
import useDates from '../../hooks/useDate';
import moment from 'moment';
import CalendarFilter from './calendarFilters';
import mockCalendarEvents from '../../resources/mockCalendarEvents';
import CalendarDatePicker from './calendarDatePicker';

const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

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

const DayDiv = ({ day, filter }) => {
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
      onClick={() =>
        alert(
          `hello ${moment(day.fullDate).format('dddd')}, ${moment(
            day.fullDate
          ).format('Do MMM YYYY')} `
        )
      }
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
        borderTop:  moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
        moment(day.fullDate).isSame(new Date().toISOString(), 'month')
          ? '4px solid #EEBC1D'
          : '4px solid gray',
        m: 0.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          px: 0.5,
          color: 'gray',
        }}
      >
        <h6
          style={{
            backgroundColor:
              moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
              moment(day.fullDate).isSame(new Date().toISOString(), 'month') &&
              'darkslategray',
            color:
              moment(day.fullDate).isSame(new Date().toISOString(), 'day') &&
              moment(day.fullDate).isSame(new Date().toISOString(), 'month') &&
              '#EEBC1D',
            padding: '10px',
            marginBlock: 0,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderRadius: '50%',
          }}
        >
          {day.day < 10 ? `0${day.day}` : day.day}
        </h6>
      </Box>
      <Box sx={{ my: 0.5 }}>
        {filteredArray.map((event) => {
          if (moment(day.fullDate).isSame(new Date(event.dates))) {
            return <_renderDayEvents event={event} />;
          }
        })}
      </Box>
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
            mx: 1,
            borderRadius: '7px',
            px: 1.5,
            display: 'flex',
            alignItems: 'center',
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
        <Icon sx={{ mr: 3 }}>{event.icon}</Icon>
        <p>{`${event.employeeName}'s`}</p>
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

const EmptyDiv = ({}) => {
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

export default function BookingCalendar() {
  const [value, setValue] = useState(new Date());
  const [filter, setFilter] = useState({
    leave: true,
    birthday: true,
    anniversary: true,
  });
  const { days } = useDates({ dates: value });

  return (
    <div style={{ padding: '15px' }}>
      <CalendarDatePicker value={value} setValue={setValue} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: { xs: '25%', md: '15%' },
            backgroundColor: 'whitesmoke',
            height: 'calc(75vh + 50px)',
            borderRadius: '15px',
          }}
        >
          <CalendarFilter filter={filter} setFilter={setFilter} />
        </Box>
        <Box
          sx={{
            // border: '1px solid gray',
            // borderRadius: '15px',
            overflow: 'hidden',
            width: { xs: '100%', sm: '100%', md: '85%' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              // borderBottom: '1px solid gray',
            }}
          >
            {dayofWeek.map((day) => (
              <Box
                sx={{
                  width: 'calc(100% / 7 - 2px)',
                  mx: 1.5,
                  fontWeight: 'bold',
                }}
              >
                {day}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              backgroundColor: 'white',
              height: '75vh',
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              overflow: 'scroll',
            }}
          >
            {days.map((day, index) => {
              if (index === 0) {
                return (
                  <>
                    {Array.from({ length: day.hari }, (_, k) => (
                      <EmptyDiv day={day} />
                    ))}
                    <DayDiv day={day} filter={filter} />
                  </>
                );
              }

              return <DayDiv day={day} filter={filter} />;
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
