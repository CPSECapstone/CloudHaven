import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Background,
  Title,
  SubText,
  ButtonRow,
  Button
} from './LandingPage.styled'

const LandingPage = () => {
  return (
    <Background>
      <Title>Welcome Home</Title>
      <SubText>It's CLOUDHAVEN!</SubText>
      <ButtonRow>
        <Button filled={false} to='/register'>
          Register
        </Button>
        <Button filled to='/login'>
          Login
        </Button>
      </ButtonRow>
    </Background>
  )
}

export default withRouter(LandingPage)
