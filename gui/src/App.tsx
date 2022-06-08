import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/authPage'
import './index.css'

const App = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Navigate replace to="/auth" />} />
                <Route path="auth" element={<AuthPage />} />
            </Routes>
        </main>
    )
}

export default App
