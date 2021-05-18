import { AppDataRow } from "../components";
import { Container, Row, Button, Col } from "react-bootstrap";
import React from "react";
import "./UserDataPopup.css";
import Instagram from "../../Images/instagram.png";
import Chat from "../../Images/chat.png";
import Cloud from "../../Images/cloudHavenSiteIcon.png";

const mockVendorAppData = [
    {vendorAppName: "Apollo Healthcare", venderAppIcon: Instagram},
    {vendorAppName: "Carl's Cars", venderAppIcon: Chat},
    {vendorAppName: "Cloud Support", venderAppIcon: Cloud}
];

const renderDataPopup = () => {     
    return mockVendorAppData.map((app) => {
        return (
            <Row>
                <AppDataRow name={app.vendorAppName} icon={app.venderAppIcon}/>
            </Row>
        )
    })
}

export default (props) => {

    if (!props.display) {
        return null;
    }
    return (
        <Container className="DataPopup">
            <Row className="ButtonRow">
                <Button className="CloseButton" onClick={() => props.onClose()}>
                    X
                </Button>
            </Row>
            <Row className="Headings">
                <Col className="HeadingTextLeft">
                    Share Personal Information
                </Col>
                <Col className="HeadingTextRight">
                    Share Other Information
                </Col>
            </Row>
            {renderDataPopup()}
        </Container>
    )
}