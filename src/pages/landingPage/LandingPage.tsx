import NavBar from '@/components/NavBar'
import type { JSX } from 'react'
import PresentationPage from './PresentationPage'

function LandingPage(): JSX.Element {
  return (
    <main>
      <NavBar />
      <PresentationPage />
    </main>
  )
}

export default LandingPage
