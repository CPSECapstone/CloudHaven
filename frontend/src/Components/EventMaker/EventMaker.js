import React from "react";
import { Container } from "./Container";
import "./index.css"
import axios from 'axios';


const EventMaker = () => {
  const triggerText = "Add Event";

  
  const onSubmit = (event) => {
    event.preventDefault(event);
    let name = event.target.name.value;
    let start = new Date(event.target.start.value);
    let end = new Date(event.target.end.value);
    
    
    addEvent(null, name, start, end, 0x5442f5);

    // console.log(event);
    // console.log(event.target);
    console.log(event.target.name.value);
    console.log(event.target.start.value);
    console.log(event.target.end.value);
    console.log(event.target.vendor.value);
    
  };
  return (
    <div className="App">
      <Container triggerText={triggerText} onSubmit={onSubmit}/>
    </div>
  );
};

export default EventMaker;



const addEvent = async (vendorId, title, start, end, color) => {
  try {
    const response = await axios('/users/all');
    
    let userId = response.data._id; 

    const res = await axios.post('/calendar/' + userId, {
      user : userId,
      //vendor to be implemented later
      vendor : null,
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

