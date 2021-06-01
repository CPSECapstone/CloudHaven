import * as React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-awesome-calendar';
import { Frame } from "./Calendar.styled";
import axios from 'axios';

function MyCalendar() {

  const [allEvents, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, [])

  const [allEvents, setEvents] = useState([]);
  let events = [];

  useEffect(() => {
    fetchUser();
    fetchEvents();
  }, [])

  /*
  Calls calendar init route

  const fetchEvents = () => {
    fetch("http://localhost:4000/calendar/:user")
      .then(res => res.text())
      .catch(err => console.err(err))
  }
  */  

  const fetchEvents = async () => {
    events.push({
      id: 1,
      color: '#3694DF',
      from: '2021-06-05T13:00:00+00:00',
      to: '2021-06-05T20:00:00+00:00',
      title: "new EVENT"
    });
  }

  const fetchUser = async () => {
    try {
        const response = await axios('/users/all');
        console.log(response.data)
    } catch (err) {
        console.log(err + ' | Failed to get user data');
    }
  };
  
  return (
    <Frame>
      <Calendar
        events = {events}
      />
    </Frame>
      
  )
}

export default MyCalendar;
