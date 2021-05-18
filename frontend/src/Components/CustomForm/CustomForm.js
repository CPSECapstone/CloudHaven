import React, {useState, useEffect} from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import './CustomForm.css';

const testFormName = "FormName";

export default props => {

    useEffect(() => {
        getFormData()
    }, []);
    
    const [formFields, setFormFields] = useState([]);
    const [validated, setValidated] = useState(false);

    const FormField = (props) => {
        const { required, validate, fieldType, label, placeholder } = props;
        if (required) {
            return (
                <Col xs={getColumnSize(fieldType)}>
                    <Form.Group>
                        <Form.Label>{label}</Form.Label>
                        {required ?
                            <Form.Control required type={fieldType} placeholder={placeholder ? placeholder : ""}/>
                            :
                            <Form.Control type={fieldType} placeholder={placeholder ? placeholder : ""}/>
                        }
                        {validate ?
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid input
                            </Form.Control.Feedback>
                            :
                            null
                        }
                    </Form.Group>
                </Col>
            )
        }
        return (
            <Col xs={getColumnSize(fieldType)}>
                <Form.Group>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type={fieldType} placeholder={placeholder ? placeholder : ""}/>
                </Form.Group>
            </Col>
        );
    }

    const getFormData = () => {
        setFormFields(props.fields)
    };

    // TODO: add all columned fields
    const getColumnSize = (fieldType) => {
        const smallFields = ["textbox", "phoneNumber", "password"];
        return smallFields.includes(fieldType) ? 6 : 12;
    };

    // TODO: add checks for as=textarea rather than type="..."
    const populateForm = () => {
        return formFields.map((field) => {
            return (
                <FormField required={field.Required} validate={field.Validate} 
                    fieldType={field.Child} label={field.label} placeholder={field.placeholder} />
            )
        });
    };

    const submitForm = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        }

        setValidated(true);
    }

    return (
        <Container className="CustomFormContainer">
            <h1>
                {props.name}
            </h1>
            <Container className="FormBox">
                <Form noValidate validated={validated} onSubmit={submitForm}>
                    <Row>
                        {populateForm()}
                    </Row>
                    <Button className="SubmitButton" type="submit">
                        <b>Submit</b>
                    </Button>
                </Form> 
            </Container>
        </Container>
    )
}
