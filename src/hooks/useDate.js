import { useState, useEffect } from 'react';
import moment from 'moment';

export default function useDates({ dates }) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const makeDays = () => {
      const startDay = moment(dates).startOf('month');
      const endDay = moment(dates).endOf('month');
      let monthDiff = endDay.diff(startDay, 'day');
      const arr = [];

      while (monthDiff >= 0) {
        arr.push({
          day: startDay.format('D'),
          hari: startDay.day(),
          dayOfYear: startDay.dayOfYear(),
          fullDate: moment(startDay).format('DD MMMM yyyy'),
        });
        startDay.add(1, 'days');
        monthDiff--;
      }

      setDays(arr);
    };
    makeDays();
  }, [dates]);

  return { days };
}

export const useWeeklyDates = ({ dates }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const makeDays = () => {
      const startDay = moment(dates).startOf('week');
      const endDay = moment(dates).endOf('week');
      let weekDiff = endDay.diff(startDay, 'day');
      const arr = [];

      while (weekDiff >= 0) {
        arr.push({
          day: startDay.format('D'),
          hari: startDay.day(),
          fullDate: moment(startDay).format('DD MMMM yyyy'),
        });
        startDay.add(1, 'days');
        weekDiff--;
      }

      setDays(arr);
    };
    makeDays();
  }, [dates]);

  return { days };
};
