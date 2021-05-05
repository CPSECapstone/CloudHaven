import React, { useState } from "react";
import './SideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faPlus, faQuestion} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />
const barIcon = <FontAwesomeIcon icon={faBars}/>
const questionMarkIcon = <FontAwesomeIcon icon={faQuestion}/>
const plusIcon = <FontAwesomeIcon icon={faPlus} />

const menuListItemsConfig = [
    {iconPath: homeIcon, urlPath: "/", listID: "Home"},
    {iconPath: questionMarkIcon, urlPath: "/Test", listID: "TestApplication"},
    {iconPath: plusIcon, urlPath: "/market", listID: "VendorMarket"}
];

const renderSidebarMenuOption = (listID, iconPath, urlPath, selected) => {
    var classNameIcon = "";
    var className = "";

    if (selected) {
        classNameIcon = "Current AppIcon";
        className = "Current CurrentName Rectangle AppName";
    } else {
        classNameIcon = "IconColor AppIcon";
        className = "Rectangle AppName";
    }
    
    return(
        <li key={listID} id={listID}>
            <a href={urlPath} >
                <span className={classNameIcon}><i className="fa fa-home fa-lg fa-fw">{iconPath}</i></span>
                <span className={className}>{listID}</span>
            </a>
        </li>
    );
}

const SideBar = () => {
    const menuItems = [];
    const currentPath = window.location.pathname; 

    for (const itemConfig of menuListItemsConfig){
        menuItems.push(renderSidebarMenuOption(itemConfig.listID, itemConfig.iconPath, itemConfig.urlPath, currentPath===itemConfig.urlPath));
    }

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const className = isSidebarOpen ? "SideBar SideBarOpen" : "SideBar SideBarClosed";

    return(
        <div className={className}>
            <button id="Hamburger" onClick={showSidebar}><i className="fas fa-bars">{barIcon}</i></button>
            <ul>
                {menuItems}
            </ul>

        </div>
    );
}

export default SideBar;
