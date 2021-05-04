import { Container } from "react-bootstrap";
import React from "react";
import "./UserDataPopup.css";

export default (props) => {

    if (!props.display) {
        return null;
    }
    return (
        <Container className="DataPopup">
            hello
        </Container>
    )
}