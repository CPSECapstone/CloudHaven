import * as React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-awesome-calendar';
import { Frame } from "./Calendar.styled";

function MyCalendar() {
  
  const [allEvents, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, [])

  const fetchEvents = () => {

  }
  
  let events = [];
  
  // Example Event
  events.push({
    id: 1,
    color: '#3694DF',
    from: '2021-05-05T13:00:00+00:00',
    to: '2021-05-05T20:00:00+00:00',
    title: "new EVENT"
  });

  console.log(events);
  
  return (
    <Frame>
      <Calendar
        events = {events}
      />
    </Frame>
      
  )
}

export default MyCalendar;
