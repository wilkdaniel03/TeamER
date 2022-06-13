import React from 'react'
import { useLocation } from 'react-router-dom'

enum HeadingContent {
  MAIN = 'Welcome to TeamER!',
  SIGNIN = 'Welcome Back!',
  SIGNUP = 'Create an Account!',
}

enum SubHeadingContent {
  MAIN = "It's great place to get your team's performance to next level!",
  SIGNIN = 'Great to see you again! You can login to your account below.',
  SINGUP = 'Create an account in few simple steps!',
}

const AuthPageHeading = () => {
  const location = useLocation()

  switch (location.pathname) {
    case '/auth':
      return (
        <>
          <h1 className="block text-4xl font-semibold">
            {HeadingContent.MAIN}
          </h1>
          <h2 className="block mt-4 opacity-60">{SubHeadingContent.MAIN}</h2>
        </>
      )
    case '/auth/signin':
      return (
        <>
          <h1 className="block text-2xl font-semibold">
            {HeadingContent.SIGNIN}
          </h1>
          <h2 className="block mt-4 opacity-60">{SubHeadingContent.SIGNIN}</h2>
        </>
      )
    case '/auth/signup':
      return (
        <>
          <h1 className="block text-2xl font-semibold">
            {HeadingContent.SIGNUP}
          </h1>
          <h2 className="block mt-4 opacity-60">{SubHeadingContent.SINGUP}</h2>
        </>
      )
    default:
      return null
  }
}

export default AuthPageHeading
