import React from "react";
import { Container } from "./Container";
import "./index.css"

const EventMaker = () => {
  const triggerText = "Add Event";
  const onSubmit = (event) => {
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div className="App">
      <Container triggerText={triggerText}/>
    </div>
  );
};

export default EventMaker;
