import React from 'react'
import AuthPageHeading from './AuthPageHeading'
import { Container, Button } from '../components'
import { Outlet } from 'react-router-dom'

const AuthPage = () => {
  return (
    <Container>
      <>
        <header className="flex flex-col items-center">
          <AuthPageHeading />
        </header>
        <Outlet />
      </>
    </Container>
  )
}

export default AuthPage
