import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import type { RefType } from '../LandingPage'

export default function PricingPage({ ref }: RefType): JSX.Element {
  return (
    <section ref={ref} className={styles.container}>
      <h1 className={`${styles['text-red']} text-4xl`}>Pricing: TBD</h1>
    </section>
  )
}
