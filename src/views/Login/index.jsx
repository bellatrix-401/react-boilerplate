import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components'
import {
  Background,
  Card,
  Form,
  LoginContainer,
  LoginText,
  Welcome
} from './styles'

const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <Background />
      <Welcome>Welcome!</Welcome>
      <Card>
        <LoginContainer>
          <LoginText>Sign in with credentials</LoginText>
          <Form>
            <Input type={'email'} placeholder={'Email'} />
            <Input type={'password'} placeholder={'Password'} />
            <Button label={'Sign in'} onClick={handleClick} />
          </Form>
        </LoginContainer>
      </Card>
    </>
  )
}

export default Login
