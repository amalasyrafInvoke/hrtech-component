import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function useDates({dates }) {
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [year, setYear] = useState([]);

  const makeDays = () => {
    const startDay = moment(dates).startOf('month');
    const endDay = moment(dates).endOf('month');
    let monthDiff = endDay.diff(startDay, 'day');
    const arr = [];

    // console.log(monthDiff);
    // console.log(`start ${startDay.format('D')}, end ${endDay.format('D')}`);

    while (monthDiff >= 0) {
      arr.push({day: startDay.format('D'), hari: startDay.day(), dayOfYear: startDay.dayOfYear()});
      startDay.add(1, 'days');
      monthDiff--;
    }

    setDays(arr);
  };

  const makeMonthYears = () => {

  }

  useEffect(() => {
    makeDays();
  }, [dates]);

  return { days, months, year };
}
