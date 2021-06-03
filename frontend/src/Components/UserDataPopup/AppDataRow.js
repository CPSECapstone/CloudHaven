import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import profile from "../../Images/profileUser.png";
import checkmark from "../../Images/black-checkmark.png";
import './AppDataRow.css';

export default props => {

    return (
        <Container>
            <Row className="AppDataRow">
                <Col>
                    <div className="VendorIcon">
                    <i className="fa fa-home fa-lg fa-fw">{props.icon}</i>
                    </div>
                </Col>
                <Col>
                    <div class="VendorName">
                        <b>{props.name}</b>
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
                
            </Row>
        </Container>
    )

}
