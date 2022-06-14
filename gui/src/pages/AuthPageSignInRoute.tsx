import React from 'react'
import { Button, RedirectingParagraph, Input } from '../components'
import googleIcon from '../img/google.png'
import facebookIcon from '../img/facebook.png'
import { FormikProps, Formik } from 'formik'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

interface Values {
  login: string
  password: string
}

export const AuthPageSignInRoute = () => {
  return (
    <footer className="flex flex-col items-center mt-8 pb-8">
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(props: FormikProps<Values>) => (
          <form className="w-full mb-10">
            <Input name="login" type="text" label="Login" icon={faUser} />
            <Input
              name="password"
              type="password"
              label="Password"
              icon={faLock}
            />
          </form>
        )}
      </Formik>
      <Button link="/auth/signup" value={'Sign In'} />
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
        value="I dont have an account"
        linkValue="Sign Up"
        link="/auth/signup"
      />
    </footer>
  )
}
