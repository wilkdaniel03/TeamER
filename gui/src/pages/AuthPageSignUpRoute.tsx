import React from 'react'
import { Button, RedirectingParagraph } from '../components'
import googleIcon from '../img/google.png'
import facebookIcon from '../img/facebook.png'

export const AuthPageSignUpRoute = () => {
  return (
    <footer className="flex flex-col items-center">
      <Button link="/auth/signup" value={'Next'} />
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
      <RedirectingParagraph
        value="I already have an account"
        linkValue="Sign In"
        link="/auth/signin"
      />
    </footer>
  )
}
