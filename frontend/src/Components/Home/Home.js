import profile from "../../Images/profile-user.png";
import React from "react";
import { TabSystem } from '../components';
import './Home.css';

function Home() {
    return (
        <TabSystem dynamicTabIcon={profile} dynamicTabTitle="User Profile"/>
    );
}

export default Home;
