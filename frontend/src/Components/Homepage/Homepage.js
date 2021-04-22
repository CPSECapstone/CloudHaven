import React, {Component} from 'react';
import TopMenu from './TopMenu.js';
import Content from './Content.js';
import profile from "../../Images/profile-user.png";
import { TabSystem } from '../components';

/**
 * Homepage component.
 */
class Homepage extends Component {
  /**
   * Renders homepage
   * @return {div} - Returns the homepage components
   */
  render() {
    return (
      <div>
        <TopMenu/>
        <TabSystem dynamicTabIcon={profile} dynamicTabTitle="User Profile"/>
        <Content/>
      </div>
    );
  }
};

export default Homepage;
