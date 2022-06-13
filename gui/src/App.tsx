import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/authPage'
import {
  AuthPageRoute,
  AuthPageSignInRoute,
  AuthPageSignUpRoute,
} from './pages'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="auth" element={<AuthPage />}>
          <Route index element={<AuthPageRoute />} />
          <Route path="signin" element={<AuthPageSignInRoute />} />
          <Route path="signup" element={<AuthPageSignUpRoute />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
