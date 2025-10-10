import NavBar from '@/components/NavBar'
import { useRef, type JSX, type RefObject } from 'react'
import HowItWorksPage from './howItWorks/HowItWorksPage'
import PresentationPage from './presentation/PresentationPage'
import FeaturesPage from './features/FeaturesPage'
import PricingPage from './pricing/PricingPage'
import FAQPage from './faq/FAQPage'

export type RefType = {
  ref: RefObject<HTMLElement>
}

function LandingPage(): JSX.Element {
  const presentationRef = useRef<HTMLElement>(null)
  const howItWorksRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)

  const onClick = (ref: RefObject<HTMLElement>) => {
    const navbar = document.querySelector<HTMLElement>('nav')
    const offset = navbar ? navbar.offsetHeight : 0

    const elementTop = ref.current.getBoundingClientRect().top + window.scrollY
    const scrollTo = elementTop - offset

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    })
  }

  return (
    <main className="h-full">
      <NavBar
        sectionRefs={{
          presentation: presentationRef,
          howItWorks: howItWorksRef,
          features: featuresRef,
          pricing: pricingRef,
          faq: faqRef,
        }}
        onClick={onClick}
      />
      <PresentationPage
        onClick={onClick}
        ref={presentationRef}
        howItWorksRef={howItWorksRef}
      />
      <HowItWorksPage ref={howItWorksRef} />
      <FeaturesPage ref={featuresRef} />
      <PricingPage ref={pricingRef} />
      <FAQPage ref={faqRef} />
    </main>
  )
}

export default LandingPage
