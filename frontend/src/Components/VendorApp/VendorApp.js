import vendorAppIcon from "../../Images/instagram.png"
import React from "react";
import { TabSystem } from "../components";
import "./VendorApp.css";

export default (props) => {
    return (
        <TabSystem dynamicTabIcon={vendorAppIcon} dynamicTabTitle="Vendor App"/>
    )
} 