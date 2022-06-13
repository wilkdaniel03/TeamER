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
          <div className="w-full h-0.5 bg-gray mt-8 opacity-60">
            <span className="block relative text-center bg-white w-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2">
              or Sign up with
            </span>
          </div>
        </footer>
      </>
    </Container>
  )
}

export default AuthPage
