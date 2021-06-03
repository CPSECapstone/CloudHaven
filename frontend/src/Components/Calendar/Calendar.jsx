import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Frame,
    Header,
    Button,
    Body,
    Day
} from "./Calendar.styled"

import {
    DAYS,
    DAYS_LEAP,
    DAYS_OF_THE_WEEK,
    MONTHS
} from "../../Utils/constants"

export function Calendar() {

  const getStartDayOfMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));


  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  return (
    <Frame>
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((dayName, index) => (
          <Day key={dayName}>
            <strong>{dayName}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const dayName = index - (startDay - 2);
            return (
              <Day
                key={index}
                isToday={dayName === today.getDate()}
                isSelected={dayName === day}
                onClick={() => setDate(new Date(year, month, dayName))}
              >
                {dayName > 0 ? dayName : ''}
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
}
