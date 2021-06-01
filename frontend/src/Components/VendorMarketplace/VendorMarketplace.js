import React, {useState} from 'react';
import SearchBar from './SearchBar.js';
import Content from './Content.js';
import { SideBar, TopBar } from '../components';

const VendorMarketplace = () => {
  const [search, setSearch] = useState('');
  const [updateSideBar, setUpdateSideBar] = useState(false);

  return (
    <div>
      <div id="HomePage">
        <SideBar updateSideBar={updateSideBar} setUpdateSideBar={setUpdateSideBar}/>
        <div id="PageFrame">
            <TopBar />
            <div id="MainContent">
            <SearchBar onChange={(value) => setSearch(value)}/>
            <Content searchInput={search} setUpdateSideBar={setUpdateSideBar}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default VendorMarketplace;
