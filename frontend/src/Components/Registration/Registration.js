import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {TextField, Button, Container} from '@material-ui/core';
import axios from 'axios';
import {makeLoginPost as login} from '../Login/Login';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ssn, setSsn] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [birthday, setBirthday] = useState('');

  /** Handles registration attempt */
  const handleSubmit = async () => {
    if (validateEntries()) {
      registerUser();
    }
  }

  /** Sends registration information to DB  */
  const registerUser = async () => {
    axios.post('/users/register',
       {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          birth_date: birthday,
          ssn
       })
       .then((res) => {
          if (res.status === 200) {
             login(email, password);
          } else {
             console.log('Registration fail');
          }
       })
       .catch((err) => {
        console.log('error in logging in', err);
        setEmailError('Email is already registered');
      });
  }

  /** Checks to make sure passwords match
  * @return {boolean} - Returns true if passwords match, false otherwise
  */
  const validateEntries = () => {
    let validated = true;
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      validated = false;
    } else {
      setPasswordError(null);
    }
    if (!(email.includes('@') && email.includes('.'))) {
      setEmailError('Invalid email');
      validated = false;
    } else {
      setEmailError(null)
    }
    return validated;
  };

  /**
   * Renders the registration form
   * @return {Container} - Returns the rendered registration form
   */
  return (
    <Container maxWidth='xs'>
      <Container maxWidth='sm'>
        <h2>CloudHaven Registration</h2>
      </Container>
      <TextField
        id="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="email"
        label="Email"
        error={emailError ? true : false}
        helperText={emailError ? emailError : null}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="first_name"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="first_name"
        label="First_Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        id="last_name"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="last_name"
        label="Last_Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        id="phone_number"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="phone_number"
        label="Phone_Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        id="birthday"
        variant="outlined"
        margin="normal"
        type="date"
        required
        fullWidth
        name="birthday"
        label="Date of Birth"
        defaultValue={new Date().toJSON().slice(0,10)}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <TextField
        id="ssn"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="ssn"
        label="SSN"
        onChange={(e) => setSsn(e.target.value)}
      />
      <TextField
        id="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        error={passwordError ? true : false}
        helperText={passwordError ? passwordError : null}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        id="cpassword"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        error={passwordError ? true : false}
        helperText={passwordError ? passwordError : null}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
      <p className="message">
        Already have an account?
        <Link to="/login"> Sign In</Link>
      </p>
    </Container>
  );
};

export default withRouter(Registration);
