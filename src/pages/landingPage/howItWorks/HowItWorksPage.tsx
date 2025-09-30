import type { JSX } from 'react'
import styles from '@/styles/landingPageGeneral.module.scss'
import StepCard from './Card'
import EditIcon from '@/assets/icons/edit.svg?react'
import QRCodeIcon from '@/assets/icons/qr_icon_small.svg?react'
import AmbulanceIcon from '@/assets/icons/ambulance.svg?react'
import HeartIcon from '@/assets/icons/heart_small.svg?react'
import { Button } from '@/components/ui/button'
import type { RefType } from '../LandingPage'

export default function HowItWorksPage({ ref }: RefType): JSX.Element {
  return (
    <section ref={ref} className={styles.container}>
      <h1 className={styles.title}>How CareCode works</h1>
      <p className={styles.subtitle}>
        A simple four-step process that could save your life in an emergency
      </p>
      <div className={styles.wrapper}>
        <StepCard
          title={'Create Your Profile'}
          description={
            'Enter your medical information, emergency contacts, and other vital details securely in our system.'
          }
          Icon={EditIcon}
        />
        <StepCard
          title={'Receive your CareCode sticker'}
          description={
            "We'll send you durable, waterproof QR code sticker that you can place on your belongings or wear as a bracelet."
          }
          Icon={QRCodeIcon}
        />
        <StepCard
          title={'First responsers scan'}
          description={
            'In an emergency, medical professionals scan your QR code with any smartphone to access your critical information.'
          }
          Icon={AmbulanceIcon}
        />
        <StepCard
          title={'Faster, better care'}
          description={
            'Responders can provide appropriate treatment immediately, avoiding harmful interactions and contacting your loved ones.'
          }
          Icon={HeartIcon}
        />
      </div>
      <Button className={styles['get-started']}>
        Sign up for CareCode now
      </Button>
    </section>
  )
}
