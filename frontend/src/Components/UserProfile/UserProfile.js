import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import caretDown from '../../Images/caretDown.png';
import Form from 'react-bootstrap/Form';
import profile from '../../Images/profileUser.png';
import settings from '../../Images/settings.png';
import spacer from '../../Images/userProfileSpacer.png';
import { UserDataPopup } from '../components';
import './UserProfile.css'
import axios from 'axios';

const UserProfile = (props) => {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ buttonText, setButtonText ] = useState('Edit');
    const [ userDataPopup, setUserDataPopup ] = useState(false);
    const [ updateProfile, setUpdateProfile ] = useState(false);

    // TO DO: pull user info from passport/backend
    const [ userData, setUserData ] = useState({
        firstName: 'Johnald',
        lastName: 'Testman',
        email: 'test@test.gov',
        phoneNumber: '555-555-5555',
        birthDate: '2021-01-01'
    })

    const [ firstNameFormData, setFirstNameFormData ] = useState({
        controlId: 'firstName',
        label: 'First Name',
        type: 'name',
        focus: null
    })
    const [ lastNameFormData, setlastNameFormData ] = useState({
        controlId: 'lastName',
        label: 'Last Name',
        type: 'name',
        focus: null
    })
    const [ emailFormData, setEmailFormData ] = useState({
        controlId: 'email',
        label: 'Email Address',
        type: 'email',
        focus: null
    })
    const [ phoneFormData, setPhoneFormData ] = useState({
        controlId: 'phoneNumber',
        label: 'Phone Number',
        type: 'tel',
        focus: null
    })
    const [ birthFormData, setBirthFormData ] = useState({
        controlId: 'birthDate',
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
            setUpdateProfile(true);
        }
    };

    const handleUserDataChange = e => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    }

    const addUserService = async (serviceId) => {
        setUpdateProfile(true);
        try {
            await axios.post('/users/vendors', {vendorId: serviceId});
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios('/users/all');
                const fetchedData = {
                    firstName: response.data.first_name,
                    lastName: response.data.last_name,
                    email: response.data.email,
                    phoneNumber: response.data.phone_number,
                    birthDate: response.data.birth_date.substring(0,10)
                }
                setUserData(fetchedData)

            } catch (err) {
                console.log(err + ' | Failed to get user data');
            }
        };
        fetchUserData();
        setUpdateProfile(false);
    }, [updateProfile]);



    const ProfileHeader = () => {
        return (
            <Container className='ProfileHeader'>
                <img src={spacer} height='130' />
                <img src={profile} height='150' />
                <Button className='EditButton' onClick={toggleEditing}>{buttonText}</Button>
            </Container>
        )
    }

    const ManageDataButton = () => {
        return (
            <Button className='ManageData' onClick={() => setUserDataPopup(true)}>
                <img className='SettingsIcon' src={settings} height='30' />
                <a className='ManageDataText'> <u>Manage Data</u> </a>
            </Button>
        )
    }

    return (
        <Container className='UserProfileWrapper'>
            <div className='Popup'>
                <UserDataPopup display={userDataPopup} onClose={() => setUserDataPopup(false)}/>
            </div>
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
                                            name={firstNameFormData.controlId}
                                            type={firstNameFormData.type}
                                            value={userData.firstName}
                                            onChange={handleUserDataChange}
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={lastNameFormData.controlId}>
                                        <Form.Label>{lastNameFormData.label}</Form.Label>
                                        <Form.Control
                                            name={lastNameFormData.controlId}
                                            type={lastNameFormData.type}
                                            value={userData.lastName}
                                            onChange={handleUserDataChange}
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId={emailFormData.controlId}>
                                        <Form.Label>{emailFormData.label}</Form.Label>
                                        <Form.Control
                                            name={emailFormData.controlId}
                                            type={emailFormData.type}
                                            value={userData.email}
                                            onChange={handleUserDataChange}
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={phoneFormData.controlId}>
                                        <Form.Label>{phoneFormData.label}</Form.Label>
                                        <Form.Control
                                            name={phoneFormData.controlId}
                                            type={phoneFormData.type}
                                            value={userData.phoneNumber}
                                            onChange={handleUserDataChange}
                                            disabled={!isEditing} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId={birthFormData.controlId}>
                                        <Form.Label>{birthFormData.label}</Form.Label>
                                        <Form.Control
                                            name={birthFormData.controlId}
                                            type={birthFormData.type}
                                            value={userData.birthDate}
                                            onChange={handleUserDataChange}
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

            <div className='ManageDataDiv'>
                <ManageDataButton/>
            </div>

        </Container>



    )
}

export default UserProfile;
