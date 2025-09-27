import React from 'react'
import CareCodeForm from '@/pages/form/CareCodeForm'
import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LOGIN_PATH, MEDICAL_FORM_PATH } from './utils/paths'
import LoginPage from './pages/login/LoginPage'
import LandingPage from './pages/landingPage/LandingPage'

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path={'/'} element={<LandingPage />}></Route>
        <Route path={MEDICAL_FORM_PATH} element={<CareCodeForm />}></Route>
        <Route path={LOGIN_PATH} element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
