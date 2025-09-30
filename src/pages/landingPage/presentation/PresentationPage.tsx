import type { JSX } from 'react'
import styles from '@/styles/presentationPage.module.scss'
import { Button } from '@/components/ui/button'
import QRCodeSample from './QRCodeSample'
import { Badge } from '@/components/ui/badge'
import type { RefType } from '../LandingPage'

export default function PresentationPage({ ref }: RefType): JSX.Element {
  return (
    <section ref={ref} className={styles.section}>
      <div>
        <span className={styles.text}>Medical Information</span>
        <span className={`${styles.text} ${styles['text-red']}`}>
          When It Matters Most
        </span>
        <p className={styles.description}>
          CareCode provides emergency responders instant access to your vital
          medical information through a simple QR code sticker. Because in an
          emergency, every second counts.
        </p>
        <Button className={`${styles.button} ${styles.primary}`} type="button">
          Get yours
        </Button>
        <Button
          className={`${styles.button} ${styles.secondary}`}
          type="button"
        >
          How it works
        </Button>
        <div>
          <Badge className=" mt-4 h-10 justify-center mr-4" variant="outline">
            24/7 Access
          </Badge>
          <Badge className=" mt-4 h-10 justify-center" variant="outline">
            Medical support
          </Badge>
        </div>
      </div>
      <QRCodeSample />
    </section>
  )
}
