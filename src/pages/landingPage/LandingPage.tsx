import NavBar from '@/components/NavBar'
import { useRef, type JSX, type Ref } from 'react'
import HowItWorksPage from './howItWorks/HowItWorksPage'
import PresentationPage from './presentation/PresentationPage'
import FeaturesPage from './features/FeaturesPage'
import PricingPage from './pricing/PricingPage'
import FAQPage from './faq/FAQPage'

export type RefType = {
  ref: Ref<HTMLElement>
}

function LandingPage(): JSX.Element {
  const presentationRef = useRef<HTMLElement>(null)
  const howItWorksRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)

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
      />
      <PresentationPage ref={presentationRef} />
      <HowItWorksPage ref={howItWorksRef} />
      <FeaturesPage ref={featuresRef} />
      <PricingPage ref={pricingRef} />
      <FAQPage ref={faqRef} />
    </main>
  )
}

export default LandingPage
