import React from 'react'
import facebookIcon from '../img/facebook.png'
import googleIcon from '../img/google.png'
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
          <div className="flex justify-evenly w-2/3">
            <span className="w-16 h-16 flex justify-center items-center mt-8 rounded-full shadow-md">
              <img src={facebookIcon} width="48px" />
            </span>
            <span className="w-16 h-16 flex justify-center items-center mt-8 rounded-full shadow-md">
              <img src={googleIcon} width="40px" />
            </span>
          </div>
          <h2 className="block mt-8">
            I already have an account
            <span className="text-blue font-medium"> Login</span>
          </h2>
        </footer>
      </>
    </Container>
  )
}

export default AuthPage
