import { AppDataRow } from "../components";
import { Container, Row, Button } from "react-bootstrap";
import React from "react";
import "./UserDataPopup.css";

export default (props) => {

    if (!props.display) {
        return null;
    }
    return (
        <Container className="DataPopup">
            <Row className="buttonRow">
                <Button className="CloseButton" onClick={() => props.onClose()}>
                    X
                </Button>
            </Row>
            <Row>
                <AppDataRow/>
            </Row>
        </Container>
    )
}