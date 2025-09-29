import NavBar from '@/components/NavBar'
import type { JSX } from 'react'
import HowItWorksPage from './howItWorks/HowItWorksPage'
import PresentationPage from './presentation/PresentationPage'

function LandingPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <PresentationPage />
        <HowItWorksPage />
      </main>
    </>
  )
}

export default LandingPage
