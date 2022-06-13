import React from 'react'
import AuthPageHeading from './AuthPageHeading'
import { Container, Button } from '../components'

const AuthPage = () => {

  return (
    <Container>
      <>
        <header className="flex flex-col items-center">
          <AuthPageHeading />
        </header>
        <footer className="flex flex-col items-center">
          <Button value={'Create an Account'} />
        </footer>
      </>
    </Container>
  )
}

export default AuthPage
