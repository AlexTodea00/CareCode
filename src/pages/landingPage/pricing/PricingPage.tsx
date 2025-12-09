import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import type { RefType } from '../LandingPage'
import { useTranslation } from 'react-i18next'

export default function PricingPage({ ref }: RefType): JSX.Element {
  const { t } = useTranslation()

  return (
    <section ref={ref} className={styles.container}>
      <h1 className={`${styles['text-red']} text-4xl`}>
        {t('pricingPage.status')}
      </h1>
    </section>
  )
}
