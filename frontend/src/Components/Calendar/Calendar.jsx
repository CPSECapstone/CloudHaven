import * as React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-awesome-calendar';
import { Frame } from "./Calendar.styled";

function MyCalendar() {

  const [allEvents, setEvents] = useState([]);

  useEffect(() => {
    //fetchEvents();
    fetchUser();
  }, [])

  /*
  Calls calendar init route

  const fetchEvents = () => {
    fetch("http://localhost:4000/calendar/:user")
      .then(res => res.text())
      .catch(err => console.err(err))
  }
  */  

  const fetchUser = () => {
    fetch("http://localhost:4000//users/all")
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => console.err(err))
  }

  let events = [];

  // Example Event
  events.push({
    id: 1,
    color: '#3694DF',
    from: '2021-07-05T13:00:00+00:00',
    to: '2021-07-05T20:00:00+00:00',
    title: "new EVENT"
  });
  
  return (
    <Frame>
      <Calendar
        events = {events}
      />
    </Frame>
      
  )
}

export default MyCalendar;
