import React from 'react'
import CareCodeForm from '@/pages/form/CareCodeForm'
import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  CHECKOUT_PATH,
  LOGIN_PATH,
  MEDICAL_FORM_PATH,
  MY_ACCOUNT_PATH,
  PASSWORD_RESET,
  PUBLIC_MEDICAL_INFO,
} from './utils/paths'
import LoginPage from './pages/login/LoginPage'
import LandingPage from './pages/landingPage/LandingPage'
import Checkout from './pages/checkout/Checkout'
import MyAccount from './pages/myAccount/MyAccount'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PublicMedicalInfo from './pages/publicInfo/PublicMedicalInfo'
import AuthContextProviderWrapper from './providers/AuthContextProvider'
import ForgotPassword from './pages/login/ForgotPassword'
import '@/i18n'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: false,
    },
  },
})

function App(): React.JSX.Element {
  return (
    <AuthContextProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            <Route path={'/'} element={<LandingPage />}></Route>
            <Route path={MEDICAL_FORM_PATH} element={<CareCodeForm />}></Route>
            <Route path={LOGIN_PATH} element={<LoginPage />}></Route>
            <Route path={CHECKOUT_PATH} element={<Checkout />}></Route>
            <Route path={MY_ACCOUNT_PATH} element={<MyAccount />}></Route>
            <Route
              path={PUBLIC_MEDICAL_INFO}
              element={<PublicMedicalInfo />}
            ></Route>
            <Route path={PASSWORD_RESET} element={<ForgotPassword />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthContextProviderWrapper>
  )
}

export default App
