import React from 'react'
import { Container } from '../components' 
import AuthPageHeading from './AuthPageHeading'

const AuthPage = () => {

  return (
    <Container>
      <>
        <header className="flex flex-col items-center">
          <AuthPageHeading />
        </header>
      </>
    </Container>
  )
}

export default AuthPage
