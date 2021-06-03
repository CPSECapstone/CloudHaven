import * as React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-awesome-calendar';
import { Frame } from "./Calendar.styled";
import EventMaker from "../EventMaker/EventMaker.js"
import axios from 'axios';

function MyCalendar() {

  const [allEvents, setEvents] = useState([]);

  useEffect(() => {
    //fetchEvents();
    fetchUser();
  }, [])

  const [allEvents, setEvents] = useState([]);
  let events = [];

  useEffect(() => {
    fetchUserEvents();
  }, [])

  useEffect(() => {
    createEvents();
  }, [allEvents])

  const fetchUserEvents= async () => {
    try {
        const response = await axios('/users/all');
        const allEvents = await axios('/calendar/' + response.data._id);
        setEvents(allEvents.data);

    } catch (err) {
        console.log(err + ' | Failed to get user events');
    }
  };

  const createEvents = () => {
    for (const event of allEvents) {
      events.push({
        id: event._id,
        color: '#3694DF',
        from: event.start_date,
        to: event.end_date,
        title: event.desc
      });
    }
  }

  return (
    <Frame>
      <EventMaker></EventMaker>
      <Calendar
        events = {events}
      />
    </Frame>
      
  )
}

export default MyCalendar;
