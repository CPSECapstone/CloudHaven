import { AppDataRow } from "../components";
import axios from 'axios';
import { Container, Row, Button, Col } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import "./UserDataPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

export default (props) => {
    const questionMarkIcon = <FontAwesomeIcon icon={faQuestion}/>
    const [menuListItemsConfig, setMenuListItemsConfig] = useState([]);

    useEffect(() => {
        const fetchUserVendors = async () => {
            try {
                const response = await axios('/users/vendors');
                const newMenu = [];
    
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

    const renderDataPopup = () => {     
        return menuListItemsConfig.map((app) => {
            return (
                <Row>
                    <AppDataRow name={app.listID} icon={app.iconPath}/>
                </Row>
            )
        })
    }

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
