import * as React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-awesome-calendar';
import { Frame } from "./Calendar.styled";

const events = [{
  id: 1,
  color: '#fd3153',
  from: '2021-05-02T18:00:00+00:00',
  to: '2021-05-05T19:00:00+00:00',
  title: 'This is an event',
  vendorId: '12'
}, {
  id: 2,
  color: '#1ccb9e',
  from: '2021-05-01T13:00:00+00:00',
  to: '2021-05-05T14:00:00+00:00',
  title: 'This is another event'
}, {
  id: 3,
  color: '#3694DF',
  from: '2021-05-05T13:00:00+00:00',
  to: '2021-05-05T20:00:00+00:00',
  title: 'This is also another event'
}];

export class MyCalendar extends React.Component {
  render () {
    return (
      <Frame>
        <Calendar/>
      </Frame>
    )
  }
}
