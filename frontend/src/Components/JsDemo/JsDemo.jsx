import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {TextField, Button, Container} from '@material-ui/core';
import axios from 'axios';
import {login} from '../Login/Login';

const JsDemo = () => {
  /**
   * Renders the registration form
   * @return {Container} - Returns the rendered registration form
   */

  const fetchJs = () => {
    axios.get('/fakeVendor/js')
       .then((res) => {
          if (res.status === 200) {
            //  login(email, password);
            console.log("this doesnt work: ");
            console.log(res);
          } else {
             console.log('fetch failed');
          }
       })
       .catch((err) => console.log('Error in logging in', err));
  }

  return (
    <Container maxWidth='sm'>
      <Container maxWidth='sm'>
        <h2>Foreign JS execution demo</h2>
      </Container>
      <Button
        onClick={fetchJs}
        fullWidth
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
    </Container>
  );
};

export default withRouter(JsDemo);

