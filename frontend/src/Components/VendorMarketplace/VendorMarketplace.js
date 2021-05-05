import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import Content from './Content.js';
import { SideBar, TopBar } from '../components';


/**
 * VendorMarketplace component. 
 */

//  * NEEDS TO BE MADE INTO FUNCTIONAL COMPONENT
class Homepage extends Component {
  /**
   * @param {*} props - not used
   */
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  /**
   * Renders vendor marketplace
   * @return {div} - Returns the marketplace components
   */
  render() {
    return (
      <div>
        <div id="HomePage">
          <SideBar />
          <div id="PageFrame">
              <TopBar />
              <div id="MainContent">
              <SearchBar onChange={(value) => this.setState({search: value})}/>
              <Content searchInput={this.state.search}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Homepage;
