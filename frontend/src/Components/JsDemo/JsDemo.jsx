import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {TextField, Container} from '@material-ui/core';
import axios from 'axios';
import {login} from '../Login/Login';
import {
  Background,
  Title,
  SubText,
  ButtonRow,
  Button
} from './JsDemo.styled'



const JsDemo = () => {
  /**
   * Renders the registration form
   * @return {Container} - Returns the rendered registration form
   */

  const fetchJs = () => {
    axios.get('/fakeVendor/js')
       .then((res) => {
          if (res.status === 200) {
            console.log(res);
          } else {
             console.log('fetch failed');
          }
       })
       .catch((err) => console.log('Error in logging in', err));
  }

  return (
    <Background>
    <Container maxWidth='sm'>
      <Title>
        <Container maxWidth='sm'>
          <h2>Foreign JS Execution Demo</h2>
        </Container>
      </Title>
      <Button
        onClick={fetchJs}
        fullWidth
        variant="contained"
        color="primary"
      >
        Create Dynamic Component
      </Button>
    </Container>
    </Background>

  );
};

export default withRouter(JsDemo);

