import calendar from "../../Images/calendar.png";
import chatBubble from "../../Images/chat.png";
import profile from "../../Images/profile-user.png";
import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import "./TabSystem.css";

const TabSystem = () => {
    return (
        <Tabs defaultActiveKey="UserProfile" id="uncontrolled-tab-example" className="Tabs">
            <Tab eventKey="UserProfile" title={<span> <img className="TabIcon" src={profile} height="30"/> User Profile </span>}>
                User profile goes here.
            </Tab>
            <Tab eventKey="Messages" title={<span> <img className="TabIcon" src={chatBubble} height="30"/> Messages </span>}>
                Messages goes here. 
            </Tab>
            <Tab eventKey="Calendar" title={<span> <img className="TabIcon" src={calendar} height="30"/> Calendar </span>}>
                Calendar goes here.
            </Tab>
        </Tabs>
    )
}

export default TabSystem;
