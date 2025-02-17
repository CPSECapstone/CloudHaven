import calendar from "../../Images/calendar.png";
import chatBubble from "../../Images/chat.png";
import React from "react";
import MyCalendar from "../Calendar/Calendar";
import { Calendar } from "../Calendar/Calendar";
import Chat from "../Chat/Chat";
import { Tabs, Tab } from "react-bootstrap";
import "./TabSystem.css";
import UserProfile from "../UserProfile/UserProfile";

export default (props) => {
  return (
    <Tabs
      defaultActiveKey="DynamicTab"
      id="uncontrolled-tab-example"
      className="Tabs"
    >
      <Tab
        eventKey="DynamicTab"
        title={
          <span>
            {" "}
            <img
              className="TabIcon"
              src={props.dynamicTabIcon}
              height="30"
            />{" "}
            {props.dynamicTabTitle}{" "}
          </span>
        } /* Add components to the first tab dynamically using props */
      >
        <UserProfile />
      </Tab>
      <Tab
        eventKey="Messages"
        title={
          <span>
            {" "}
            <img
              className="TabIcon"
              src={chatBubble}
              height="30"
            /> Messages{" "}
          </span>
        }
      >
        <Chat />
      </Tab>
      <Tab
        eventKey="Calendar"
        title={
          <span>
            {" "}
            <img className="TabIcon" src={calendar} height="30" /> Calendar{" "}
          </span>
        }
      >
        <MyCalendar />
      </Tab>
    </Tabs>
  );
};
