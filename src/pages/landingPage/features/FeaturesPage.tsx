import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import StepCard from '../howItWorks/Card'
import ClockIcon from '@/assets/icons/clock.svg?react'
import SmartPhoneIcon from '@/assets/icons/smartphone.svg?react'
import CloudIcon from '@/assets/icons/cloud.svg?react'
import LockIcon from '@/assets/icons/lock.svg?react'
import UpdateIcon from '@/assets/icons/update.svg?react'
import { Button } from '@/components/ui/button'
import type { RefType } from '../LandingPage'

export default function FeaturesPage({ ref }: RefType): JSX.Element {
  return (
    <section ref={ref} className={`${styles.container} bg-[#f9fafb]`}>
      <h1 className={styles.title}>Features that Save Lives </h1>
      <p className={styles.subtitle}>
        CareCode is designed with one goal: to provide critical medical
        information when it matters most
      </p>
      <div className={styles.wrapper}>
        <StepCard
          title={'Accessible 24/7'}
          description={
            'Emergency responders can access your information anytime, anywhere.'
          }
          Icon={ClockIcon}
        />
        <StepCard
          title={'Works on any smartphone'}
          description={
            'No special app required. Your CareCode works with any smartphone camera or QR scanner app.'
          }
          Icon={SmartPhoneIcon}
        />
        <StepCard
          title={'Cloud storage'}
          description={
            'Your information is securely stored in the cloud, so you can update it anytime from any device.'
          }
          Icon={CloudIcon}
        />
        <StepCard
          title={'Privacy controls'}
          description={
            'You decide exactly what information is visible and who can access different parts of your medical profile.'
          }
          Icon={LockIcon}
        />
        <StepCard
          className={styles['center-grid-element']}
          title={'Easy updates'}
          description={
            'Update your medical information anytime through our secure portal – your QR code stays the same.'
          }
          Icon={UpdateIcon}
        />
      </div>
      <Button className={styles['get-started']}>Get yours now!</Button>
    </section>
  )
}
