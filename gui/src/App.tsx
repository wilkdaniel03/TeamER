import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/authPage'
import { AuthPageRoute } from './pages

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="auth" element={<AuthPage />}>
          <Route index element={<AuthPageRoute />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
