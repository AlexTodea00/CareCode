import React from 'react'
import CareCodeForm from '@/pages/form/CareCodeForm'
import { Toaster } from 'sonner'

function App(): React.JSX.Element {
  return (
    <>
      <Toaster position="top-right" />
      <CareCodeForm />
    </>
  )
}

export default App
