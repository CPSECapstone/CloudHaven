import React from "react";
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import caretDown from "../../Images/caretDown.png";
import Form from 'react-bootstrap/Form';
import profile from "../../Images/profileUser.png";
import settings from "../../Images/settings.png";
import spacer from "../../Images/userProfileSpacer.png";
import { UserDataPopup } from "../components";
import './UserProfile.css'

const UserProfile = () => {

    const [ editing, setEditing ] = React.useState(false);

    // TO DO: pull user info from passport/backend
    const [ firstName, setFirstName ] = React.useState('Johnald');
    const [ lastName, setLastName ] = React.useState('Testman');
    const [ email, setEmail ] = React.useState('test@test.gov');
    const [ phoneNumber, setPhoneNumber ] = React.useState('555-555-5555');
    const [ birthDate, setBirthDate ] = React.useState('2021-01-01');
    const [ buttonText, setButtonText ] = React.useState("Edit");
    const [ userDataPopup, setUserDataPopup ] = React.useState(false)

    const [ firstNameFormData, setFirstNameFormData ] = React.useState({
        controlId: 'formFirstName',
        label: 'First Name',
        type: 'name',
        focus: null
    })
    const [ lastNameFormData, setlastNameFormData ] = React.useState({
        controlId: 'formlastName',
        label: 'Last Name',
        type: 'name',
        focus: null
    })
    const [ emailFormData, setEmailFormData ] = React.useState({
        controlId: 'formEmail',
        label: 'Email Address',
        type: 'email',
        focus: null
    })
    const [ phoneFormData, setPhoneFormData ] = React.useState({
        controlId: 'formPhone',
        label: 'Phone Number',
        type: 'tel',
        focus: null
    })
    const [ birthFormData, setBirthFormData ] = React.useState({
        controlId: 'formBirth',
        label: 'Date of Birth',
        type: 'date',
        focus: null
    })

    const toggleEditing = () => {
        setEditing(!editing);

        if (!editing) {
            setButtonText("Save")
        }
        else {
            setButtonText("Edit")
        }
    };

    const ProfileHeader = () => {
        return (
            <Container className='d-flex align-items-start justify-content-between'>
                <img src={spacer} height="130" />
                <img src={profile} height="150" />
                <EditButton/>
            </Container>
        )
    }

    const EditButton = () => {
        return (
            <Button className='EditButton' onClick={toggleEditing}>{buttonText}</Button>
        )
    }

    const ManageDataButton = () => {
        return (
            <div className='ManageData' onClick={setUserDataPopup(true)}>
                <img className="SettingsIcon" src={settings} height="30" />
                <a className="ManageDataText"> <u>Manage Data</u> </a>
            </div>
        )
    }


    return (
        <Container className='UserProfileWrapper'>
            <div className="Popup">
                <UserDataPopup display={userDataPopup} onClose={() => setUserDataPopup(false)}/>
            </div>
            <ProfileHeader/>
                <header className="AccordionHeader">Personal Information</header>
            <Accordion className='InfoAccordion'>
                <Card className='AccordionCard'>
                    <Accordion.Toggle as={Card.Body} eventKey="0" >
                        <img className="Caret" src={caretDown} height="30" />
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId={firstNameFormData.controlId}>
                                        <Form.Label>{firstNameFormData.label}</Form.Label>
                                        <Form.Control
                                            type={firstNameFormData.type}
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            disabled={!editing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={lastNameFormData.controlId}>
                                        <Form.Label>{lastNameFormData.label}</Form.Label>
                                        <Form.Control
                                            type={lastNameFormData.type}
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            disabled={!editing} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId={emailFormData.controlId}>
                                        <Form.Label>{emailFormData.label}</Form.Label>
                                        <Form.Control
                                            type={emailFormData.type}
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            disabled={!editing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={phoneFormData.controlId}>
                                        <Form.Label>{phoneFormData.label}</Form.Label>
                                        <Form.Control
                                            type={phoneFormData.type}
                                            value={phoneNumber}
                                            onChange={e => setFirstName(e.target.value)}
                                            disabled={!editing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={birthFormData.controlId}>
                                        <Form.Label>{birthFormData.label}</Form.Label>
                                        <Form.Control
                                            type={birthFormData.type}
                                            value={lastName}
                                            onChange={e => setFirstName(e.target.value)}
                                            disabled={!editing} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <header className="AccordionHeader">Other Information</header>
            <Accordion className='InfoAccordion'>
                <Card className='AccordionCard'>
                    <Accordion.Toggle as={Card.Body} eventKey="0" >
                        <img className="Caret" src={caretDown} height="30" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Other information goes here.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <ManageDataButton/>

        </Container>



    )
}

export default UserProfile;
