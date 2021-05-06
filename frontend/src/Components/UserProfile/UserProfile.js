import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import profile from '../../Images/profileUser.png';
import settings from '../../Images/settings.png'
import spacer from '../../Images/userProfileSpacer.png';
import caretDown from '../../Images/caretDown.png';
import './UserProfile.css'

const UserProfile = () => {

    const [ isEditing, setIsEditing ] = useState(false);

    // TO DO: pull user info from passport/backend
    const [ firstName, setFirstName ] = useState('Johnald');
    const [ lastName, setLastName ] = useState('Testman');
    const [ email, setEmail ] = useState('test@test.gov');
    const [ phoneNumber, setPhoneNumber ] = useState('555-555-5555');
    const [ birthDate, setBirthDate ] = useState('2021-01-01');
    const [ buttonText, setButtonText ] = useState('Edit')

    const [ firstNameFormData, setFirstNameFormData ] = useState({
        controlId: 'formFirstName',
        label: 'First Name',
        type: 'name',
        focus: null
    })
    const [ lastNameFormData, setlastNameFormData ] = useState({
        controlId: 'formlastName',
        label: 'Last Name',
        type: 'name',
        focus: null
    })
    const [ emailFormData, setEmailFormData ] = useState({
        controlId: 'formEmail',
        label: 'Email Address',
        type: 'email',
        focus: null
    })
    const [ phoneFormData, setPhoneFormData ] = useState({
        controlId: 'formPhone',
        label: 'Phone Number',
        type: 'tel',
        focus: null
    })
    const [ birthFormData, setBirthFormData ] = useState({
        controlId: 'formBirth',
        label: 'Date of Birth',
        type: 'date',
        focus: null
    })

    const toggleEditing = () => {
        setIsEditing(!isEditing);

        if (!isEditing) {
            setButtonText('Save')
        }
        else {
            setButtonText('Edit')
        }
    };

    const profileHeader = () => {
        return (
            <Container className='d-flex align-items-start justify-content-between'>
                <img src={spacer} height='130' />
                <img src={profile} height='150' />
                <EditButton/>
            </Container>
        )
    }

    const editButton = () => {
        return (
            <Button className='EditButton' onClick={toggleEditing}>{buttonText}</Button>
        )
    }

    const manageDataButton = () => {
        return (
            <Nav
                className='justify-content-center'
                activeKey='/home'
                onSelect={(selectedKey) => alert(`${selectedKey} goes here`)}
            >
                <img className='SettingsIcon' src={settings} height='30' />
                <Nav.Link className='ManageDataText' eventKey='ManageDataPopup'> <u>Manage Data</u></Nav.Link>
            </Nav>
        )
    }


    return (
        <Container className='UserProfileWrapper'>
            <ProfileHeader/>
                <header className='AccordionHeader'>Personal Information</header>
            <Accordion className='InfoAccordion'>
                <Card className='AccordionCard'>
                    <Accordion.Toggle as={Card.Body} eventKey='0' >
                        <img className='Caret' src={caretDown} height='30' />
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0'>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId={firstNameFormData.controlId}>
                                        <Form.Label>{firstNameFormData.label}</Form.Label>
                                        <Form.Control
                                            type={firstNameFormData.type}
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={lastNameFormData.controlId}>
                                        <Form.Label>{lastNameFormData.label}</Form.Label>
                                        <Form.Control
                                            type={lastNameFormData.type}
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            disabled={!isEditing} />
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
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={phoneFormData.controlId}>
                                        <Form.Label>{phoneFormData.label}</Form.Label>
                                        <Form.Control
                                            type={phoneFormData.type}
                                            value={phoneNumber}
                                            onChange={e => setFirstName(e.target.value)}
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={birthFormData.controlId}>
                                        <Form.Label>{birthFormData.label}</Form.Label>
                                        <Form.Control
                                            type={birthFormData.type}
                                            value={lastName}
                                            onChange={e => setFirstName(e.target.value)}
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <header className='AccordionHeader'>Other Information</header>
            <Accordion className='InfoAccordion'>
                <Card className='AccordionCard'>
                    <Accordion.Toggle as={Card.Body} eventKey='0' >
                        <img className='Caret' src={caretDown} height='30' />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
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
