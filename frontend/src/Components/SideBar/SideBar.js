import React, { useEffect, useState } from "react";
import './SideBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faPlus, faQuestion} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const homeIcon = <FontAwesomeIcon icon={faHome} />
const barIcon = <FontAwesomeIcon icon={faBars}/>
const questionMarkIcon = <FontAwesomeIcon icon={faQuestion}/>
const plusIcon = <FontAwesomeIcon icon={faPlus} />

const baseMenuConfig = [
    {iconPath: homeIcon, urlPath: "/", listID: "Home"},
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

const SideBar = (props) => {
    const currentPath = window.location.pathname;
    const [menuListItemsConfig, setMenuListItemsConfig] = useState(baseMenuConfig);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    useEffect(() => {
        const fetchUserVendors = async () => {
            try {
                const response = await axios('/users/vendors');
                const newMenu = [
                    {iconPath: homeIcon, urlPath: "/", listID: "Home"},
                    {iconPath: plusIcon, urlPath: "/market", listID: "VendorMarket"}
                ];

                for (const item of response.data) {
                    const config = {iconPath: questionMarkIcon, urlPath: item.home_route, listID: item.name}
                    newMenu.splice(1, 0, config)
                }

                setMenuListItemsConfig(newMenu);
            } catch (err) {
                console.log(err + ' | Failed to get user subscribed vendors');
            }
        };

        fetchUserVendors();
        if (props.setUpdateSideBar) {
            props.setUpdateSideBar(false);
        }

    }, [props.updateSideBar]);

    return(
        <div className={isSidebarOpen ? "SideBar SideBarOpen" : "SideBar SideBarClosed"}>
            <button id="Hamburger" onClick={toggleSidebar}><i className="fas fa-bars">{barIcon}</i></button>
            <ul>
                {menuListItemsConfig.map((itemConfig) => renderSidebarMenuOption(itemConfig.listID, itemConfig.iconPath, itemConfig.urlPath, currentPath===itemConfig.urlPath))}
            </ul>

        </div>
    );
}

export default SideBar;
