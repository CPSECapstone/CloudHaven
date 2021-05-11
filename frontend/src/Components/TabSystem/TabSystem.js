import calendar from "../../Images/calendar.png";
import chatBubble from "../../Images/chat.png";
import React from "react";
import { Calendar } from '../Calendar/Calendar';
import { Tabs, Tab } from 'react-bootstrap';
import "./TabSystem.css";

export default (props) => {
    return (
        <Tabs defaultActiveKey="DynamicTab" id="uncontrolled-tab-example" className="Tabs">
            <Tab eventKey="DynamicTab" title={
					<span> <img className="TabIcon" src={props.dynamicTabIcon} height="30"/> {props.dynamicTabTitle} </span>
				}>
               Add components to the first tab dynamically using props
            </Tab>
            <Tab eventKey="Messages" title={
					<span> <img className="TabIcon" src={chatBubble} height="30"/> Messages </span>
				}>
               Messages goes here. 
            </Tab>
            <Tab eventKey="Calendar" title={
					<span> <img className="TabIcon" src={calendar} height="30"/> Calendar </span>
				}>
                <Calendar/>
            </Tab>
        </Tabs>
    )
}
