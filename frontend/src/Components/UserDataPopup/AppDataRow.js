import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import profile from "../../Images/profileUser.png";
import checkmark from "../../Images/black-checkmark.png";
import './AppDataRow.css';

export default props => {
    const [vendorId, setVendorId] = useState("");
    const [vendorName, setVendorName] = useState("");

    const getVendorAppData = () => {

    };

    return (
        <Container>
            <Row className="AppDataRow">
                <Col>
                    <div className="VendorIcon">
                        <img src={profile} height="84"/>
                    </div>
                </Col>
                <Col>
                    <div class="VendorName" >
                        <b>{vendorName}</b>
                    </div>
                </Col>
                <Col className="checkbox" md={{ offset: 1 }}>
                    <input type="checkbox" />
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
                <Col className="checkbox">
                    <input type="checkbox"/>
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
                <Col className="checkbox">
                    <input type="checkbox"/>
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
                <Col className="checkbox">
                    <input type="checkbox"/>
                    <span class="overlay">
                        <img src={checkmark} class="icon" height="53"/>
                    </span>
                </Col>
            </Row>
        </Container>
    )

}
