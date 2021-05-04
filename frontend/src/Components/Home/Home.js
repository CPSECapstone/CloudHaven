import profile from "../../Images/profileUser.png";
import React from "react";
import { SideBar, TopBar, TabSystem } from '../components';
import UserProfile from "../UserProfile/UserProfile";
import {withRouter} from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div id="HomePage">
            <SideBar />
            <div id="PageFrame">
                <TopBar />
                <div id="MainContent">
                <TabSystem dynamicTabIcon={profile} dynamicTabTitle="User Profile" dynamicTabContent={<UserProfile/>}/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Home);
