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

  useEffect(async () => {
    try {
      const response = await axios('/users/all');
      setUser(response.data._id);
    } catch (err) {
      console.log(err + ' | Failed to get user ID');
    }
  }, [])

  useEffect(() => {
    fetchUserEvents();
  }, [userId])

  useEffect(() => {
    createEvents();
  }, [allEvents])

  const fetchUserEvents = async () => {
    try {
        const allEvents = await axios('/calendar/' + userId);
        setEvents(allEvents.data);

    } catch (err) {
        console.log(err + ' | Failed to get user events');
    }
  };

  const addEvent = async (vendorId, title, start, end, color) => {
    try {
      const res = await axios.post('/calendar/' + userId, {
        _id : userId,
        user : userId,
        vendor : vendorId,
        text : title,
        start_date : start,
        end_date : end,
        color : color
      });
      console.log(res);
    } catch (err) {
        console.log(err + ' | Failed to add new event');
    }
  };

  // Example call to addEvent after modal submit
  //addEvent(1, "HelloTest",'2021-06-06T19:10:00.000+00:00','2021-06-06T22:00:00.000+00:00',null);

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
