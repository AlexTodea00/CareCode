import React from 'react'
import CareCodeForm from '@/pages/form/CareCodeForm'
import { Toaster } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  CHECKOUT_PATH,
  LOGIN_PATH,
  MEDICAL_FORM_PATH,
  MY_ACCOUNT_PATH,
  PUBLIC_MEDICAL_INFO,
} from './utils/paths'
import LoginPage from './pages/login/LoginPage'
import LandingPage from './pages/landingPage/LandingPage'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import Checkout from './pages/checkout/Checkout'
import { getFirestore } from 'firebase/firestore'
import MyAccount from './pages/myAccount/MyAccount'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PublicMedicalInfo from './pages/publicInfo/PublicMedicalInfo'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

function App(): React.JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
        retry: false,
      },
    },
  })

  return (
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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
