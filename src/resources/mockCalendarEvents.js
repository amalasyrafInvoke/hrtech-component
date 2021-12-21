const mockCalendarEvents = [
  {
    dates: new Date('2021/12/10').toISOString(),
    type: 'LEAVE',
    name: 'Annual Leave',
    employeeName: 'Zhafri',
    icon: 'work_off'
  },
  {
    dates: new Date('2021/12/01').toISOString(),
    type: 'BIRTHDAY',
    name: '26th Birthday',
    employeeName: 'Amal',
    icon: 'cake'
  },
  {
    dates: new Date('2022/01/07').toISOString(),
    type: 'ANNIVERSARY',
    name: '2nd year Anniversary',
    employeeName: 'Zhafri',
    icon: 'celebration'
  },
  {
    dates: new Date('2021/12/19').toISOString(),
    type: 'BIRTHDAY',
    name: '18th Birthday',
    employeeName: 'Arwin',
    icon: 'cake'
  },
  {
    dates: new Date('2021/12/31').toISOString(),
    type: 'LEAVE',
    name: 'Sick Leave',
    employeeName: 'Azizi',
    icon: 'work_off'
  },
];

export default mockCalendarEvents;