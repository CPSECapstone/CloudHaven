import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Login.css';

const login = async (email, password, stateSetter) => {
  const res = await makeLoginPost(email, password);
  if (res === 401 || res === 404) {
    stateSetter(true);
  }
}

export const makeLoginPost = async (email, password) => {
  if (!email || !password) {
    alert('email and password required!');
    return 401;
  }
  const res = await axios.post('/login', {
    email: email,
    password: password,
  })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('loggedIn', 'yup');
          window.location.assign('/home');
          return 200;
        } else {
          console.log('login fail');
          return 401;
        }
      })
      .catch((err) => { console.log('login error');
      return 401; });
  return res;
}

/**
 *
 * @return {*}
 */
const Login = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  return (
    <Container component='div' maxWidth='xs'>
      <Container component='div' maxWidth='sm'>
        <h2 className = 'Title'>CloudHaven Login</h2>
      </Container>
      <form className= 'LoginForm'>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          error={loginError}
          helperText={loginError ? "Incorrect username or password." : null}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Passord"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() =>
            login(loginUsername, loginPassword, setLoginError)}>
          Sign In
        </Button>
        <p className="message">
          New to Cloudhaven?
          <Link to="/register"> Register</Link>
        </p>
      </form>
    </Container>
  );
};

export default withRouter(Login);
