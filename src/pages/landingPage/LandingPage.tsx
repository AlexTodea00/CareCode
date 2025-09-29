import NavBar from '@/components/NavBar'
import type { JSX } from 'react'
import PresentationPage from './PresentationPage'

function LandingPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <PresentationPage />
      </main>
    </>
  )
}

export default LandingPage
