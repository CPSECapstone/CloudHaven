import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
    Background,
    Title,
    SubText,
    ButtonRow,
    Button,
} from "./LandingPage.styled";

class LandingPage extends Component {
    render() {
        return (
            <Background>
                <Title>Welcome Home</Title>
                <SubText>It's CLOUDHAVEN!</SubText>
                <ButtonRow>
                    <Button filled={false} to="/info">
                        How it Works
                    </Button>
                    <Button filled to="/login">
                        Get Started
                    </Button>
                </ButtonRow>
            </Background>
        );
    }
}

export default withRouter(LandingPage);
